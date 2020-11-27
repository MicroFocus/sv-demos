// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
package demo;

import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.header.internals.RecordHeader;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.AbstractEnvironment;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.listener.ContainerProperties;
import org.springframework.kafka.listener.KafkaMessageListenerContainer;
import org.springframework.kafka.requestreply.ReplyingKafkaTemplate;
import org.springframework.kafka.requestreply.RequestReplyFuture;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonSerializer;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.Duration;
import java.util.concurrent.ExecutionException;

@Profile("client")
@SpringBootApplication
@EnableScheduling
public class SpringRpcClient implements CommandLineRunner {

    // configured client run duration, Kafka node and topics
    @Autowired
    KafkaProperties kafkaProperties;

    @Value("${client.duration:6000}")
    private int duration;

    @Value(value = "${client.request-topic}")
    String requestTopic;

    @Value(value = "${client.reply-topic}")
    String replyTopic;

    // beans for KafkaTemplate
    @Bean
    public NewTopic replyTopic() {
        return new NewTopic(replyTopic, 1, (short) 1);
    }

    @Bean
    public ProducerFactory<String, FibRequest> requestProducerFactory() {
        return new DefaultKafkaProducerFactory<>(kafkaProperties.buildProducerProperties(),
            new StringSerializer(), new JsonSerializer<>());
    }

    @Bean
    public ConsumerFactory<String, FibResponse> replyConsumerFactory() {
        return new DefaultKafkaConsumerFactory<>(kafkaProperties.buildConsumerProperties(),
            new StringDeserializer(), new JsonDeserializer<>(FibResponse.class));
    }

    @Bean
    public ReplyingKafkaTemplate<String, FibRequest, FibResponse> replyKafkaTemplate(ProducerFactory<String, FibRequest> pf, KafkaMessageListenerContainer<String, FibResponse> container) {
        return new ReplyingKafkaTemplate<>(pf, container);
    }

    @Bean
    public KafkaMessageListenerContainer<String, FibResponse> replyContainer(ConsumerFactory<String, FibResponse> cf) {
        ContainerProperties containerProperties = new ContainerProperties(replyTopic);
        return new KafkaMessageListenerContainer<>(cf, containerProperties);
    }

    @Autowired
    private ReplyingKafkaTemplate<String, FibRequest, FibResponse> kafka;

    @Autowired
    private ConfigurableApplicationContext ctx;

    int start = 1;


    @Scheduled(fixedDelay = 1000, initialDelay = 500)
    public void send() throws ExecutionException, InterruptedException {
        System.out.println(" [x] Requesting fib(" + start + ")");

        ProducerRecord<String, FibRequest> record = new ProducerRecord<>(requestTopic, new FibRequest(start++));
        record.headers().add(new RecordHeader(KafkaHeaders.REPLY_TOPIC, replyTopic.getBytes()));
        RequestReplyFuture<String, FibRequest, FibResponse> sendAndReceive = kafka.sendAndReceive(record, Duration.ofSeconds(3));
        FibResponse response = sendAndReceive.get().value();

        System.out.println(" [.] Got '" + response + "'");
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Sending requests to '" + requestTopic + "', awaiting responses at '" + replyTopic + "'");
        System.out.println("Running for " + duration + " ms");
        Thread.sleep(duration);
        ctx.close();
    }

    public static void main(String[] args) {
        // use "client" Spring profile if not specified otherwise
        if (System.getProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME) == null) {
            System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "client");
        }
        SpringApplication.run(SpringRpcClient.class, args);
    }

}
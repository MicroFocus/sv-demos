// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
package demo;

import org.apache.kafka.clients.admin.NewTopic;
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
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.config.KafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.listener.ConcurrentMessageListenerContainer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.support.serializer.JsonSerializer;
import org.springframework.messaging.handler.annotation.SendTo;

@Profile("server")
@SpringBootApplication
public class SpringRpcServer implements CommandLineRunner {

    // configured Kafka properties and topics
    @Autowired
    KafkaProperties kafkaProperties;

    @Value(value = "${server.request-topic}")
    private String requestTopic;

    @Value(value = "${server.reply-topic}")
    private String replyTopic;


    // beans for KafkaTemplate
    @Bean
    public NewTopic requestTopic() {
        return new NewTopic(requestTopic, 1, (short) 1);
    }

    // kafka configuration for request-reply
    @Bean
    public ConsumerFactory<String, FibRequest> requestConsumerFactory() {
        return new DefaultKafkaConsumerFactory<>(kafkaProperties.buildConsumerProperties(), new StringDeserializer(), new JsonDeserializer<>(FibRequest.class));
    }

    @Bean
    public ProducerFactory<String, FibResponse> replyProducerFactory() {
        return new DefaultKafkaProducerFactory<>(kafkaProperties.buildProducerProperties(),
            new StringSerializer(), new JsonSerializer<>());
    }

    @Bean
    public KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, FibRequest>> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, FibRequest> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(requestConsumerFactory());
        factory.setReplyTemplate(replyTemplate());
        return factory;
    }

    @Bean
    public KafkaTemplate<String, FibResponse> replyTemplate() {
        return new KafkaTemplate<>(replyProducerFactory());
    }

    @Autowired
    private ConfigurableApplicationContext ctx;


    @KafkaListener(topics = "${server.request-topic}")
    @SendTo
    public FibResponse listen(FibRequest request) {
        System.out.println(" [x] Received request for " + request);
        FibResponse result = new FibResponse(request.n, fib(request.n));
        System.out.println(" [.] Returned " + result);
        return result;
    }

    public int fib(int n) {
        return n == 0 ? 0 : n == 1 ? 1 : (fib(n - 1) + fib(n - 2));
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Listening at '" + requestTopic + "', press <Enter> to quit.");
        System.in.read();
        ctx.close();
    }

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "server");
        SpringApplication.run(SpringRpcServer.class, args);
    }

}
// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
package demo;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.AbstractEnvironment;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Profile("client")
@SpringBootApplication
@EnableScheduling
public class SpringRpcClient implements CommandLineRunner {

    // configured client run duration, exchange and routing key
    @Value("${client.duration:10000}")
    private int duration;

    @Value("${client.req-exchange}")
    String exchangeName;

    @Value("${client.routing-key}")
    String routingKey;

    @Bean
    public MessageConverter jsonMessageConverter() {
        // You can switch to XML payload:
        // return new Jackson2XMLMessageConverter();
        return new Jackson2JsonMessageConverter();
    }

    @Autowired
    private RabbitTemplate template;

    @Autowired
    private ConfigurableApplicationContext ctx;

    int start = 1;


    @Scheduled(fixedDelay = 1000, initialDelay = 500)
    public void send() {
        System.out.println(" [x] Requesting fib(" + start + ")");
        FibResponse response = (FibResponse) template.convertSendAndReceive
            (exchangeName, routingKey, new FibRequest(start++));
        System.out.println(" [.] Got '" + response + "'");
    }


    @Override
    public void run(String... args) throws Exception {
        System.out.println("Sending requests to '" + exchangeName + "/" + routingKey + "'");
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
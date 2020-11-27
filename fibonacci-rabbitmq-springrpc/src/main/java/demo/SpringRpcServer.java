// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
package demo;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
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

@Profile("server")
@SpringBootApplication
public class SpringRpcServer implements CommandLineRunner {

    // configured exchange, queue and binding
    @Value("${server.req-exchange}")
    String exchangeName;

    @Value("${server.req-queue}")
    String queueName;

    @Value("${server.binding-key}")
    String bindingKey;


    // beans for RabbitTemplate
    @Bean
    public TopicExchange exchange() {
        return new TopicExchange(exchangeName);
    }

    @Bean
    public Queue queue() {
        return new Queue(queueName);
    }

    @Bean
    public Binding binding(TopicExchange exchange,
                           Queue queue) {
        return BindingBuilder.bind(queue)
            .to(exchange)
            .with(bindingKey);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        // You can switch to XML payload:
        // return new Jackson2XMLMessageConverter();
        return new Jackson2JsonMessageConverter();
    }

    @Autowired
    private ConfigurableApplicationContext ctx;


    // service implementation
    @RabbitListener(queues = "${server.req-queue}")
    // @SendTo("${server.resp-queue}") used when the client doesn't set replyTo.
    public FibResponse fibonacci(FibRequest request) {
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
        System.out.println("Listening at '" + exchangeName + "/" + bindingKey + "', press <Enter> to quit.");
        System.in.read();
        ctx.close();
    }

    public static void main(String[] args) {
        System.setProperty(AbstractEnvironment.ACTIVE_PROFILES_PROPERTY_NAME, "server");
        SpringApplication.run(SpringRpcServer.class, args);
    }

}
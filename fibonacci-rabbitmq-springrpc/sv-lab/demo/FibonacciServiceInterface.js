import * as sv from "../../../lib/sv-vsl.js";

export class FibonacciServiceInterface extends sv.RabbitMqServiceInterface {
    @sv.operation
    fib():sv.RabbitMqOperation{
        return new sv.RabbitMqOperation("fibEndpoint")
            .withRequest({
                  "n" : 0
                }, sv.JSON, "demo.FibRequest")
            .withResponse({
                  "n" : 0,
                  "fibN" : 0
                }, sv.JSON, "demo.FibResponse");
    }

}
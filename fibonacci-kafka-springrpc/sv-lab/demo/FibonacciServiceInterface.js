import * as sv from "../../../lib/sv-vsl.js";

export class FibonacciServiceInterface extends sv.KafkaServiceInterface {
    @sv.operation
    fib(): sv.KafkaOperation {
        return new sv.KafkaOperation("fibEndpoint")
            .withRequest({
                    "n": 0
                }
                , sv.JSON, "demo.FibRequest")
            .withResponse({
                    "n": 0,
                    "fibN": 0
                }, sv.JSON, "demo.FibResponse")
            .withSpringCorrelation();
    }

}
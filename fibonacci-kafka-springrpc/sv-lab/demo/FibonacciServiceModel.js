import * as sv from "../../../lib/sv-vsl.js";
import {FibonacciServiceInterface} from "./FibonacciServiceInterface.js";

export class FibonacciServiceModel extends sv.ServiceModel {

    constructor(service: FibonacciServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    compute() {
        this.service.fib()
            .withRequest({"n" : 1}, sv.JSON)
            .withResponse({
                "n" : 1,
                "fibN" : 1
            }, sv.JSON);

        this.service.fib()
            .withRequest({"n" : 2}, sv.JSON)
            .withResponse({
                "n" : 2,
                "fibN" : 1
            }, sv.JSON);

        this.service.fib()
            .withRequest({"n" : 3}, sv.JSON)
            .withResponse({
                "n" : 3,
                "fibN" : 2
            }, sv.JSON);

        this.service.fib()
            .withRequest({"n" : 4}, sv.JSON)
            .withResponse({
                "n" : 4,
                "fibN" : 3
            }, sv.JSON);

        this.service.fib()
            .withRequest({"n" : 5}, sv.JSON)
            .withResponse({
                "n" : 5,
                "fibN" : 5
            }, sv.JSON);
    }

}
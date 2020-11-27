import * as sv from "../../../lib/sv-vsl.js";
import {FibonacciServiceModel} from "./FibonacciServiceModel.js";

export class RabbitMqDemoApplicationModel extends sv.ApplicationModel {

    constructor(smFibonacciServiceModel: FibonacciServiceModel) {
        super();
        this.smFibonacciServiceModel = smFibonacciServiceModel;
    }

    @sv.applicationScenario
    compute() {
        sv.forkScenario(() => this.smFibonacciServiceModel.compute());
    }

}
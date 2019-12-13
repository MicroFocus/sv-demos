// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"
import {HelloServiceModel} from "HelloServiceModel.js"

export class HelloApplicationModel extends sv.ApplicationModel {

    constructor(smHelloServiceModel: HelloServiceModel) {
        super();
        this.smHelloServiceModel = smHelloServiceModel;
    }

    @sv.applicationScenario
    sayHello() {
        this.smHelloServiceModel.simpleSayHello();
    }
}

// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"
import {HelloAdvancedServiceModel} from "HelloAdvancedServiceModel.js"

export class HelloAdvancedApplicationModel extends sv.ApplicationModel {

    constructor(smHelloServiceModel: HelloAdvancedServiceModel) {
        super();
        this.smHelloServiceModel = smHelloServiceModel;
    }

    @sv.applicationScenario
    sayHello() {
        this.smHelloServiceModel.simpleSayHello();
    }
}

// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
import * as sv from "../../../../../../lib/sv-vsl.js"
import {CarOrderServiceModel} from "CarOrderServiceModel.js"

export class CarOrderApplicationModel extends sv.ApplicationModel {

    constructor(smCarOrderServiceModel: CarOrderServiceModel) {
        super();
        this.smCarOrderServiceModel = smCarOrderServiceModel;
    }

    @sv.applicationScenario
    carOrder() {
        sv.forkScenario(() => this.smCarOrderServiceModel.getOptions());
        sv.forkScenario(() => this.smCarOrderServiceModel.getPrice());
    }
}

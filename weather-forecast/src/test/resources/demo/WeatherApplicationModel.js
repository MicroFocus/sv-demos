// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"
import {WeatherServiceModel} from "WeatherServiceModel.js";

export class WeatherApplicationModel extends sv.ApplicationModel {

    constructor(smWeatherServiceModel: WeatherServiceModel) {
        super();
        this.weatherServiceModel = smWeatherServiceModel;
    }

    @sv.applicationScenario
    weatherForecast() {
        sv.forkScenario(() => this.weatherServiceModel.weatherForecast());
    }

}
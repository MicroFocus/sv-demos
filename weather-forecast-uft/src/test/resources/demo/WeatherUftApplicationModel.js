// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"
import {WeatherUftServiceModel} from "WeatherUftServiceModel.js";

export class WeatherUftApplicationModel extends sv.ApplicationModel {

    constructor(smWeatherUftServiceModel: WeatherUftServiceModel) {
        super();
        this.weatherUftServiceModel = smWeatherUftServiceModel;
    }

    @sv.applicationScenario
    weatherForecast() {
        sv.forkScenario(() => this.weatherUftServiceModel.weatherForecast());
    }

}
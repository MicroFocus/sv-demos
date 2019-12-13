import * as sv from "sv-vsl";

import {WeatherUftServiceModel} from "./WeatherUftServiceModel.js";

export class WeatherUftApplicationModel extends sv.ApplicationModel {

    constructor(smWeatherUftServiceModel: WeatherUftServiceModel) {
        super();
        this.smWeatherUftServiceModel = smWeatherUftServiceModel;
    }

    @sv.applicationScenario
    weatherForecast() {
        sv.forkScenario(() => this.smWeatherUftServiceModel.weatherForecast());
    }

}
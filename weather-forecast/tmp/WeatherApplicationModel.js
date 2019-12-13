import * as sv from "sv-vsl";

import {WeatherServiceModel} from "./WeatherServiceModel.js";

export class WeatherApplicationModel extends sv.ApplicationModel {

    constructor(smWeatherServiceModel: WeatherServiceModel) {
        super();
        this.smWeatherServiceModel = smWeatherServiceModel;
    }

    @sv.applicationScenario
    weatherForecast() {
        sv.forkScenario(() => this.smWeatherServiceModel.weatherForecast());
    }

}
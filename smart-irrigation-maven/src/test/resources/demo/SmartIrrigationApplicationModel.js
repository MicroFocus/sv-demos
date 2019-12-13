// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"
import {WeatherForecastServiceModel} from "WeatherForecastServiceModel.js"

export class SmartIrrigationApplicationModel extends sv.ApplicationModel {

    constructor(weatherForecastServiceModel:WeatherForecastServiceModel) {
        super();
        this.weatherForecastServiceModel = weatherForecastServiceModel;
    }

    @sv.applicationScenario
    rainyDay() {
        this.weatherForecastServiceModel.rainyDayMeteogram();
    }

    @sv.applicationScenario
    dryDay() {
        this.weatherForecastServiceModel.dryDayMeteogram();
    }
}

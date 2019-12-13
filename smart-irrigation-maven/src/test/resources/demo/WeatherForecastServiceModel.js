// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"

export class WeatherForecastServiceModel extends sv.ServiceModel {

    constructor(service: sv.RestServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    rainyDayMeteogram() {
        this.service.GET("/apirun")
            .withRequest()
            .withResponse({
                "id": "190515_12"
            }, sv.JSON)                                                     // the response type is JSON
                .withHeaders({"Content-Type": "application/json"})  // necessary response headers
                .withStatusCode(200);

        this.service.GET("/apimeteogram")
            .withRequest()
                .withQueryParameters(sv.svVar({}))                    // ignore query parameters
            .withResponse({
                "data": {
                    "rain_dif": {
                        "max": 10.0,
                        "values": [
                            2.1297, 1.2324, 2.4592, 2.5837, 2.5626, 1.4771,
                            4.7732, 0.9072, 0.1293, 0.0546, 0.0113, 0.0176,
                            0.0151, 0.0022, 0.0040, 0.0001, 0.0025, 0.0001,
                            0.0001, 0.0087, 0.0013, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0036, 0.0263, 0.0154, 0.0,
                            0.0, 0.0, 0.0, 0.0078, 0.0832, 0.2934,
                            0.6513, 0.6069, 0.9379, 1.0866, 0.2960, 0.1482,
                            0.3633, 3.1152, 0.7047, 2.8502, 2.6265, 1.1638],
                        "unit": {"cz": "mm/h", "gb": "mm/h"},
                        "gridStep": 1,
                        "min": 0
                    }
                }
            }, sv.JSON)                                                 // the response type is JSON
            .withHeaders({"Content-Type": "application/json"})  // necessary response headers
            .withStatusCode(200);
    }

    @sv.scenario
    dryDayMeteogram() {
        this.service.GET("/apirun")
            .withRequest()
            .withResponse({
                "id": "190515_12"
            }, sv.JSON)                                                     // the response type is JSON
            .withHeaders({"Content-Type": "application/json"})      // necessary response headers
            .withStatusCode(200);

        this.service.GET("/apimeteogram")
            .withRequest()
                .withQueryParameters(sv.svVar({}))                    // ignore query parameters
            .withResponse({
                "data": {
                    "rain_dif": {
                        "max": 10.0,
                        "values": [
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0036, 0.0263, 0.0154, 0.0,
                            0.0, 0.0, 0.0, 0.0078, 0.0832, 0.2934,
                            0.6513, 0.6069, 0.9379, 1.0866, 0.2960, 0.1482,
                            0.3633, 3.1152, 0.7047, 2.8502, 2.6265, 1.1638,
                            2.1297, 1.2324, 2.4592, 2.5837, 2.5626, 1.4771,
                            4.7732, 0.9072, 0.1293, 0.0546, 0.0113, 0.0176,
                            0.0151, 0.0022, 0.0040, 0.0001, 0.0025, 0.0001,
                            0.0001, 0.0087, 0.0013, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                            0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                        "unit": {"cz": "mm/h", "gb": "mm/h"},
                        "gridStep": 1,
                        "min": 0
                    }
                }
            }, sv.JSON)                                                 // the response type is JSON
            .withHeaders({"Content-Type": "application/json"})  // necessary response headers
            .withStatusCode(200);
    }


}

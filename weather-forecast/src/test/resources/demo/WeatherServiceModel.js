// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"
import {WeatherServiceInterface} from "WeatherServiceInterface.js";

export class WeatherServiceModel extends sv.ServiceModel {

    constructor(service: WeatherServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    weatherForecast() {
        const connection = sv.svVar("keep-alive");
        const httpHeaders0 = sv.svVar({"User-Agent":"Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-G800F Build/MMB29K)","Connection":connection,"Accept-Encoding":"gzip"});
        const httpHeaders1 = sv.svVar({"Server":"openresty","Date":"Mon, 04 Nov 2019 14:24:06 GMT","Content-Type":"application/json; charset=utf-8","Connection":connection,"X-Cache-Key":"/data/2.5/weather?id=2643743&lang=en&mode=json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET, POST"});
        const httpHeaders2 = sv.svVar({"User-Agent":"Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-G800F Build/MMB29K)","Connection":connection,"Accept-Encoding":"gzip"});
        const httpHeaders3 = sv.svVar({"Server":"openresty","Date":"Mon, 04 Nov 2019 14:24:06 GMT","Content-Type":"application/json; charset=utf-8","Connection":connection,"X-Cache-Key":"/data/2.5/forecast?id=2643743&lang=en&mode=json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET, POST"});
        const httpHeaders4 = sv.svVar({"User-Agent":"Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-G800F Build/MMB29K)","Connection":connection,"Accept-Encoding":"gzip"});
        const httpHeaders5 = sv.svVar({"Server":"openresty","Date":"Mon, 04 Nov 2019 14:24:09 GMT","Content-Type":"application/json; charset=UTF-8","Connection":connection,"X-Cache-Key":"/data/2.5/uvi?lang=en&lat=51.51&lon=-0.13&mode=json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET, POST"});
        this.service.GET("/data/2.5/weather")
            .withRequest()
            .withHeaders(httpHeaders0)
            .withQueryParameters({"mode":"json","appid":"3e29e62e2ddf6dd3d2ebd28aed069215","id":"2643743","lang":"en"})
            .withResponse(
                {
                  "coord" : {
                    "lon" : -0.13,
                    "lat" : 51.51
                  },
                  "weather" : [ {
                    "id" : 803,
                    "main" : "Clouds",
                    "description" : "broken clouds",
                    "icon" : "04d"
                  } ],
                  "base" : "stations",
                  "main" : {
                    "temp" : 315.15,
                    "pressure" : 984,
                    "humidity" : 71,
                    "temp_min" : 283.15,
                    "temp_max" : 286.15
                  },
                  "visibility" : 10000,
                  "wind" : {
                    "speed" : 1.5
                  },
                  "rain" : { },
                  "clouds" : {
                    "all" : 75
                  },
                  "dt" : 1572877106,
                  "sys" : {
                    "type" : 1,
                    "id" : 1414,
                    "country" : "GB",
                    "sunrise" : 1572850715,
                    "sunset" : 1572884972
                  },
                  "timezone" : 0,
                  "id" : 2643743,
                  "name" : "London",
                  "cod" : 200
                }
            , sv.JSON)
            .withHeaders(httpHeaders1)
            .withStatusCode(200)
            .withDelay(906);
        this.service.GET("/data/2.5/forecast")
            .withRequest()
            .withHeaders(httpHeaders2)
            .withQueryParameters({"mode":"json","appid":"3e29e62e2ddf6dd3d2ebd28aed069215","id":"2643743","lang":"en"})
            .withDelay(122)
            .withResponse(
                {
                  "cod" : "200",
                  "message" : 0,
                  "cnt" : 40,
                  "list" : [ {
                    "dt" : 1572879600,
                    "main" : {
                      "temp" : 283.9,
                      "temp_min" : 283.9,
                      "temp_max" : 285.24,
                      "pressure" : 983,
                      "sea_level" : 983,
                      "grnd_level" : 979,
                      "humidity" : 69,
                      "temp_kf" : -1.35
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10d"
                    } ],
                    "clouds" : {
                      "all" : 100
                    },
                    "wind" : {
                      "speed" : 3.19,
                      "deg" : 115
                    },
                    "rain" : {
                      "3h" : 1
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-04 15:00:00"
                  }, {
                    "dt" : 1572890400,
                    "main" : {
                      "temp" : 282.89,
                      "temp_min" : 282.89,
                      "temp_max" : 283.9,
                      "pressure" : 984,
                      "sea_level" : 984,
                      "grnd_level" : 980,
                      "humidity" : 77,
                      "temp_kf" : -1.01
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 99
                    },
                    "wind" : {
                      "speed" : 1.86,
                      "deg" : 83
                    },
                    "rain" : {
                      "3h" : 1.06
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-04 18:00:00"
                  }, {
                    "dt" : 1572901200,
                    "main" : {
                      "temp" : 282.27,
                      "temp_min" : 282.27,
                      "temp_max" : 282.94,
                      "pressure" : 986,
                      "sea_level" : 986,
                      "grnd_level" : 982,
                      "humidity" : 80,
                      "temp_kf" : -0.68
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 62
                    },
                    "wind" : {
                      "speed" : 0.95,
                      "deg" : 217
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-04 21:00:00"
                  }, {
                    "dt" : 1572912000,
                    "main" : {
                      "temp" : 281.74,
                      "temp_min" : 281.74,
                      "temp_max" : 282.08,
                      "pressure" : 988,
                      "sea_level" : 988,
                      "grnd_level" : 984,
                      "humidity" : 85,
                      "temp_kf" : -0.34
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03n"
                    } ],
                    "clouds" : {
                      "all" : 31
                    },
                    "wind" : {
                      "speed" : 0.73,
                      "deg" : 351
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-05 00:00:00"
                  }, {
                    "dt" : 1572922800,
                    "main" : {
                      "temp" : 281.4,
                      "temp_min" : 281.4,
                      "temp_max" : 281.4,
                      "pressure" : 989,
                      "sea_level" : 989,
                      "grnd_level" : 986,
                      "humidity" : 88,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03n"
                    } ],
                    "clouds" : {
                      "all" : 28
                    },
                    "wind" : {
                      "speed" : 2.13,
                      "deg" : 28
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-05 03:00:00"
                  }, {
                    "dt" : 1572933600,
                    "main" : {
                      "temp" : 280.86,
                      "temp_min" : 280.86,
                      "temp_max" : 280.86,
                      "pressure" : 992,
                      "sea_level" : 992,
                      "grnd_level" : 988,
                      "humidity" : 86,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03n"
                    } ],
                    "clouds" : {
                      "all" : 26
                    },
                    "wind" : {
                      "speed" : 1.94,
                      "deg" : 9
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-05 06:00:00"
                  }, {
                    "dt" : 1572944400,
                    "main" : {
                      "temp" : 281.75,
                      "temp_min" : 281.75,
                      "temp_max" : 281.75,
                      "pressure" : 995,
                      "sea_level" : 995,
                      "grnd_level" : 991,
                      "humidity" : 84,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04d"
                    } ],
                    "clouds" : {
                      "all" : 59
                    },
                    "wind" : {
                      "speed" : 2.38,
                      "deg" : 352
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-05 09:00:00"
                  }, {
                    "dt" : 1572955200,
                    "main" : {
                      "temp" : 285.16,
                      "temp_min" : 285.16,
                      "temp_max" : 285.16,
                      "pressure" : 997,
                      "sea_level" : 997,
                      "grnd_level" : 993,
                      "humidity" : 75,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03d"
                    } ],
                    "clouds" : {
                      "all" : 45
                    },
                    "wind" : {
                      "speed" : 3.92,
                      "deg" : 346
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-05 12:00:00"
                  }, {
                    "dt" : 1572966000,
                    "main" : {
                      "temp" : 284.39,
                      "temp_min" : 284.39,
                      "temp_max" : 284.39,
                      "pressure" : 999,
                      "sea_level" : 999,
                      "grnd_level" : 995,
                      "humidity" : 73,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10d"
                    } ],
                    "clouds" : {
                      "all" : 80
                    },
                    "wind" : {
                      "speed" : 6.6,
                      "deg" : 359
                    },
                    "rain" : {
                      "3h" : 0.94
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-05 15:00:00"
                  }, {
                    "dt" : 1572976800,
                    "main" : {
                      "temp" : 283.53,
                      "temp_min" : 283.53,
                      "temp_max" : 283.53,
                      "pressure" : 1001,
                      "sea_level" : 1001,
                      "grnd_level" : 997,
                      "humidity" : 81,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 804,
                      "main" : "Clouds",
                      "description" : "overcast clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 86
                    },
                    "wind" : {
                      "speed" : 5.48,
                      "deg" : 351
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-05 18:00:00"
                  }, {
                    "dt" : 1572987600,
                    "main" : {
                      "temp" : 283.38,
                      "temp_min" : 283.38,
                      "temp_max" : 283.38,
                      "pressure" : 1004,
                      "sea_level" : 1004,
                      "grnd_level" : 1000,
                      "humidity" : 82,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 100
                    },
                    "wind" : {
                      "speed" : 5.69,
                      "deg" : 3
                    },
                    "rain" : {
                      "3h" : 0.13
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-05 21:00:00"
                  }, {
                    "dt" : 1572998400,
                    "main" : {
                      "temp" : 282.35,
                      "temp_min" : 282.35,
                      "temp_max" : 282.35,
                      "pressure" : 1005,
                      "sea_level" : 1005,
                      "grnd_level" : 1002,
                      "humidity" : 73,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 98
                    },
                    "wind" : {
                      "speed" : 5.11,
                      "deg" : 6
                    },
                    "rain" : {
                      "3h" : 0.19
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-06 00:00:00"
                  }, {
                    "dt" : 1573009200,
                    "main" : {
                      "temp" : 280.52,
                      "temp_min" : 280.52,
                      "temp_max" : 280.52,
                      "pressure" : 1006,
                      "sea_level" : 1006,
                      "grnd_level" : 1003,
                      "humidity" : 78,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 77
                    },
                    "wind" : {
                      "speed" : 3.87,
                      "deg" : 353
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-06 03:00:00"
                  }, {
                    "dt" : 1573020000,
                    "main" : {
                      "temp" : 279.32,
                      "temp_min" : 279.32,
                      "temp_max" : 279.32,
                      "pressure" : 1007,
                      "sea_level" : 1007,
                      "grnd_level" : 1003,
                      "humidity" : 77,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 55
                    },
                    "wind" : {
                      "speed" : 2.79,
                      "deg" : 341
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-06 06:00:00"
                  }, {
                    "dt" : 1573030800,
                    "main" : {
                      "temp" : 280.03,
                      "temp_min" : 280.03,
                      "temp_max" : 280.03,
                      "pressure" : 1008,
                      "sea_level" : 1008,
                      "grnd_level" : 1004,
                      "humidity" : 74,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 801,
                      "main" : "Clouds",
                      "description" : "few clouds",
                      "icon" : "02d"
                    } ],
                    "clouds" : {
                      "all" : 21
                    },
                    "wind" : {
                      "speed" : 1.37,
                      "deg" : 323
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-06 09:00:00"
                  }, {
                    "dt" : 1573041600,
                    "main" : {
                      "temp" : 282.33,
                      "temp_min" : 282.33,
                      "temp_max" : 282.33,
                      "pressure" : 1007,
                      "sea_level" : 1007,
                      "grnd_level" : 1003,
                      "humidity" : 59,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03d"
                    } ],
                    "clouds" : {
                      "all" : 46
                    },
                    "wind" : {
                      "speed" : 1.57,
                      "deg" : 246
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-06 12:00:00"
                  }, {
                    "dt" : 1573052400,
                    "main" : {
                      "temp" : 282.56,
                      "temp_min" : 282.56,
                      "temp_max" : 282.56,
                      "pressure" : 1005,
                      "sea_level" : 1005,
                      "grnd_level" : 1001,
                      "humidity" : 60,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 804,
                      "main" : "Clouds",
                      "description" : "overcast clouds",
                      "icon" : "04d"
                    } ],
                    "clouds" : {
                      "all" : 100
                    },
                    "wind" : {
                      "speed" : 2.69,
                      "deg" : 213
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-06 15:00:00"
                  }, {
                    "dt" : 1573063200,
                    "main" : {
                      "temp" : 280.81,
                      "temp_min" : 280.81,
                      "temp_max" : 280.81,
                      "pressure" : 1003,
                      "sea_level" : 1003,
                      "grnd_level" : 999,
                      "humidity" : 69,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 804,
                      "main" : "Clouds",
                      "description" : "overcast clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 100
                    },
                    "wind" : {
                      "speed" : 3.09,
                      "deg" : 181
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-06 18:00:00"
                  }, {
                    "dt" : 1573074000,
                    "main" : {
                      "temp" : 280.78,
                      "temp_min" : 280.78,
                      "temp_max" : 280.78,
                      "pressure" : 1000,
                      "sea_level" : 1000,
                      "grnd_level" : 997,
                      "humidity" : 73,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 804,
                      "main" : "Clouds",
                      "description" : "overcast clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 99
                    },
                    "wind" : {
                      "speed" : 4.4,
                      "deg" : 150
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-06 21:00:00"
                  }, {
                    "dt" : 1573084800,
                    "main" : {
                      "temp" : 281.86,
                      "temp_min" : 281.86,
                      "temp_max" : 281.86,
                      "pressure" : 997,
                      "sea_level" : 997,
                      "grnd_level" : 992,
                      "humidity" : 87,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 99
                    },
                    "wind" : {
                      "speed" : 4.97,
                      "deg" : 164
                    },
                    "rain" : {
                      "3h" : 2.25
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-07 00:00:00"
                  }, {
                    "dt" : 1573095600,
                    "main" : {
                      "temp" : 281.79,
                      "temp_min" : 281.79,
                      "temp_max" : 281.79,
                      "pressure" : 995,
                      "sea_level" : 995,
                      "grnd_level" : 990,
                      "humidity" : 79,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 501,
                      "main" : "Rain",
                      "description" : "moderate rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 100
                    },
                    "wind" : {
                      "speed" : 3.75,
                      "deg" : 251
                    },
                    "rain" : {
                      "3h" : 4.06
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-07 03:00:00"
                  }, {
                    "dt" : 1573106400,
                    "main" : {
                      "temp" : 280.03,
                      "temp_min" : 280.03,
                      "temp_max" : 280.03,
                      "pressure" : 994,
                      "sea_level" : 994,
                      "grnd_level" : 991,
                      "humidity" : 71,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 89
                    },
                    "wind" : {
                      "speed" : 5.18,
                      "deg" : 253
                    },
                    "rain" : {
                      "3h" : 0.31
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-07 06:00:00"
                  }, {
                    "dt" : 1573117200,
                    "main" : {
                      "temp" : 280.22,
                      "temp_min" : 280.22,
                      "temp_max" : 280.22,
                      "pressure" : 995,
                      "sea_level" : 995,
                      "grnd_level" : 992,
                      "humidity" : 64,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 800,
                      "main" : "Clear",
                      "description" : "clear sky",
                      "icon" : "01d"
                    } ],
                    "clouds" : {
                      "all" : 0
                    },
                    "wind" : {
                      "speed" : 4.26,
                      "deg" : 236
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-07 09:00:00"
                  }, {
                    "dt" : 1573128000,
                    "main" : {
                      "temp" : 282.59,
                      "temp_min" : 282.59,
                      "temp_max" : 282.59,
                      "pressure" : 996,
                      "sea_level" : 996,
                      "grnd_level" : 992,
                      "humidity" : 52,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 800,
                      "main" : "Clear",
                      "description" : "clear sky",
                      "icon" : "01d"
                    } ],
                    "clouds" : {
                      "all" : 0
                    },
                    "wind" : {
                      "speed" : 4.76,
                      "deg" : 231
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-07 12:00:00"
                  }, {
                    "dt" : 1573138800,
                    "main" : {
                      "temp" : 282.81,
                      "temp_min" : 282.81,
                      "temp_max" : 282.81,
                      "pressure" : 996,
                      "sea_level" : 996,
                      "grnd_level" : 992,
                      "humidity" : 53,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 800,
                      "main" : "Clear",
                      "description" : "clear sky",
                      "icon" : "01d"
                    } ],
                    "clouds" : {
                      "all" : 0
                    },
                    "wind" : {
                      "speed" : 4.41,
                      "deg" : 213
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-07 15:00:00"
                  }, {
                    "dt" : 1573149600,
                    "main" : {
                      "temp" : 281.16,
                      "temp_min" : 281.16,
                      "temp_max" : 281.16,
                      "pressure" : 996,
                      "sea_level" : 996,
                      "grnd_level" : 992,
                      "humidity" : 64,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 800,
                      "main" : "Clear",
                      "description" : "clear sky",
                      "icon" : "01n"
                    } ],
                    "clouds" : {
                      "all" : 0
                    },
                    "wind" : {
                      "speed" : 4.11,
                      "deg" : 184
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-07 18:00:00"
                  }, {
                    "dt" : 1573160400,
                    "main" : {
                      "temp" : 280.4,
                      "temp_min" : 280.4,
                      "temp_max" : 280.4,
                      "pressure" : 997,
                      "sea_level" : 997,
                      "grnd_level" : 993,
                      "humidity" : 67,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03n"
                    } ],
                    "clouds" : {
                      "all" : 33
                    },
                    "wind" : {
                      "speed" : 2.52,
                      "deg" : 170
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-07 21:00:00"
                  }, {
                    "dt" : 1573171200,
                    "main" : {
                      "temp" : 279.58,
                      "temp_min" : 279.58,
                      "temp_max" : 279.58,
                      "pressure" : 997,
                      "sea_level" : 997,
                      "grnd_level" : 993,
                      "humidity" : 75,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 51
                    },
                    "wind" : {
                      "speed" : 2.88,
                      "deg" : 145
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-08 00:00:00"
                  }, {
                    "dt" : 1573182000,
                    "main" : {
                      "temp" : 279.72,
                      "temp_min" : 279.72,
                      "temp_max" : 279.72,
                      "pressure" : 997,
                      "sea_level" : 997,
                      "grnd_level" : 993,
                      "humidity" : 82,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 63
                    },
                    "wind" : {
                      "speed" : 2.66,
                      "deg" : 136
                    },
                    "rain" : {
                      "3h" : 0.88
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-08 03:00:00"
                  }, {
                    "dt" : 1573192800,
                    "main" : {
                      "temp" : 280.21,
                      "temp_min" : 280.21,
                      "temp_max" : 280.21,
                      "pressure" : 999,
                      "sea_level" : 999,
                      "grnd_level" : 995,
                      "humidity" : 84,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10n"
                    } ],
                    "clouds" : {
                      "all" : 75
                    },
                    "wind" : {
                      "speed" : 0.88,
                      "deg" : 205
                    },
                    "rain" : {
                      "3h" : 2.69
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-08 06:00:00"
                  }, {
                    "dt" : 1573203600,
                    "main" : {
                      "temp" : 280.9,
                      "temp_min" : 280.9,
                      "temp_max" : 280.9,
                      "pressure" : 1002,
                      "sea_level" : 1002,
                      "grnd_level" : 998,
                      "humidity" : 80,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10d"
                    } ],
                    "clouds" : {
                      "all" : 100
                    },
                    "wind" : {
                      "speed" : 2.86,
                      "deg" : 60
                    },
                    "rain" : {
                      "3h" : 0.56
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-08 09:00:00"
                  }, {
                    "dt" : 1573214400,
                    "main" : {
                      "temp" : 283.02,
                      "temp_min" : 283.02,
                      "temp_max" : 283.02,
                      "pressure" : 1005,
                      "sea_level" : 1005,
                      "grnd_level" : 1001,
                      "humidity" : 63,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 500,
                      "main" : "Rain",
                      "description" : "light rain",
                      "icon" : "10d"
                    } ],
                    "clouds" : {
                      "all" : 92
                    },
                    "wind" : {
                      "speed" : 1.66,
                      "deg" : 91
                    },
                    "rain" : {
                      "3h" : 0.19
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-08 12:00:00"
                  }, {
                    "dt" : 1573225200,
                    "main" : {
                      "temp" : 283.27,
                      "temp_min" : 283.27,
                      "temp_max" : 283.27,
                      "pressure" : 1007,
                      "sea_level" : 1007,
                      "grnd_level" : 1003,
                      "humidity" : 59,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03d"
                    } ],
                    "clouds" : {
                      "all" : 39
                    },
                    "wind" : {
                      "speed" : 1.36,
                      "deg" : 34
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-08 15:00:00"
                  }, {
                    "dt" : 1573236000,
                    "main" : {
                      "temp" : 281.15,
                      "temp_min" : 281.15,
                      "temp_max" : 281.15,
                      "pressure" : 1010,
                      "sea_level" : 1010,
                      "grnd_level" : 1006,
                      "humidity" : 77,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 801,
                      "main" : "Clouds",
                      "description" : "few clouds",
                      "icon" : "02n"
                    } ],
                    "clouds" : {
                      "all" : 21
                    },
                    "wind" : {
                      "speed" : 1.7,
                      "deg" : 2
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-08 18:00:00"
                  }, {
                    "dt" : 1573246800,
                    "main" : {
                      "temp" : 280.22,
                      "temp_min" : 280.22,
                      "temp_max" : 280.22,
                      "pressure" : 1012,
                      "sea_level" : 1012,
                      "grnd_level" : 1008,
                      "humidity" : 78,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 800,
                      "main" : "Clear",
                      "description" : "clear sky",
                      "icon" : "01n"
                    } ],
                    "clouds" : {
                      "all" : 0
                    },
                    "wind" : {
                      "speed" : 1,
                      "deg" : 281
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-08 21:00:00"
                  }, {
                    "dt" : 1573257600,
                    "main" : {
                      "temp" : 279.47,
                      "temp_min" : 279.47,
                      "temp_max" : 279.47,
                      "pressure" : 1013,
                      "sea_level" : 1013,
                      "grnd_level" : 1009,
                      "humidity" : 79,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 800,
                      "main" : "Clear",
                      "description" : "clear sky",
                      "icon" : "01n"
                    } ],
                    "clouds" : {
                      "all" : 0
                    },
                    "wind" : {
                      "speed" : 1.9,
                      "deg" : 251
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-09 00:00:00"
                  }, {
                    "dt" : 1573268400,
                    "main" : {
                      "temp" : 278.94,
                      "temp_min" : 278.94,
                      "temp_max" : 278.94,
                      "pressure" : 1013,
                      "sea_level" : 1013,
                      "grnd_level" : 1009,
                      "humidity" : 84,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04n"
                    } ],
                    "clouds" : {
                      "all" : 57
                    },
                    "wind" : {
                      "speed" : 2.07,
                      "deg" : 246
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-09 03:00:00"
                  }, {
                    "dt" : 1573279200,
                    "main" : {
                      "temp" : 278.47,
                      "temp_min" : 278.47,
                      "temp_max" : 278.47,
                      "pressure" : 1013,
                      "sea_level" : 1013,
                      "grnd_level" : 1009,
                      "humidity" : 84,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 802,
                      "main" : "Clouds",
                      "description" : "scattered clouds",
                      "icon" : "03n"
                    } ],
                    "clouds" : {
                      "all" : 32
                    },
                    "wind" : {
                      "speed" : 2.5,
                      "deg" : 236
                    },
                    "sys" : {
                      "pod" : "n"
                    },
                    "dt_txt" : "2019-11-09 06:00:00"
                  }, {
                    "dt" : 1573290000,
                    "main" : {
                      "temp" : 279.24,
                      "temp_min" : 279.24,
                      "temp_max" : 279.24,
                      "pressure" : 1013,
                      "sea_level" : 1013,
                      "grnd_level" : 1009,
                      "humidity" : 77,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 803,
                      "main" : "Clouds",
                      "description" : "broken clouds",
                      "icon" : "04d"
                    } ],
                    "clouds" : {
                      "all" : 82
                    },
                    "wind" : {
                      "speed" : 2.49,
                      "deg" : 220
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-09 09:00:00"
                  }, {
                    "dt" : 1573300800,
                    "main" : {
                      "temp" : 282.44,
                      "temp_min" : 282.44,
                      "temp_max" : 282.44,
                      "pressure" : 1011,
                      "sea_level" : 1011,
                      "grnd_level" : 1007,
                      "humidity" : 60,
                      "temp_kf" : 0
                    },
                    "weather" : [ {
                      "id" : 804,
                      "main" : "Clouds",
                      "description" : "overcast clouds",
                      "icon" : "04d"
                    } ],
                    "clouds" : {
                      "all" : 91
                    },
                    "wind" : {
                      "speed" : 3.69,
                      "deg" : 221
                    },
                    "sys" : {
                      "pod" : "d"
                    },
                    "dt_txt" : "2019-11-09 12:00:00"
                  } ],
                  "city" : {
                    "id" : 2643743,
                    "name" : "London",
                    "coord" : {
                      "lat" : 51.5085,
                      "lon" : -0.1258
                    },
                    "country" : "GB",
                    "timezone" : 0,
                    "sunrise" : 1572850713,
                    "sunset" : 1572884971
                  }
                }
            , sv.JSON)
            .withHeaders(httpHeaders3)
            .withStatusCode(200)
            .withDelay(117);
        this.service.GET("/data/2.5/uvi")
            .withRequest()
            .withHeaders(httpHeaders4)
            .withQueryParameters({"mode":"json","appid":"3e29e62e2ddf6dd3d2ebd28aed069215","lon":"-0.13","lang":"en","lat":"51.51"})
            .withDelay(2713)
            .withResponse(
                {
                  "lat" : 51.51,
                  "lon" : -0.13,
                  "date_iso" : "2019-11-04T12:00:00Z",
                  "date" : 1572868800,
                  "value" : 0.98
                }
            , sv.JSON)
            .withHeaders(httpHeaders5)
            .withStatusCode(200)
            .withDelay(36);
    }

}
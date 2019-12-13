/*
 * Copyright 2019 EntIT Software LLC, a Micro Focus company, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package demo.irrigation;

public class IrrigationLogic {

    // Irrigation control thresholds:
    //   - 100% irrigation when expecting less precipitation than 1mm in next 24 hours
    //   - no irrigation when expecting more precipitation than 20mm in next 24 hours
    private static final int THRESHOLD_WET = 20;
    private static final int THRESHOLD_DRY = 1;

    private WeatherClient weatherClient = new WeatherClient();


    /**
     * Considering current weather forecast, this method returns the required
     * amount of water to use for irrigation today.
     *
     * @param lat location latitude
     * @param lon location longitude
     * @return the amount of water percentage from the 0..100 range
     */
    public int getRequiredWaterAmount(double lat, double lon) throws Exception {
        // get current meteogram
        String runId = weatherClient.getCurrentRunId();
        WeatherClient.Meteogram meteogram = weatherClient.getMeteogram(runId, lat, lon);

        // calculate expected precipitation amount in next 24 hours
        Double[] hourlyRain = meteogram.data.rain_dif.values;
        Double rainInNext24h = 0d;
        for (int i = 0; i < 24; i++) {
            rainInNext24h += hourlyRain[i];
        }

        // calculate required water percentage
        final int requiredWaterAmount = (int) Math.max(0, Math.min(100,
            100 * (THRESHOLD_WET - rainInNext24h) / (THRESHOLD_WET - THRESHOLD_DRY)
        ));

        System.out.println(String.format("There is %.2f mm of precipitation expected in next 24h.", rainInNext24h));
        System.out.println(String.format("The irrigation will use %d %% of daily water ration.", requiredWaterAmount));

        return requiredWaterAmount;
    }

}
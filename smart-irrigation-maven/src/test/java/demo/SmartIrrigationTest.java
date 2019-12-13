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
package demo;

import demo.irrigation.IrrigationLogic;
import org.junit.Assert;
import org.microfocus.sv.api.SvClientAdvanced;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class SmartIrrigationTest {

    private static SvClientAdvanced sv;
    private static IrrigationLogic irrigation;

    @BeforeClass
    public static void startLab() {
        // initialize virtual lab
        sv = SvClientAdvanced.newInstance();
        sv.loadActiveVirtualLab("classpath:sv-lab.json",
            sv.compileModuleFromSources("classpath:/demo/*"), true);
        sv.startActiveVirtualLab();

        // route WeatherClient HTTP traffic through virtual lab proxy connector
        System.setProperty("http.proxyHost", "localhost");
        System.setProperty("http.proxyPort", "9001");

        // initialize the irrigation controller
        irrigation = new IrrigationLogic();
    }

    @AfterClass
    public static void stopLab() {
        sv.close();
    }

    @Test
    public void testWaterSavingOnRainyDay() throws Exception {
        sv.runSimulation("rainyDay");

        int waterAmount = irrigation.getRequiredWaterAmount(50,16);
        Assert.assertTrue("irrigation should save water on rainy day (<=10%)" +
            " but it planned to use " + waterAmount + "%", waterAmount <= 10);
    }

    @Test
    public void testIrrigationOnDryDay() throws Exception {
        sv.runSimulation("dryDay");

        int waterAmount = irrigation.getRequiredWaterAmount(50,16);
        Assert.assertTrue("irrigation should deliver enough water on dry day" +
            " (>=90%) but it planned to use " + waterAmount + "%", waterAmount >= 90);
    }
}

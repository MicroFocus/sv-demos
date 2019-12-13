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

import com.hp.lft.sdk.mobile.*;
import org.junit.*;
import com.hp.lft.sdk.*;

import org.microfocus.sv.api.SvClient;
import unittesting.*;

public class WeatherForecastTest extends UnitTestClassBase {

    private static Device device;
    private static SvClient sv;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        instance = new WeatherForecastTest();
        globalSetup(WeatherForecastTest.class);

        String uftmDeviceId = getProperty("uftm.deviceId", true);
        device = MobileLab.lockDevice(new DeviceDescription.Builder().id(uftmDeviceId).build());

        // create SV Lab
        sv = SvClient.newInstance(device.getSvInfo().getEndpoint());
        sv.loadActiveVirtualLab("classpath:/sv-lab.json", sv.compileModuleFromSources("classpath:/demo/*"), true);
        sv.startActiveVirtualLab();
    }

    @AfterClass
    public static void tearDownAfterClass() throws Exception {
        sv.stopActiveVirtualLab();
        sv.close();
        globalTearDown();
    }

    @Test
    public void test() throws GeneralLeanFtException {
        sv.runSimulation("weatherForecast");

        Application forecastieApplication = device.describe(Application.class, new ApplicationDescription.Builder()
                .identifier("com.casticalabs.forecastie")
                .packaged(false).build());
        forecastieApplication.launch();

        Label refreshLabel = forecastieApplication.describe(Label.class, new LabelDescription.Builder()
                .accessibilityId("Refresh")
                .className("Label")
                .build());
        refreshLabel.tap();

        Label cLabel = forecastieApplication.describe(Label.class, new LabelDescription.Builder()
                .className("Label")
                .resourceId("com.casticalabs.forecastie:id/todayTemperature")
                .build());
        Assert.assertEquals("Temperature should be set correctly", "42 °C", cLabel.getText());

    }

    private static String getProperty(String propertyName, boolean print) {
        String propertyValue = System.getProperty(propertyName);
        if (propertyValue == null) {
            throw new RuntimeException("Property " + propertyName + " must be set");
        }
        if (print) {
            System.out.println("Using " + propertyName + " = " + propertyValue);
        }
        return propertyValue;
    }

}
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

import com.microfocus.sv.appium.AppiumHelper;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.microfocus.sv.api.SvClient;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.IOException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class WeatherForecastTest {

    private static SvClient sv;
    private static AndroidDriver<MobileElement> app;

    @BeforeClass
    public static void initLab() throws IOException {
        // allow connection to UFT Mobile over secure endpoint
        System.setProperty("javax.net.ssl.trustStore", "jssecacerts.jks");
        
        // read properties from the demo.properties file
        String uftmUrl = getProperty("uftmUrl", true);
        String oauthClientId = getProperty("oauthClientId", true);
        String oauthClientSecret = getProperty("oauthClientSecret", false);
        String tenantId = getProperty("tenantId", true);
        String mcWorkspaceName = getProperty("mcWorkspaceName", true);

        // specify mobile phone to use and application to launch
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
//        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "Pixel 3 XL");
        capabilities.setCapability("appPackage", "com.casticalabs.forecastie");
        capabilities.setCapability("appActivity", "cz.martykan.forecastie.activities.SplashActivity");
        capabilities.setCapability("oauthClientId", oauthClientId);
        capabilities.setCapability("oauthClientSecret", oauthClientSecret);
        capabilities.setCapability("tenantId", tenantId);
        capabilities.setCapability("mcWorkspaceName", mcWorkspaceName);

        // attach Mobile Center embedded SV Lab Server
        app = new AndroidDriver<>(new URL(uftmUrl), capabilities);
        sv = AppiumHelper.createSvSession(app);

        // create SV Lab
        sv.loadActiveVirtualLab("classpath:/sv-lab.json", sv.compileModuleFromSources("classpath:/demo/*"), true);
        sv.startActiveVirtualLab();

        // default timeout
        app.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
    }


    @Test
    public void testDisplayForecast() throws Exception {
        // simulate the modified captured scenario
        sv.runSimulation("capture");

        app.getPageSource();
        // test connecting to the Forecastie app's backend
        MobileElement element = app.findElementById("action_refresh");
        element.click();
        Thread.sleep(1000);
        element = app.findElementById("todayTemperature");
        // check the temperature displays and corresponds to the simulated value

        Assert.assertEquals("42 °C", element.getText());
    }

    @AfterClass
    public static void closeLab() {
        if (sv != null) {
            sv.close();
        }
        if (app != null) {
            app.quit();
        }
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

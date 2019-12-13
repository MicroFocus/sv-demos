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
package com.microfocus.sv.appium;

import com.microfocus.sv.tools.mcclient.McClient;
import com.microfocus.sv.tools.mcclient.McClientException;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.microfocus.sv.api.SvClient;
import org.openqa.selenium.Capabilities;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

public class AppiumHelper {

    /**
     * Creates an SV session on Mobile Center
     * @param androidDriver Appium session with Mobile Center device
     * @return The SV client for deploying REST/Mobile API virtual lab connected to mobile device
     */
    public static SvClient createSvSession(AndroidDriver<MobileElement> androidDriver) {
        try {
            final URL mcServerUrl = androidDriver.getRemoteAddress();
            final String mcApiUrl = new URI(mcServerUrl.getProtocol(), null, mcServerUrl.getHost(), mcServerUrl.getPort(), "/rest", null, null).toString();

            McClient mcClient;
            final Capabilities capabilities = androidDriver.getCapabilities();
            final String mcClientId = (String) capabilities.getCapability("oauthClientId");
            if (mcClientId != null) {
                // authenticate using the access key
                final String mcClientSecret = (String) capabilities.getCapability("oauthClientSecret");
                final String mcTenantId = (String) capabilities.getCapability("tenantId");
                mcClient = new McClient(mcApiUrl,
                    "client=" + mcClientId + "; secret=" + mcClientSecret + "; tenant=" + mcTenantId);
            } else {
                // authenticate with username and password
                final String mcUsername = (String) capabilities.getCapability("userName");
                final String mcPassword = (String) capabilities.getCapability("password");
                mcClient = new McClient(mcApiUrl, mcUsername, mcPassword);
            }

            final String svEndpoint = mcClient.createSvSession(androidDriver.getSessionId().toString());
            return SvClient.newInstance(svEndpoint);
        } catch (McClientException | URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
}

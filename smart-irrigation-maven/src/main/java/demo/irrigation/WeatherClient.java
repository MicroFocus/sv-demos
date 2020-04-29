/*
 * Copyright 2020 EntIT Software LLC, a Micro Focus company, L.P.
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

import com.google.gson.Gson;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.StatusLine;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;

import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;

class WeatherClient {

    // weather forecast API
    private static final String API_URL = "http://www.medard-online.cz/";
    private static final String RUN_PATH = "apirun";
    private static final String METEOGRAM_PATH = "apimeteogram";

    private final HttpClient httpClient = HttpClientBuilder.create().useSystemProperties().build();
    private static final Gson gson = new Gson();


    /**
     * Returns ID of current forecast calculation run.
     * @return the latest forecast run ID
     */
    String getCurrentRunId() throws Exception {
        Run currentRun = doJsonCall(RUN_PATH, null, Run.class);
        return (currentRun == null) ? null : currentRun.id;
    }


    /**
     * Returns current weather forecast for given location.
     * @param runId the ID of current forecast run obtained by {@link #getCurrentRunId()} call
     * @param lat geographical latitude of forecast location
     * @param lon geographical longitude of forecast location
     * @return the current meteogram
     */
    Meteogram getMeteogram(String runId, double lat, double lon) throws Exception {
        return doJsonCall(METEOGRAM_PATH, new NameValuePair[]{
            new BasicNameValuePair("run", runId),
            new BasicNameValuePair("lat", String.format("%.5f", lat)),
            new BasicNameValuePair("long", String.format("%.5f", lon))
        }, Meteogram.class);
    }


    /**
     * Performs a REST call returning deserialized JSON response.
     */
    private <T> T doJsonCall(String path, NameValuePair[] uriParameters, Type responseType) throws Exception {
        // create request message
        final RequestBuilder requestBuilder = RequestBuilder
            .create(HttpGet.METHOD_NAME)
            .setUri(API_URL + path);

        if (uriParameters != null) {
            for (NameValuePair uriParameter : uriParameters) {
                requestBuilder.addParameter(uriParameter);
            }
        }

        final HttpUriRequest request = requestBuilder.build();

        try {
            HttpResponse response = httpClient.execute(request);

            final StatusLine statusLine = response.getStatusLine();
            if (HttpStatus.SC_OK != statusLine.getStatusCode()) {
                throw new Exception("REST call error: " + statusLine.toString() + "\n" + request.toString());
            }

            final HttpEntity entity = response.getEntity();
            return (entity != null) ? gson.fromJson(new InputStreamReader(entity.getContent()), responseType) : null;
        } catch (IOException e) {
            throw new Exception("REST call error", e);
        }
    }


    // Beans for JSON response deserialization:
    public static class Run {
        String id;
    }

    static class Meteogram {
        MeteogramData data;
    }

    public static class MeteogramData {
        MeteogramRainDif rain_dif;
    }

    public static class MeteogramRainDif {
        Double[] values;
    }

}

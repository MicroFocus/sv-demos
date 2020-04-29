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
package demo;

import org.eclipse.jetty.proxy.ConnectHandler;
import org.eclipse.jetty.proxy.ProxyServlet;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.util.resource.Resource;
import org.microfocus.sv.api.SvClient;

import java.net.URI;
import java.net.URL;

public class CarOrder {

    public static void main(String[] args) throws Exception {

        SvClient sv = SvClient.newInstance();
        Server server = new Server(8080);

        try {
            // initialize virtual lab with data set determined by the "dataSet" system property
            String dataSet = System.getProperty("dataSet", "data-us");
            sv.loadActiveVirtualLab("classpath:/sv-lab/sv-lab.json",
                sv.compileModuleFromSources("classpath:/sv-lab/vsl/*", "classpath:/sv-lab/" + dataSet + "/*"), true);
            sv.startActiveVirtualLab();

            // start the application scenario
            sv.runSimulation("carOrder");

            // start Jetty web server with UI
            startWebServer(server);

            System.out.println("Web UI is running at http://localhost:8080/index.html");
            System.out.println("Virtual service is using the '" + dataSet + "' data set");
            System.out.println("Virtual service is listening at http://localhost:9002/api");
            System.out.println("Press <Enter> to quit simulation.");
            System.in.read();
        } finally {
            // release resources
            server.stop();
            server.join();
            sv.close();
        }
    }


    private static void startWebServer(Server server) throws Exception {

        // determine path of the public-html directory
        URL f = CarOrder.class.getClassLoader().getResource("public-html/index.html");
        if (f == null) {
            throw new RuntimeException("Unable to find public-html resource directory");
        }
        URI webRootUri = f.toURI().resolve("./").normalize();

        // create embedded HTTP server for web UI
        ResourceHandler resourceHandler = new ResourceHandler();
        resourceHandler.setBaseResource(Resource.newResource(webRootUri));

        // forward requests to the /api endpoint to virtual service
        ConnectHandler proxy = new ConnectHandler();
        ServletContextHandler context = new ServletContextHandler(proxy, "/api", ServletContextHandler.SESSIONS);
        ServletHolder proxyServlet = new ServletHolder(ProxyServlet.Transparent.class);
        proxyServlet.setInitParameter("proxyTo", "http://localhost:9002/api");
        context.addServlet(proxyServlet, "/*");

        // start server
        server.setHandler(new HandlerList(proxy, resourceHandler, new DefaultHandler()));
        server.start();
    }
}

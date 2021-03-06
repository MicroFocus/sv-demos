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

import org.microfocus.sv.api.SvClient;

public class HelloWorld {

    public static void main(String[] args) throws Exception {

        // initialize virtual lab
        SvClient sv = SvClient.newInstance();
        try {
            final String vslPath = "classpath:/demo/*";
            final String labConfigPath = "classpath:/sv-lab.json";
            sv.loadActiveVirtualLab(labConfigPath, sv.compileModuleFromSources(vslPath), true);
            sv.startActiveVirtualLab();

            // start the application scenario
            sv.runSimulation("sayHello");

            System.out.println("Virtual service is listening at http://localhost:9000/hello/{name}");
            System.out.println("Press <Enter> to quit simulation.");
            System.in.read();
        } finally {
            // release resources
            sv.close();
        }

    }
}

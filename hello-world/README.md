# Hello World, This Is SV Lab!

This is a simple demonstration of stateful simulation of REST service.


## Running the demo
When you have installed and run the SV Lab server (see the [common demo
prerequisites in demo index](../README.md)), you can 
quickly launch the demo from command line with the commands:
```sh
mvn compile
mvn exec:java
```

You'll see the prompt when everything is ready. Then you can hit the simulated
endpoint from the web browser:

 * [http://localhost:9000/hello](http://localhost:9000/hello)


## Source code
```
.
|  pom.xml ............................. project for your IDE
\--src
   \--main
      +--java
      |  \--demo
      |     HelloWorld.java ............ the code configuring and launching the
      |                                  virtual REST service in simulation
      \--resources                       mode
         |  sv-lab.json ................ virtual lab configuration
         \--demo
            HelloApplicationModel.js ... hosts the simulated service
            HelloServiceModel.js ....... defines the behavior of
                                         simulated Hello Service
```


## How it works

### Service Model
The behavior of the service is described by _service model_ defined in the
`src/main/resources/demo/HelloServiceModel.js`. It is written using domain
specific language based on [ECMAScript 6](http://es6-features.org).

All the
service virtualization domain related language constructs are imported from
the ```lib/sv-vsl.js``` file:
```javascript
import * as sv from "../../../../../lib/sv-vsl.js"
```

Every _service model_ extends the _ServiceModel_ class:
```javascript
export class HelloServiceModel extends sv.ServiceModel {
    ...
```

There is the service passed as a constructor parameter and stored for further
use in scenarios. The type of the service can be either a custom _service
interface_ (see the documentation for further details) or a generic
`RestServiceInterface` like in this example:
```javascript
constructor(service: sv.RestServiceInterface) {
    super(service);
    this.service = service;
}
```


#### Service Scenario
Each kind of behavior the service can simulate is described in a _scenario_. 
Every scenario is a method annotated with the `@scenario` annotation:
```javascript
@sv.scenario
simpleSayHello() {
    ...
}
```

The scenario contains a sequence of service calls describing the request and 
response:
```javascript
this.service.GET("/hello")
    .withRequest()
    .withResponse({greeting : "Hello, world!"}, sv.JSON)    // first response                     
        .withHeaders({"Content-Type": "application/json"})     
        .withStatusCode(200);

this.service.GET("/hello")
    .withRequest()
    .withResponse({greeting : "Hello again!"}, sv.JSON)     // second response                     
        .withHeaders({"Content-Type": "application/json"})     
        .withStatusCode(200);           
```
Every time such scenario is simulated, it expects a GET request and then it 
returns the first response of _JSON_ type. Then it expects a similar request and
returns the second response (`Hello again!`).

Note that there is sometimes request to unknown resource ```/favicon.ico```
reported during the simulation in console/log. This is perfectly normal since we
are hitting our service with a web browser and most browsers [try to fetch the 
resource](https://en.wikipedia.org/wiki/Favicon) whenever you hit a new web 
page. We have omitted the call from service model for sake of simplicity.


#### Stateless simulation fallback
When the simulator does not match the expected message (because of request
parameters, headers or body mismatch), it falls back to the stateless simulation
strategy: It responds with the first message from the scenario.


#### Ignoring the request headers
Different REST clients send different request headers. In order to build
a robust simulation it is reasonable to ignore the headers in most cases rather
than use them to control the simulation. The simulator ignores REST headers by
default. Customization of this behavior can be seen in the
_hello-world-advanced_ demo.


### Application Model
The SV Lab can simulate multiple virtual services in parallel exhibiting various
behaviors during different test cases. For each test case, there is an
application scenario declared. It is then run at the moment the test is
initiated.

In this example, we declare one `sayHello` application scenario using only one
service:
```javascript
@sv.applicationScenario
sayHello() {
    this.smHelloServiceModel.simpleSayHello();
}
```
and then launch it from Java:
```java
sv.runSimulation("sayHello");
```


### Virtual Lab
In order to run and use the simulation, we have to configure and start
a _virtual lab_. The virtual lab can be configured using a JSON file or it can
be set-up and controlled over the _SV API_.

In this example, we load the lab configuration from the
`src/main/resources/sv-lab.json` file and compile the _module_ from application
and service model sources (`HelloApplicationModel.js` and
`HelloServiceModel.js`):
```java
final String labConfigPath = "classpath:/sv-lab.json";
final String vslPath = "classpath:/demo/*";
sv.loadActiveVirtualLab(labConfigPath, sv.compileModuleFromSources(vslPath), true);
```

It is convenient to keep the VSL sources and `sv-lab.json` file in the
`resources` directory and access them with `"classpath:/..."` [Spring resource 
locators](https://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/resources.html#resources-resourceloader).
Alternatively, you can use relative (`"file:target/classes/sv-lab.json"`) or 
even absolute 
(`"file:///c:/test/sv-demos/hello-world/target/classes/sv-lab.json"`) paths to 
locate the files.  

In the configuration file we define the virtual lab where all the services will
run and pick the application model to use:
```javascript
"virtualLab": [
  {
    "id": "virtual-lab:9000",
    "displayName": "Hello Lab",
    "applicationModelId": "HelloApplicationModel",
    "connector": ...,
    "virtualServiceInstance": ...
  }
]
```

Then we create a _HTTP connector_ providing connectivity for the REST _virtual
service_ we want to simulate.
```javascript
"connector": [
  {
    "id": "connector",
    "connectorType": "httpGateway",
    "properties": {
      "bindPort": 9000
    }
  }
]
```

Here we create a service instance specifying the _virtual endpoint path_ where
it will be exposed and choosing the `SIMULATE_SERVICE` simulation mode.
```javascript
"virtualServiceInstance": [
  {
    "virtualServiceId": "HelloServiceModel.RestServiceInterface",
    "serviceMode": "SIMULATE_SERVICE",
    "endpoints": [
      {
        "properties": {
          "httpVirtualPath": "/"
        },
        "connectorId": "connector"
      }
    ]
  }
]
```

Then we start the _virtual lab_ ant the _sayHello_ scenario from Java and we are
ready to go!
```java
sv.startActiveVirtualLab();
sv.runSimulation("sayHello");
```
![](doc/hello-response.png)

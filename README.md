# SV Lab Demos

The demos in this repository explain various SV Lab features and the use of 
SV Lab server together with the sv-client library.

There are additional demos present in the SV Lab distribution available as
a part of SV Designer installation or as a separate download.

The quick introduction explaining some of the demos as well as a complete SV Lab
reference guide is [available online](https://admhelp.microfocus.com/documents/sv/sv-lab/5.4/quick-start-guide/quick-start-guide.html).

## Prerequisites
To run any of these demos you will need:
   
   * SV Lab server and SV Lab tools (Kafka and RabbitMQ demo)
      * It can be downloaded either in a separate SV-Lab ZIP file from the
        [Micro Focus marketplace](https://marketplace.microfocus.com/appdelivery/content/service-virtualization).
      * It is also installed with SV Designer.  
   * Java SDK 8 or newer
      * We suggest to use [OpenJDK](https://openjdk.java.net/install/).
   * [Apache Maven](https://maven.apache.org/) for running the demos from
     command line or, preferably, any Java IDE

All the demos are configured to use the SV Lab server running on localhost by
default.       

Some demos showcase integration with other Micro Focus testing tools, the
detailed setup is described in the readme file of each demo.  


## Running the demos
Every demo can be launched from commandline with Maven. Depending on whether
it is a test or a Java application, the appropriate commands are

```sh
mvn test
```

or 

```sh
mvn compile
mvn exec:java 
``` 

respectively. The proper command to use us described in each demo's readme
file.

A Java IDE will give you the best experience though. Open the Maven demo
project with IntelliJ IDEA or Eclipse and then run either the test or main
class.

**Note:**
When you are going to run the classes directly in IDE rather than using the
Maven `test` or `exec:java`, you need to set the system property pointing to
a running SV Lab server in the run configuration:
```
   -Dsv.server.endpoint=https://localhost:8445/
```
  

## Demos
Following list illustrates the level of complexity of the demo (1-5 stars),
protocols used and the features demonstrated. There is an extensive
documentation in a `README.md` file in each demo folder.

It is best to start with one of the simple introductory hello-world demos:

| Demo                                                   | Protocols  | Features                                             | Level |
| ------------------------------------------------------ | ---------- | ---------------------------------------------------- | ----- |
| [hello-world](hello-world/README.md)                   | REST, JSON | SIMULATION                                           | *     |
| [hello-world-advanced](hello-world-advanced/README.md) | REST, JSON | SIMULATION, simulation variables, stateless fallback | **    |


You can dig down into SV Lab features in advanced demos (alphabetical order):

| Demo                                                                   | Protocols      | Features                                                                                 | Level |
| ---------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------- | ----- |
| [car-order-data-driving](car-order-data-driving/README.md)             | REST, JSON     | SIMULATION, data driving with JSON and CSV data                                          | ****  |
| [fibonacci-kafka-springrpc](fibonacci-kafka-springrpc/README.md)       | Kafka, JSON    | LEARNING, SIMULATION                                                                     | **    |
| [fibonacci-rabbitmq-springrpc](fibonacci-rabbitmq-springrpc/README.md) | RabbitMQ, JSON | LEARNING, SIMULATION                                                                     | **    |
| [smart-irrigation-maven](smart-irrigation-maven/README.md)             | REST, JSON     | SIMULATION, JUnit, Maven                                                                 | ****  |
| [weather-forecast](weather-forecast/README.md)                         | REST, JSON     | Service LEARNING and SIMULATION on Android, UI testing with Appium and UFT Mobile        | ***   |
| [weather-forecast-uft](weather-forecast-uft/README.md)                 | REST, JSON     | Service LEARNING and SIMULATION on Android, UI testing with UFT Developer and UFT Mobile | ***   |
                                                                                         

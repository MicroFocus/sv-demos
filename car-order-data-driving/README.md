# Data Driving Demo

This is a simple demonstration of a data-driven REST service using one of
several data models.


## Running the demo

When you have installed and run the SV Lab server (see the [common demo
prerequisites in demo index](../README.md)), you can 
quickly launch the demo from command line with the commands:
```sh
mvn compile
mvn exec:java -DdataSet=data-de 
```

You'll see the prompt when everything is ready. Then you can open the demo 
application UI in web browser:

 * [http://localhost:8080/index.html](http://localhost:8080/index.html)


You can stop the simulation pressing the <Enter> key and launch the application
with a virtual service using different data set: 
```sh
mvn exec:java -DdataSet=data-us
```


## Source code
```
.
|  pom.xml .................................. project for your IDE
\--src
   \--main
      +--java
      |  \--demo
      |     CarOrder.java ................... the code configuring and launching
      |                                       the virtual REST service in 
      |                                       a simulation mode and serving the                                    
      \--resources                            web UI                       
         +--public-html ..................... demo application web UI
         \--sv-lab
            +--data-de ...................... dataset with German options/prices
            +--data-us ...................... dataset with US options/prices
            +--vsl
            |  CarOrderApplicationModel.js .. application model
            |  CarOrderServiceModel.js ...... data-driven service model
            sv-lab.json ..................... virtual lab configuration
```


## Resources

* Icon created by Ervin Bolat from The Noun Project.
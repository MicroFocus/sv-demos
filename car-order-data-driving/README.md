# Data Driving Demo

This is a simple demonstration of a data-driven REST service using one of
several data sets in JSON and CSV format.


## Running the demo

When you have installed and run the SV Lab server (see the [common demo
prerequisites in demo index](../README.md)), you can 
quickly launch the demo from command line with the commands:
```sh
mvn compile
mvn exec:java -DdataSet=data-us 
```

You'll see the prompt when everything is ready. Then you can open the demo 
application UI in web browser:

 * [http://localhost:8080/index.html](http://localhost:8080/index.html)


You can stop the simulation pressing the <Enter> key and launch the application
with a virtual service using different data set: 
```sh
mvn exec:java -DdataSet=data-de
```


## Running the data-driven simulation with SV tool

You can launch just the virtual lab without demo application frontend using the
sv tool from the SV Lab client distribution (`Lab/bin/sv[.sh|.bat]`):

```sh
sv.sh load -lab src/main/resources/sv-lab/sv-lab.json \
           -vsl src/main/resources/sv-lab/vsl \
           -vsl src/main/resources/sv-lab/data-us \
           start log -a -f remove 
```

The tool combines source files from the `sv-lab/vsl` containing the data-driven
service model and the chosen data set directory.   


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
# Spring RabbitTemplate Request-Reply Learning And Simulation Demo

A demonstration of RabbitMQ service simulation and learning.

This demo contains implementation of client and service performing synchronous
JSON request/response communication over RabbitMQ exchanges and queues using the
[Spring RabbitTemplate](https://docs.spring.io/spring-amqp/docs/latest_ga/api/org/springframework/amqp/rabbit/core/RabbitTemplate.html)
helper facilitating the RabbitMQ access in applications built with the
[Spring framework](https://spring.io/) that can be run with the `run-client[.sh|.bat]`
and `run-service[.sh|.bat]` scripts. It demonstrates the learning and
simulation of RabbitMQ service with the _sv-capture_ tool.  

The demo includes virtual lab with pre-built model of the service so the 
simulation can be run out of box without learning. 

See the [SV Lab RabbitMQ connector online documentation](https://admhelp.microfocus.com/documents/sv/sv-lab/5.4/protocol-guide/rabbitmq-connector.html)
for detailed description of all configuration options.


## Demo prerequisites

The demo client and service connect to a RabbitMQ broker installed at localhost.
You can follow the [RabbitMQ installation guide](https://www.rabbitmq.com/download.html)
or you can perform following steps:
   * In Linux:
     1. [Install Erlang using APT](https://www.rabbitmq.com/install-debian.html#erlang-repositories)
     2. [Install RabbitMQ using APT](https://www.rabbitmq.com/install-debian.html#apt)
   * In Windows:
     1. [Download and install Erlang](https://www.erlang.org/downloads)
     2. [Install RabbitMQ using official Windows installer](https://www.rabbitmq.com/install-windows.html#installer) 


## Running the demo

First make sure the _SV lab server_ is running by launching `server-start[.sh|.bat]` 
from server's `bin/` directory.


### Out of box service simulation

Run the _sv[.sh|.bat]_ tool available in the `Lab/bin` directory in SV Lab 
distribution from the `demo/fibonacci-kafka-springrpc` directory to launch the 
ready-made virtual lab simulating the `compute` application
scenario:
```sh
sv.sh load -f -lab sv-lab/sv-lab.json -vsl sv-lab/demo start -a compute \
      log -a -f remove
```

In Windows:
```bat
sv.bat load -f -lab sv-lab\sv-lab.json -vsl sv-lab\demo start -a compute ^
       log -a -f remove
```

Then start the client configured to use virtual service with the 
`run-client-virtualized[.sh|.bat]` script. The client will display results based
on responses of the virtual service:

```
 __                 __    __  __  __  __
|__)_ |_ |_ .|_|\/|/  \  |__)|__)/    | \  _  _ _  _
| \(_||_)|_)||_|  |\_\/  | \ |   \__  |_/ (_'| | |(_)

2020-10-14 11:44:42.778  INFO 62368 --- [main] demo.SpringRpcClient: Starting SpringRpcClient on Jupiter with PID 62368 (C:\test\Lab\demo\fibonacci-rabbitmq-springrpc\target\classes started by Jirka in C:\test\Lab\demo\fibonacci-rabbitmq-springrpc)
2020-10-14 11:44:42.783  INFO 62368 --- [main] demo.SpringRpcClient: The following profiles are active: client,virtualized
2020-10-14 11:44:44.547  INFO 62368 --- [main] demo.SpringRpcClient: Started SpringRpcClient in 2.173 seconds (JVM running for 2.571)Listening at 'demo.rpc/rpc.demo', press <Enter> to quit.
Sending requests to 'v.demo.rpc/rpc.demo'
Running for 6000 ms
 [x] Requesting fib(1)
 [.] Got 'FibResponse{n=1, fibN=1}'
 [x] Requesting fib(2)
 [.] Got 'FibResponse{n=2, fibN=1}'
 [x] Requesting fib(3)
 [.] Got 'FibResponse{n=3, fibN=2}'
 [x] Requesting fib(4)
 [.] Got 'FibResponse{n=4, fibN=3}'
 [x] Requesting fib(5)
 [.] Got 'FibResponse{n=5, fibN=5}'
``` 
 

### Service learning and simulation

To learn the simulation models from a real service start the real service first
with the `run-service[.sh|.bat]` script:

```
 __                 __    __  __  __  __
|__)_ |_ |_ .|_|\/|/  \  |__)|__)/    | \  _  _ _  _
| \(_||_)|_)||_|  |\_\/  | \ |   \__  |_/ (_'| | |(_)

2020-10-14 11:52:10.509  INFO 64416 --- [main] demo.SpringRpcServer: Starting SpringRpcServer on Jupiter with PID 64416 (C:\test\Lab\demo\fibonacci-rabbitmq-springrpc\target\classes started by Jirka in C:\test\Lab\demo\fibonacci-rabbitmq-springrpc)
2020-10-14 11:52:10.514  INFO 64416 --- [main] demo.SpringRpcServer: The following profiles are active: server
2020-10-14 11:52:12.453  INFO 64416 --- [main] demo.SpringRpcServer: Started SpringRpcServer in 2.335 seconds (JVM running for 2.726)
Listening at 'demo.rpc/rpc.demo', press <Enter> to quit.
```

Then run the `sv-capture` tool from the `demo/fibonacci-rabbitmq-springrpc` 
directory to learn the service configured in the `sv-lab.json` file:

```sh
../../bin/sv-capture.sh -lab sv-lab/sv-lab.json -o ./vslmodel
```

In Windows:

```bat
..\..\bin\sv-capture.bat -lab sv-lab\sv-lab.json -o vslmodel
```

The tool brings up a virtual lab with virtual service ready for learning.             

Then in a separate console run the client configured to send requests to the
the `v.demo.rpc` exchange with the `run-client-virtualized[.sh|.bat]` script:

```
 __                 __    __  __  __  __
|__)_ |_ |_ .|_|\/|/  \  |__)|__)/    | \  _  _ _  _
| \(_||_)|_)||_|  |\_\/  | \ |   \__  |_/ (_'| | |(_)

2020-10-14 11:52:54.423  INFO 23476 --- [main] demo.SpringRpcClient: Starting SpringRpcClient on Jupiter with PID 23476 (C:\test\Lab\demo\fibonacci-rabbitmq-springrpc\target\classes started by Jirka in C:\test\Lab\demo\fibonacci-rabbitmq-springrpc)
2020-10-14 11:52:54.427  INFO 23476 --- [main] demo.SpringRpcClient: The following profiles are active: client,virtualized
2020-10-14 11:52:56.207  INFO 23476 --- [main] demo.SpringRpcClient: Started SpringRpcClient in 2.191 seconds (JVM running for 2.584)
Sending requests to 'v.demo.rpc/rpc.demo'
Running for 6000 ms
 [x] Requesting fib(1)
 [.] Got 'FibResponse{n=1, fibN=1}'
 [x] Requesting fib(2)
 [.] Got 'FibResponse{n=2, fibN=1}'
 [x] Requesting fib(3)
 [.] Got 'FibResponse{n=3, fibN=2}'
 [x] Requesting fib(4)
 [.] Got 'FibResponse{n=4, fibN=3}'
 [x] Requesting fib(5)
 [.] Got 'FibResponse{n=5, fibN=5}'
```                  

Now stop the `sv-capture` tool by pressing the \<Enter> key. The resulting VSL
files containing the learned scenario (named `capture` by default) are written
into the destination `./vslmodel` directory.

You can stop the real service and launch simulation of the `capture` scenario in
the model you have just learned using the _sv-capture_ tool:

```sh
../../bin/sv-capture.sh -lab sv-lab/sv-lab.json -vsl vslmodel -f NONE
```

In Windows:

```bat
..\..\bin\sv-capture.bat -lab sv-lab/sv-lab.json -vsl vslmodel -f NONE
```

Then start the virtualized client again. The client will display results based
on responses of the virtual service:

```
 __                 __    __  __  __  __
|__)_ |_ |_ .|_|\/|/  \  |__)|__)/    | \  _  _ _  _
| \(_||_)|_)||_|  |\_\/  | \ |   \__  |_/ (_'| | |(_)

2020-10-14 11:10:03.612  INFO 67504 --- [main] demo.SpringRpcClient: Starting SpringRpcClient on Jupiter with PID 67504 (C:\test\Lab\demo\fibonacci-rabbitmq-springrpc\target\classes started by Jirka in C:\test\Lab\demo\fibonacci-rabbitmq-springrpc)
2020-10-14 11:10:03.616  INFO 67504 --- [main] demo.SpringRpcClient: The following profiles are active: client,virtualized
2020-10-14 11:10:05.306  INFO 67504 --- [main] demo.SpringRpcClient: Started SpringRpcClient in 2.069 seconds (JVM running for 2.432)
Sending requests to 'v.demo.rpc/rpc.demo'
Running for 6000 ms
 [x] Requesting fib(1)
 [.] Got 'FibResponse{n=1, fibN=1}'
 [x] Requesting fib(2)
 [.] Got 'FibResponse{n=2, fibN=1}'
 [x] Requesting fib(3)
 [.] Got 'FibResponse{n=3, fibN=2}'
 [x] Requesting fib(4)
 [.] Got 'FibResponse{n=4, fibN=3}'
 [x] Requesting fib(5)
 [.] Got 'FibResponse{n=5, fibN=5}'
``` 


## Tips & troubleshooting

### RabbitMQ tips

  * You can use the [Management Command Line Tool](https://www.rabbitmq.com/management-cli.html)
    to list or delete exchanges and queues. The [Management Plugin](https://www.rabbitmq.com/management.html)
    is included in the standard RabbitMQ Server installation:
    1. [Enable the Management Plugin](https://www.rabbitmq.com/management.html#getting-started)
       with `sbin/rabbitmq-plugins enable rabbitmq_management` command from the
       server installation directory.
    2. Go to the http://localhost:15672/ endpoint (login with guest/guest) to
       manage exchanges ang queues with web UI.
    3. [Download the CLI management tool] from http://localhost:15672/cli/rabbitmqadmin
  * Use the CLI management tool (requires [Python](https://www.python.org/downloads/)):
    * `rabbitmqadmin.py list exchanges`
    * `rabbitmqadmin.py list queues`
    * `rabbitmqadmin.py delete exchange name=demo.rpc`
    * `rabbitmqadmin.py delete queue name=demo.rpc.requests`


### Using Maven

You can build and run the client and service using [Apache Maven](http://maven.apache.org/):

  * Compile
    * `mvn compile`
  * Run real service
    * `mvn exec:java@server`   
  * Run client with real service (`demo.rpc.request`, `demo.rpc.response` topics)
    * `mvn exec:java@client`
  * Run client with virtual service (`v.demo.rpc.request`, `v.demo.rpc.response` topics)
    * `mvn exec:java@client-virtualized`

     
## Source code

```
.
|  pom.xml ......................... project file for your IDE
+--src
|  \--main
|     +--java
|     |  \--demo
|     |        *.java ............. demo client and real service implementation
|     \--resources
|           application.yml ....... Spring application configuration with
\--sv-lab                           RabbitMQ exchange
   |  sv-lab.json ................. virtual lab configuration
   \--demo ........................ ready to use service and application models
         FibonacciServiceInterface.js 
         FibonacciServiceModel.js
         RabbitMqDemoApplicationModel.js
```

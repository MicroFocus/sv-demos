// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"

export class HelloAdvancedServiceModel extends sv.ServiceModel {

    constructor(service: sv.RestServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    simpleSayHello() {
        // create `yourName` variable accepting any input value
        let yourName = sv.svVar("world");

        // respond with a name copied from path
        this.service.GET("/hello/{name}")
            .withRequest()
                .withPathParameters({name:yourName})                // URI parameter bound to the scenario variable
            .withResponse({
                "greetings": [
                    "Hello, ",
                    yourName]                                       // the name copied from request parameter
            }, sv.JSON)                                             // the response is always JSON
                .withHeaders({"Content-Type": "application/json"})  // necessary response headers
                .withStatusCode(200);

        // make the second response slightly different
        this.service.GET("/hello/{name}")
            .withRequest()
                .withPathParameters({name:yourName})
            .withResponse({
                "greetings": [
                    "Hello again, ",
                    yourName]                                       // the name copied from request parameter
                }, sv.JSON)
                .withHeaders({"Content-Type": "application/json"})
                .withStatusCode(200);

        // aspiring to pass the Turing test...
        this.service.GET("/hello/{name}")
            .withRequest()
                .withPathParameters({name:yourName})
            .withResponse({
                "greetings": [ "Hi, I am really glad to see you!" ] // no name in response this time
                }, sv.JSON)
                .withHeaders({"Content-Type": "application/json"})
                .withStatusCode(200);
    }

}

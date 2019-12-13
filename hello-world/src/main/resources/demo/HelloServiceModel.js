// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"

export class HelloServiceModel extends sv.ServiceModel {

    constructor(service: sv.RestServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    simpleSayHello() {
        this.service.GET("/hello")
            .withRequest()                                          // empty request
            .withResponse({"greeting": "Hello, world!"}, sv.JSON)
                .withHeaders({"Content-Type": "application/json"})  // necessary response headers
                .withStatusCode(200);

        this.service.GET("/hello")
            .withRequest()
            .withResponse({"greeting": "Hello again!"}, sv.JSON)
                .withHeaders({"Content-Type": "application/json"})
                .withStatusCode(200);
    }

}

// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"

export class HelloServiceModel extends sv.ServiceModel {

    constructor(service: sv.RestServiceInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    interleavedHello() {
        var corr0 = this.service.GET("/hello")
            .withRequest()

        this.service.GET("/foo")
            .withRequest()
            .withResponse("bar", sv.JSON)
                .withHeaders({"Content-Type": "application/json"})
                .withStatusCode(200)
                .withDelay(100);

        corr0.withResponse({"greeting": "Hello, world!"}, sv.JSON)
            .withHeaders({"Content-Type": "application/json"})
            .withStatusCode(200)
            .withDelay(100);
    }

}

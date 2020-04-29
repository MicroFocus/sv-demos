// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
import * as sv from "../../../../../../lib/sv-vsl.js"

// Data driving: the imported data sets are stored in separate directories
// (../data-de, ../data-us) and one of them is included when the module is
// being compiled via sv.compileModuleFromSources(path1, path2, ...) selecting
// the desired data set (see CarOrder.java:43).
import * as optionData from "model-3-options.json"
import * as priceData from "model-3-prices.json"

export class CarOrderServiceModel extends sv.ServiceModel {

    constructor(service: sv.RestServiceInterface) {
        super(service);
        this.service = service;
    }

    //
    // Return options for drop downs in the UI.
    //
    // The response JSON is data-driven by the "model-3-options.json" data set
    // containing only one response.    @sv.scenario
    //
    @sv.scenario
    getOptions() {
        this.service.GET("/options")
            .withRequest()
            .withResponse(optionData, sv.JSON)      // whole response JSON from dataset
              .withHeaders({"Content-Type": "application/json"})
              .withStatusCode(200);
    }

    //
    // Return car price based on chosen options (model, color, wheels) sent
    // from UI via AJAX POST call.
    //
    // Responses are data-driven by the "model-3-prices" data set containing
    // multiple rows with values mapped to requests (model, color, wheels) and
    // responess (price).
    //
    @sv.scenario
    getPrice() {
        // for each row of dataset, create the structure to match in request
        // for returning corresponding price and fork a new scenario to handle
        // that conversation
        for (let i = 0; i < priceData.length; i++) {
            let row = priceData[i];

            // create request structure (JSON object) from row data (3 columns with string values)
            let spec = {
                "model": row.model,
                "color": row.color,
                "wheels": row.wheels
            };

            // run a simple oneCall scenario on parallel that will handle this particular request-response simulation
            sv.forkScenario(() => this.oneCall(spec, row.price));
        }
    }

    //
    // Scenario with one request-response call parametrized by values from one data source row.
    //
    @sv.scenario
    oneCall(spec = sv.svVar().setFinal(), price = sv.svVar().setFinal()) {
        // note the .setFinal() SV variable declaration above telling the simulator
        // to match the values during simulation rather than ignoring the variable data

        // respond according to the provided specifiaction - price data pair
        this.service.POST("/price")
            .withRequest(spec, sv.JSON)
            .withResponse(price, sv.JSON)
              .withHeaders({"Content-Type": "application/json"})
              .withStatusCode(200);
    }
}

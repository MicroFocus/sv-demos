// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
import * as sv from "../../../../../../lib/sv-vsl.js"

// Data driving: the imported data sets are stored in separate directories
// (../data-de, ../data-us) and one of them is included when the module is
// being compiled via sv.compileModuleFromSources(path1, path2, ...) selecting
// the desired data set (see CarOrder.java:43).

// The structured data is best represented in JSON format:
import * as optionData from "model-3-options.json"

// Tha plain price table can be imported from CSV file using the csv.js helper:
import {Csv} from "./csv.js";

export class CarOrderServiceModel extends sv.ServiceModel {

    constructor(service: sv.RestServiceInterface) {
        super(service);
        this.service = service;
    }

    //
    // Return options for drop downs in the UI.
    //
    // The response JSON is data-driven by the "model-3-options.json" data set
    // containing only one response.
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
    // responses (price, currency).
    //
    @sv.scenario
    getPrice() {
        // for each row of dataset, create the structure to match in request
        // for returning corresponding price and fork a new scenario to handle
        // that conversation
        let priceData = Csv.importCsv("model-3-prices.csv");
        for (let i = 0; i < priceData.length; i++) {
            let row = priceData[i];

            // run a simple oneCall scenario on parallel that will handle this particular request-response simulation
            sv.forkScenario(() => this.oneCall(row[0], row[1], row[2], row[3], row[4]));
        }
    }

    //
    // Scenario with one request-response call parametrized by values from one data source row.
    //
    @sv.scenario
    oneCall(model = sv.svVar("").setFinal(), color = sv.svVar("").setFinal(""),
            wheels = sv.svVar("").setFinal(),
            price = sv.svVar(""), currency = sv.svVar("")) {
        // note the .setFinal() SV variable declaration above telling the simulator
        // to match the values during simulation rather than ignoring the variable data

        // data driven request
        let req =  sv.svVar({
            "model": model,
            "color": color,
            "wheels": wheels
        });

        // it is useful to store large response templates in external files and replace
        // data driven values with sv.svAssign(target, variable)
        let response = sv.svVar(this.importExternal("price-response-template.json"));

        sv.svAssign(response.offers[0].spec.model, model);
        sv.svAssign(response.offers[0].spec.color, color);
        sv.svAssign(response.offers[0].spec.wheels, wheels);
        // an alternative way to achieve the assignment above:
        // let spec = sv.svVar({
        //     "model": model,
        //     "color": color,
        //     "wheels": wheels
        // });
        // sv.svAssign(response.offers[0].spec, spec);
        sv.svAssign(response.offers[0].price, price);
        sv.svAssign(response.offers[0].currency, currency);

        // respond according to the provided specification - price data pair
        this.service.POST("/price")
            .withRequest(req, sv.JSON)
            .withResponse(response, sv.JSON)
              .withHeaders({"Content-Type": "application/json"})
              .withStatusCode(200);
    }
}

// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"

export class WeatherUftServiceInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("WeatherUftServiceInterfaceSwagger.json");
    }

}
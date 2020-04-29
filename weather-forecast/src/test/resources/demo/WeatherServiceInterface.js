// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
import * as sv from "../../../../../lib/sv-vsl.js"

export class WeatherServiceInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("./WeatherServiceInterfaceSwagger.json");
    }

}

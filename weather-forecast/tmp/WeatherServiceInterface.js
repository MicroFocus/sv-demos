import * as sv from "sv-vsl";


export class WeatherServiceInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("./WeatherServiceInterfaceSwagger.json");
    }

}
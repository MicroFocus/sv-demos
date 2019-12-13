import * as sv from "sv-vsl";


export class WeatherUftServiceInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("./WeatherUftServiceInterfaceSwagger.json");
    }

}
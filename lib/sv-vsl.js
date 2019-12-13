// (C) Copyright 2009-2019 Micro Focus or one of its affiliates.

/**
 * Decorator denoting a method to return an operation.
 */
export function operation() {
}

/**
 * Decorator denoting a method to be a scenario.
 */
export function scenario() {
}

/**
 * Decorator denoting a method to be an application scenario.
 */
export function applicationScenario() {
}

/**
 * Decorator denoting a method to be included in the compilation result.
 */
export function include() {
}

/**
 * A class representing an operation of a service interface
 */
export class Operation {
    constructor() {
    }

    /**
     * Specify the operation request payload.
     * @param req payload object
     */
    withRequest(req: Object): Operation {
        _EVSDK_siCall("withRequest", req);
        return new Operation();
    }

    /**
     * Specify the operation response payload.
     * @param resp payload object
     */
    withResponse(resp: Object): Operation {
        _EVSDK_siCall("withResponse", resp);
        return new Operation();
    }

    /**
     * Specifiy an execution delay causing the simulation engine to postpone the call for
     * the specified period. The delay is relative to a previous call or a scenario beginning if no previous call
     * exists.
     * @param delay delay milliseconds
     */
    withDelay(delay: number): Operation {
        _EVSDK_siCall("withDelay", delay);
        return new Operation();
    }
}

/**
 * SOAP 1.1 protocol operation
 */
export class Soap11Operation extends Operation {
    /**
     * Creates a new SOAP 1.1 operation
     * @param soapAction SOAP action for the operation. May be null, SOAP action will equal to the operation name in then.
     */
    constructor(soapAction) {
        super();
        _EVSDK_siCall("constructor", {soapAction: soapAction});
    }

    /**
     * Specify the operation request payload.
     * @param req payload object
     */
    withRequest(req: Object): Soap11Operation {
        _EVSDK_siCall("withRequest", req);
        return this;
    }

    /**
     * Specify the operation response payload.
     * @param resp payload object
     */
    withResponse(resp: Object): Soap11Operation {
        _EVSDK_siCall("withResponse", resp);
        return this;
    }

    /**
     * Specify a SOAP header for the operation. You may specify multiple SOAP headers by multiple calls of this method.
     * @param header. A literal or variable of string or XML literal type
     * @returns {Soap11Operation} this
     */
    withSoapHeader(header: Object): Soap11Operation {
        _EVSDK_siCall("withSoapHeader", header);
        return this;
    }

    /**
     * Specify a SOAP Fault Detail for the operation. You may specify multiple details by multiple calls of this method.
     * @param detail. A literal or variable of string or XML literal type
     * @returns {Soap11Operation} this
     */
    withFaultDetail(detail: Object): Soap11Operation {
        _EVSDK_siCall("withFaultDetail", detail);
        return this;
    }

    /**
     * Specify a SOAP Fault String for the operation.
     * @param faultString. A string.
     * @returns {Soap11Operation} this
     */
    withFaultString(faultString: string): Soap11Operation {
        _EVSDK_siCall("withFaultString", faultString);
        return this;
    }

    /**
     * Specify a SOAP Fault Actor for the operation.
     * @param faultActor. A string.
     * @returns {Soap11Operation} this
     */
    withFaultActor(faultActor: string): Soap11Operation {
        _EVSDK_siCall("withFaultActor", faultActor);
        return this;
    }

    /**
     * Specify a SOAP Fault Code local part for the operation, e.g. "Client".
     * @param faultCode. A string.
     * @returns {Soap11Operation} this
     */
    withFaultCode(faultCode: string): Soap11Operation {
        _EVSDK_siCall("withFaultCode", faultCode);
        return this;
    }
}

/**
 * SOAP 1.2 protocol operation
 */
export class Soap12Operation extends Operation {
    /**
     * Creates a new SOAP 1.1 operation
     * @param soapAction SOAP action for the operation request. May be null, SOAP action will equal to the operation name in then.
     * @param responseSoapAction SOAP action for the operation response. May be null, SOAP action will equal to the operation name in then.
     */
    constructor(soapAction: string, responseSoapAction: string) {
        super();
        _EVSDK_siCall("constructor", {soapAction: soapAction, responseSoapAction: responseSoapAction});
    }

    /**
     * Specify the operation request payload.
     * @param req payload object
     */
    withRequest(req: Object): Soap12Operation {
        _EVSDK_siCall("withRequest", req);
        return this;
    }

    /**
     * Specify the operation response payload.
     * @param resp payload object
     */
    withResponse(resp: Object): Soap12Operation {
        _EVSDK_siCall("withResponse", resp);
        return this;
    }

    /**
     * Specify a SOAP header for the operation. You may specify multiple SOAP headers by multiple calls of this method.
     * @param header. A literal or variable of string or XML literal type
     * @returns {Soap12Operation} this
     */
    withSoapHeader(header: Object): Soap12Operation {
        _EVSDK_siCall("withSoapHeader", header);
        return this;
    }

    /**
     * Specify a SOAP Fault Detail for the operation. You may specify multiple details by multiple calls of this method.
     * @param detail. A literal or variable of string or XML literal type
     * @returns {Soap12Operation} this
     */
    withFaultDetail(detail: Object): Soap12Operation {
        _EVSDK_siCall("withFaultDetail", detail);
        return this;
    }

    /**
     * Specify a SOAP Fault Code local part for the operation, e.g. "Client".
     * @param faultCode. A string.
     * @returns {Soap12Operation} this
     */
    withFaultCode(faultCode: string): Soap12Operation {
        _EVSDK_siCall("withFaultCode", faultCode);
        return this;
    }

    /**
     * Specify a SOAP Fault Reason local part for the operation, e.g. "Client".
     * @param reason. A string.
     * @returns {Soap12Operation} this
     */
    withFaultReason(reason: string): Soap12Operation {
        _EVSDK_siCall("withFaultReason", reason);
        return this;
    }

    /**
     * Specify a SOAP Fault Role local part for the operation, e.g. "Client".
     * @param role. A string.
     * @returns {Soap12Operation} this
     */
    withFaultRole(role: string): Soap12Operation {
        _EVSDK_siCall("withFaultRole", role);
        return this;
    }
}

/**
 * JSON Remote protocol operation
 */
export class MobileApiOperation extends Operation {
    constructor() {
        super();
        _EVSDK_siCall("constructor", null);
    }
}

/**
 * MQTT protocol operation
 */
export class MqttOperation extends Operation {

    constructor(payloadType: string, topicFilter: string) {
        super();
        _EVSDK_siCall("constructor", {
            payloadType: payloadType,
            topicFilter: topicFilter
        });
    }

    /**
     * Specify the MQTT operation request payload.
     * @param req payload object
     */
    withRequest(req: Object): MqttRequestOperation {
        _EVSDK_siCall("withRequest", req);
        return new MqttRequestOperation();
    }

    /**
     * Specify the MQTT operation response payload.
     * @param resp payload object
     */
    withResponse(resp: Object): MqttResponseOperation {
        _EVSDK_siCall("withResponse", resp);
        return new MqttResponseOperation();
    }
}

/**
 * MQTT protocol request part of the operation
 */
export class MqttRequestOperation extends Operation {
    /**
     * Specifies properties of an MQTT operation
     * @param properties
     * @returns {MqttResponseOperation}
     */
    withProperties(properties: Object): MqttRequestOperation {
        _EVSDK_siCall("withProperties", properties);
        return this;
    }
}

/**
 * MQTT protocol response part of the operation
 */
export class MqttResponseOperation extends Operation {
    /**
     * TODO: docs
     * @param properties
     * @returns {MqttResponseOperation}
     */
    withProperties(properties: Object): MqttResponseOperation {
        _EVSDK_siCall("withProperties", properties);
        return this;
    }
}

/**
 * REST protocol operation
 */
export class RestOperation extends Operation {

    constructor(method: HttpMethod, path: string) {
        super();
        this.method = method;
        this.path = path;
        _EVSDK_siCall("constructor", {method: method, path: path});

    }

    /**
     * Specify the REST operation request payload. The payload may be JSON or XML literal or variable value, imported
     * value or an SV variable
     * @param req payload object
     * @param contentType req payload content type
     */
    withRequest(req: Object, contentType: ContentType): RestRequestOperation {
        _EVSDK_siCall("withRequest", {
                request: req,
                contentType: contentType
            }
        );
        return new RestRequestOperation(this.method, this.path);
    }

    /**
     * Specify the REST operation request.
     */
    withRequest(): RestRequestOperation {
        _EVSDK_siCall("withRequest", {});
        return new RestRequestOperation(this.method, this.path);
    }

    /**
     * Specify the REST operation response payload. The payload may be JSON or XML literal or variable value, imported
     * value or an SV variable
     * @param resp payload object
     * @param contentType req payload content type
     */
    withResponse(resp: Object, contentType: ContentType): RestResponseOperation {
        _EVSDK_siCall("withResponse", {
                response: resp,
                contentType: contentType
            }
        );
        return new RestResponseOperation(this.method, this.path);
    }

    /**
     * Specify the REST operation empty response.
     */
    withResponse(): RestResponseOperation {
        _EVSDK_siCall("withResponse", {});
        return new RestResponseOperation(this.method, this.path);
    }

    /**
     * Sets a flag that the message uses HTTP compression
     */
    withRawDeflate(rawDeflate: boolean) {
        _EVSDK_siCall("withRawDeflate", rawDeflate);
    }
}

/**
 * REST protocol request part of the operation
 */
export class RestRequestOperation extends RestOperation {
    constructor(method: HttpMethod, path: string) {
        super(method, path);
    }

    /**
     * Specify HTTP headers for the operation.
     * @param headers an Object|Object[] of header key-value pairs
     * @returns {RestRequestOperation} this
     */
    withHeaders(headers: Object): RestRequestOperation {
        _EVSDK_siCall("withHeaders", headers);
        return this;
    }

    /**
     * Specify URL query parameters for the operation.
     *
     * @param queryParameters an Object with parameter key-value pairs
     * @returns {RestRequestOperation} this
     */
    withQueryParameters(queryParameters: Object): RestRequestOperation {
        _EVSDK_siCall("withQueryParameters", queryParameters);
        return this;
    }

    /**
     * Specify URL path parameters for the operation.
     *
     * The parameter keys need to match the mustache defined placeholder names
     * in the RestRequestOperation path property.
     * @param pathParameters an Object with path parameter key-value pairs
     * @returns {RestRequestOperation} this
     */
    withPathParameters(pathParameters: Object): RestRequestOperation {
        _EVSDK_siCall("withPathParameters", pathParameters);
        return this;
    }

    /**
     * Specifiy an execution delay causing the simulation engine to postpone sending the request for
     * the specified period. The delay is relative to a previous call or a scenario beginning if no previous call
     * exists.
     * @param delay delay milliseconds
     * @returns {RestRequestOperation}
     */
    withDelay(delay: number): RestRequestOperation {
        _EVSDK_siCall("withDelay", delay);
        return this;
    }
}

/**
 * REST protocol response part of the operataion
 */
export class RestResponseOperation extends RestOperation {
    constructor(method: HttpMethod, path: string) {
        super(method, path);
    }

    /**
     * Specify HTTP headers for the operation.
     * @param headers an Object|Object[] of header key-value pairs
     * @returns {RestResponseOperation} this
     */
    withHeaders(headers: Object): RestResponseOperation {
        _EVSDK_siCall("withHeaders", headers);
        return this;
    }

    /**
     * Sets the HTTP status code
     * @param statusCode
     * @returns {RestResponseOperation} this
     */
    withStatusCode(statusCode: number): RestResponseOperation {
        _EVSDK_siCall("withStatusCode", statusCode);
        return this;
    }

    /**
     * Specifiy an execution delay causing the simulation engine to postpone sending the response for
     * the specified period. The delay is relative to a previous call or a scenario beginning if no previous call
     * exists.
     * @param delay delay milliseconds
     * @returns {RestResponseOperation} this
     */
    withDelay(delay: number): RestResponseOperation {
        _EVSDK_siCall("withDelay", delay);
        return this;
    }
}

/**
 * A base class for service models
 */
export class ServiceModel {
    constructor(serviceInterface: ServiceInterface) {
        this._service = serviceInterface;
    }

    getService(): ServiceInterface {return this._service;}

    /**
     * Import external interface file (e.g. a swagger JSON).
     */
    importExternal(location: string): Object {
        return _EVSDK_resourceImport(location);
    }

    /**
     * Lock object till a {@link #ServiceModel#unlock} is called with the same lockName.
     */
    lock(lockName: string) {
        _EVSDK_lock(lockName);
    }

    /**
     * Unlock previously locked object by {@link #ServiceModel#lock}.
     */
    unlock(lockName: string) {
        _EVSDK_unlock(lockName);
    }
}

/**
 * A base class for application models
 */
export class ApplicationModel {
}

/**
 * A base class for service interfaces
 */
class ServiceInterface {
    constructor(protocol: Protocol) {
        this.protocol = protocol;
    }

    /**
     * Return an assigned protocol
     * @returns {Protocol|*}
     */
    getProtocol() {return this.protocol;}

    /**
     * Import external interface file (e.g. a swagger JSON).
     */
    importExternal(location: string, options: Object) {
        _EVSDK_siImport(location, options);
    }
}

/**
 * REST service interface base class
 */
export class RestServiceInterface extends ServiceInterface {
    constructor() {
        super(REST);
    }

    /**
     * Declare PUT operation invocation.
     */
    PUT(path: string): RestOperation {
        return new RestOperation();
    }

    /**
     * Declare HEAD operation invocation.
     */
    HEAD(path: string): RestOperation {
        return new RestOperation();
    }

    /**
     * Declare POST operation invocation.
     */
    POST(path: string): RestOperation {
        return new RestOperation();
    }

    /**
     * Declare GET operation invocation.
     */
    GET(path: string): RestOperation {
        return new RestOperation();
    }

    /**
     * Declare DELETE operation invocation.
     */
    DELETE(path: string): RestOperation {
        return new RestOperation();
    }

    /**
     * Declare OPTIONS operation invocation.
     */
    OPTIONS(path: string): RestOperation {
        return new RestOperation();
    }

    static newInstance() {
        return new RestServiceInterface();
    }
}

/**
 * SOAP 1.1 base service interface class
 */
export class Soap11ServiceInterface extends ServiceInterface {
    constructor() {
        super(Soap11);
    }

    /**
     * Declare SOAP 1.1 operation invocation.
     */
    invoke(operation: string): Soap11Operation {
        return new Soap11Operation();
    }

    static newInstance() {
        return new Soap11ServiceInterface();
    }
}

/**
 * SOAP 1.2 base service interface class
 */
export class Soap12ServiceInterface extends ServiceInterface {
    constructor() {
        super(Soap12);
    }

    /**
     * Declare SOAP 1.2 operation invocation.
     */
    invoke(operation: string): Soap12Operation {
        return new Soap12Operation();
    }

    static newInstance() {
        return new Soap12ServiceInterface();
    }
}

/**
 * JSON Remote base service interface class
 */
export class MobileApiServiceInterface extends ServiceInterface {
    constructor() {
        super(JsonRemote);
    }

    // iOS BLE
    ble_scanForPeripheralsWithServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_stopScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_connectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_cancelPeripheralConnection(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_centralManager_didDiscoverPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_centralManager_didConnectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_centralManager_didFailToConnectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_centralManager_didDisconnectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_readRSSI(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_discoverServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_readValueForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_writeValue(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_setNotifyValue(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_discoverIncludedServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_discoverCharacteristics(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_services(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_discoverDescriptorsForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didReadRSSI(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didDiscoverServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didUpdateValueForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didDiscoverIncludedServicesForService(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didDiscoverCharacteristicsForService(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didWriteValueForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didDiscoverDescriptorsForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_peripheral_didUpdateNotificationStateForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    // FIXME: temporary iOS BLE until they refactor code to common convention
    scanForPeripheralsWithServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    stopScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    connectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    cancelPeripheralConnection(): MobileApiOperation {
        return new MobileApiOperation();
    }

    centralManager_didDiscoverPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    centralManager_didConnectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    centralManager_didFailToConnectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    centralManager_didDisconnectPeripheral(): MobileApiOperation {
        return new MobileApiOperation();
    }

    readRSSI(): MobileApiOperation {
        return new MobileApiOperation();
    }

    discoverServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    readValueForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    writeValue(): MobileApiOperation {
        return new MobileApiOperation();
    }

    setNotifyValue(): MobileApiOperation {
        return new MobileApiOperation();
    }

    discoverIncludedServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    discoverCharacteristics(): MobileApiOperation {
        return new MobileApiOperation();
    }

    services(): MobileApiOperation {
        return new MobileApiOperation();
    }

    discoverDescriptorsForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didReadRSSI(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didDiscoverServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didUpdateValueForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didDiscoverIncludedServicesForService(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didDiscoverCharacteristicsForService(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didWriteValueForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didDiscoverDescriptorsForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    peripheral_didUpdateNotificationStateForCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }


    // Android BLE
    ble_startScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_onScanResult(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_stopScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_fetchUuidsWithSdp(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_connectGatt(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_createBond(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_removeBond(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_getBondState(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_connect(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_disconnect(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_onConnectionStateChange(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_discoverServices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_readCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_writeCharacteristic(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_setCharacteristicNotification(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_onCharacteristicChanged(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_readDescriptor(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_writeDescriptor(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_readRemoteRssi(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_requestMtu(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_close(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_startLeScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_onLeScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_stopLeScan(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_cancelDiscovery(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_getBondedDevices(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_subscribeDeviceIntents(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_onReceive(): MobileApiOperation {
        return new MobileApiOperation();
    }

    ble_unsubscribeDeviceIntents(): MobileApiOperation {
        return new MobileApiOperation();
    }


    // Android NFC-HCE
    nfc_hostApduInit(): MobileApiOperation {
        return new MobileApiOperation();
    }

    nfc_processCommandApdu(): MobileApiOperation {
        return new MobileApiOperation();
    }

    nfc_onDeactivated(): MobileApiOperation {
        return new MobileApiOperation();
    }

    /**
     * Declare a generic Mobile API operation invocation.
     */
    invoke(operation: string): MobileApiOperation {
        return new MobileApiOperation();
    }


    static newInstance() {
        return new MobileApiServiceInterface();
    }
}

/**
 * MQTT base service interface class
 */
export class MqttServiceInterface extends ServiceInterface {
    constructor() {
        super(Mqtt);
    }

    /**
     * Declare an MQTT publish operation.
     * @param payloadType
     * @param topicFilter
     * @returns {MqttOperation}
     */
    invoke(payloadType: string, topicFilter: string): MqttOperation {
        return new MqttOperation(payloadType, topicFilter);
    }

    static newInstance() {
        return new MqttServiceInterface();
    }
}

//
// OPC protocol specific org.microfocus.sv.model.project.ServiceInterface representation.
//
export class OpcServiceInterface extends ServiceInterface {
    constructor() {
        super(Opc);
    }

    writeValue(): RequestOperation {
        return new RequestOperation();
    }

    callMethod(): Operation {
        return new Operation();
    }

    addNode(): RequestOperation {
        return new RequestOperation();
    }

    addReference(): RequestOperation {
        return new RequestOperation();
    }

    deleteNode(): RequestOperation {
        return new RequestOperation();
    }

    static newInstance() {
        return new OpcServiceInterface();
    }
}

/**
 * Protocol representation in VSL
 */
class Protocol {
    constructor(protocol: string) {
        this.protocol = protocol;
    }
}

export var Soap12: Protocol = new Protocol("Soap12");
export var Soap11: Protocol = new Protocol("Soap11");
/**
 * RESTprotocol
 * @type {Protocol}
 */
export var REST: Protocol = new Protocol("REST");
export var Opc: Protocol = new Protocol("Opc");
/**
 * MQTT protocol
 * @type {Protocol}
 */

export var Mqtt: Protocol = new Protocol("Mqtt");
/**
 * JSON Remote protocol
 * @type {Protocol}
 */

export var JsonRemote: Protocol = new Protocol("JsonRemote");

/**
 * Message content type representation in VSL
 */
class ContentType {
    constructor(contentType: string) {
        this.contentType = contentType;
    }
}

/**
 * XML message content type
 */
export var XML = new ContentType("XML");
/**
 * JSON message content type
 */
export var JSON = new ContentType("JSON");
/**
 * Binary message content type
 */
export var Binary = new ContentType("Binary");

/**
 * Text message content type
 */
export var Text = new ContentType("Text");

/**
 * HTTP method VSL representation.
 */
class HttpMethod {
    constructor(method: string) {
        this.method = method;
    }
}

/**
 * POST HTTP method
 * @type {HttpMethod}
 */
export var POST = new HttpMethod("POST");

/**
 * GET HTTP method
 * @type {HttpMethod}
 */
export var GET = new HttpMethod("GET");
/**
 * DELETE HTTP method
 * @type {HttpMethod}
 */
export var DELETE = new HttpMethod("DELETE");
/**
 * PUT HTTP method
 * @type {HttpMethod}
 */
export var PUT = new HttpMethod("PUT");
/**
 * HEAD HTTP method
 * @type {HttpMethod}
 */
export var HEAD = new HttpMethod("HEAD");
/**
 * OPTIONS HTTP method
 * @type {HttpMethod}
 */
export var OPTIONS = new HttpMethod("OPTIONS");

/**
 * SV variable create method.
 */
export function svVar(value): SvVar {
    return _EVSDK_svVar(value);
}

/**
 * SV variable assignment method.
 * @param property where the variable is assigned from
 * @param targetVariable the assigned variable
 */
export function svAssign(property: Object, targetVariable: Object) {
    _EVSDK_svAssign(property, targetVariable);
}

/**
 * SV variable VSL representation.
 */
export class SvVar {
    /**
     * Sets the validator to be used.
     * @param validator validator instance object
     * @param params validator parameters to use
     * @returns {SvVar} this
     */
    withValidator(validator: Validator, ...params: Object[]): SvVar {
        return this;
    }

    /**
     * Sets an the variable to be final
     * @returns {SvVar} this
     */
    setFinal() {
        this.withValidator(new Final());
        return this;
    }

    /**
     * Sets variable Javascript generator function and its input parameters which must be of SV variable type
     * @returns {SvVar} this
     */
    setJsGenerator(generator: Function, ...params: SvVar): SvVar {
        this.withValidator(new Final());
        return this;
    }
}

/**
 * SV validator representation.
 */
class Validator {
    constructor(name: string) {
        this.name = name;
    }
}

/**
 * Final SV validator representation.
 */
export class Final extends Validator {
    constructor() {
        super("Final");
    }
}

/**
 * Request operation
 */
export class RequestOperation {
    constructor() {}

    /**
     * Specify the operation request payload.
     * @param req payload object
     */
    withRequest(req: Object): RequestOperation {}

    /**
     * Specifiy an execution delay causing the simulation engine to postpone the call for
     * the specified period. The delay is relative to a previous call or a scenario beginning if no previous call
     * exists.
     * @param delay delay milliseconds
     */
    withDelay(delay: number): RequestOperation {}
}

/**
 * Scenario call
 */
export class ScenarioCall {
    /**
     * Specifiy an execution delay causing the simulation engine to postpone the call for
     * the specified period. The delay is relative to a previous call or a scenario beginning if no previous call
     * exists.
     * @param delay delay milliseconds
     */
    withDelay(delay: number) {
        return this;
    }
}

/**
 * Fork scenario call representation.
 *
 * It forks the scenario to run in the background.
 * @param scenarioCall scenario method reference
 */
export function forkScenario(scenarioCall: () => void): ScenarioCall {
    return scenarioCall().isAsync(true);
}

/**
 * Call scenario call representation.
 *
 * It executes the scenario synchronously and waits for it to finish.
 * @param scenarioCall scenario method reference
 */
export function callScenario(scenarioCall: () => void): ScenarioCall {
    return scenarioCall().isAsync(false);
}

/**
 * Use at the end of the svAssign property path parameter to point to the contained text instead of the element itself
 * @type {string}
 */
export var XML_ELEMENT_TEXT = "___VSL_XML_EL_Text___";

/**
 * Use at the end of the svAssign property path parameter to point to the XML attribute text content if necessary (e.g. when both attribute and element have the same local name)
 * @type {string}
 */
export var XML_ATTR_TEXT = "___VSL_XML_ATTR_Value___";

export default class Service {
    constructor(endpointBase) {
        this.endpointBase = process.env.SERVER_URL + endpointBase;
    }
}
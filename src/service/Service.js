import axios from "axios";

export default class Service {
    constructor(endpointBase) {
        this.endpointBase = process.env.REACT_APP_SERVER_URL + endpointBase;
    }

}
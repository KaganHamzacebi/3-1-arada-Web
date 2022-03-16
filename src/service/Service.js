import axios from "axios";

export default class Service {
    constructor(endpointBase) {
        this.endpointBase = process.env.SERVER_URL + endpointBase;
    }

    async post(url, payload,config) {
        return axios.post("http://localhost:8080"+url, payload,config);
    }

    async get(url,config) {
        return axios.get("http://localhost:8080"+url,config);
    }

    authHeader() {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
            return {Authorization: 'Bearer ' + user.accessToken};
        } else {
            return {};
        }
    }
}
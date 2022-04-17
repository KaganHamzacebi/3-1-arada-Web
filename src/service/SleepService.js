import Service from "./Service";
import axios from 'axios';

export default class SleepService extends Service {
    constructor() {
        super('');
    }

    async getLineChartData(userToken) {
        return await axios.get("http://localhost:8080/sleep/deneme", {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        })
    }

    async getSleepTimeData(userToken,payload){
        return await axios.post("http://localhost:8080/sleep/deneme", payload, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
}

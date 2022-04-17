import Service from "./Service";
import axios from 'axios';

export default class SleepService extends Service {
    constructor() {
        super('');
    }

    async getSleepData(payload, userToken) {
        var url = "/sleep/web?week=" + payload;
        return await axios.get(url, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        })
    }

    async getSleepTimeData(userToken, payload) {
        return await axios.post("http://localhost:8080/sleep/deneme", payload, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
}

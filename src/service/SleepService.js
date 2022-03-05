import Service from "./Service";
import axios from 'axios';

export default class SleepService extends Service {
    constructor() {
        super('/sleep');
    }

    async getLineChartData() {
        return await axios.get("http://localhost:8080/sleep/deneme", {
            headers: this.authHeader()
        })
    }

    async getSleepTimeData(payload){
        return await axios.post("http://localhost:8080/sleep/deneme", payload, {
            headers : this.authHeader()
        });
    }
}

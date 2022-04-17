import Service from "./Service";
import axios from 'axios';

export default class SleepService extends Service {
    constructor() {
        super('');
    }

    async getSleepData(payload, userToken) {
        userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG5hbmVraWNpNjY2QGdtYWlsLmNvbSIsImlhdCI6MTY1MDEzNjk0OCwiZXhwIjoxNjUwMjIzMzQ4fQ.djqCOp2sGKyx9S0dD23rSr5Jd2o7CYrSSI38Krrlhpe5OZaedLSQmCRsC-fsEHXgDjpA7DQ1ni9WCY1ZYqT14w";
        var url = "/sleep/web?week=" + payload;
        return await axios.get(url, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        })
    }

    async getSleepTimeData(payload, userToken) {
        return await axios.post("/sleep", payload, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

}

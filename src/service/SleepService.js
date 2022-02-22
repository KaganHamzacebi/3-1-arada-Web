import Service from "./Service";
import axios from 'axios';

export default class SleepService extends Service {
    constructor() {
        super('/sleep');
    }

    async getLineChartData() {
        let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImlhdCI6MTY0NTMxNDQ1MywiZXhwIjoxNjQ1NDAwODUzfQ.u3zO9weDrI3jhhFWX_YywAObDmQxNdkwtjtxAV08SK8ZXVTkkqPr6hiq-dqYD6Q5Vc6GOJegToXLdVujHg4X4Q";
        return await axios.get("http://localhost:8080/sleep/deneme", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }
}

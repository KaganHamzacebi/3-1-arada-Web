import axios from 'axios';
import Service from "./Service";

export default class AchievementService extends Service {
    constructor() {
        super('');
    }

    async getAchievements(userToken) {
        return axios.get('/achievement', {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

    async updateAchievements(userToken) {
        return axios.put('/achievement', {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

}
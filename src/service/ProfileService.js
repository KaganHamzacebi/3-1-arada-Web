import axios from 'axios';
import Service from "./Service";

export default class ProfileService extends Service {
    constructor() {
        super('');
    }

    async getUser(userToken) {
        return axios.get('/profile', {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

}
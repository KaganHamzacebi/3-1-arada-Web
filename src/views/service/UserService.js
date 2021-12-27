import axios from 'axios';
import Service from "./Service";

export default class UserService extends Service{
    constructor() {
        super('/user');
    }

    async createUser(payload) {
        return await axios.post('/createUser', payload, {
            baseUrl: this.endpointBase
        });

    }

    async forgotPassword(payload) {
        return await axios.post('/forgotPassword', payload, {
            baseUrl: this.endpointBase
        });

    }
}
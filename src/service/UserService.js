import axios from 'axios';
import Service from "./Service";

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    async login(payload) {
        return axios.post('/signin', payload, {
            baseURL: this.endpointBase
        });
    }

    async createUser(payload) {
        return await axios.post('/signup', payload, {
            baseURL: this.endpointBase
        });
    }

    async forgotPassword(payload) {
        return await axios.post('/forgotPassword', payload, {
            baseURL: this.endpointBase
        });

    }

}
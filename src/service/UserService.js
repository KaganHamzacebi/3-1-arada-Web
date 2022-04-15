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

    async updatePass(payload) {
        return await axios.post('/updatePass', payload, {
            baseURL: this.endpointBase
        });
    }

    async resetPass(payload) {
        return await axios.post('/resetPass', payload, {
            baseURL: this.endpointBase
        });
    }

    async forgotPassword(email) {
        return await axios.get(`/forgotPass?email=${email}`, {
            baseURL: this.endpointBase
        });

    }

    async checkExpire(token) {
        return await axios.get(`/forgotPass/checkExpire?token=${token}`, {
            baseURL: this.endpointBase
        });

    }

}
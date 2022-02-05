import axios from 'axios';
import Service from "./Service";

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    async login(payload) {
        //todo:: Burada tokenla napılacak, giris yapildiktan sonra nereye navigate edilecek vs problemleri var
        return await axios.post('/auth/signin', payload, {
            baseUrl: this.endpointBase
        });
    }

    async createUser(payload) {
        return await axios.post('/auth/signup', payload, {
            baseUrl: this.endpointBase
        });

    }

    async forgotPassword(payload) {
        return await axios.post('/forgotPassword', payload, {
            baseUrl: this.endpointBase
        });

    }
}
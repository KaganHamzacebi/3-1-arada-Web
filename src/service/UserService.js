import axios from 'axios';
import Service from "./Service";

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    login(payload) {
        //todo:: Burada tokenla napılacak, giris yapildiktan sonra nereye navigate edilecek vs problemleri var
        return axios.post('/signin', payload, {
            baseURL: this.endpointBase
        });
    }

    signUp (payload) {
        return axios.post('/signup', payload, {
            baseURL: this.endpointBase
        });
    }

    forgotPassword(payload) {
        return axios.post('/forgotPassword', payload, {
            baseURL: this.endpointBase
        });

    }
}
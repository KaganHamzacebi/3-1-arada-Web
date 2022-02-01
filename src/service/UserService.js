import axios from 'axios';
import Service from "./Service";

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    async createUser(payload) {
        return await axios.post('/signup', payload, {
            baseUrl: this.endpointBase
        });

    }

    async forgotPassword(payload) {
        return await axios.post('/forgotPassword', payload, {
            baseUrl: this.endpointBase
        });

    }

    async login(payload) {
        return await axios.post("http://localhost:8080/api/auth/signin", payload)
            //todo:: Burada tokenla napılacak, giris yapildiktan sonra nereye navigate edilecek vs problemleri var
            .then(res => {
                console.log(res);
            });
    }
}
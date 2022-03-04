import axios from 'axios';
import Service from "./Service";
import authHeader from "./AuthHeader";

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    async login(payload) {
        this.endpointBase = "http://localhost:8080";
        //todo:: Burada tokenla napılacak, giris yapildiktan sonra nereye navigate edilecek vs problemleri var
        return await axios.post('http://localhost:8080/user/signin', payload).then((rs) => {
            if (rs.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(rs.data));
            }
            return rs.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    async createUser(payload) {
        return await axios.post('/signup', payload, {
            baseUrl: this.endpointBase,
            headers: authHeader()
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
        ;
    }

    isLogin(){
        return localStorage.getItem('user') != null;
    }

    async forgotPassword(payload) {
        return await axios.post('/forgotPassword', payload, {
            baseUrl: this.endpointBase
        });

    }

}
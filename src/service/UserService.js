import axios from 'axios';
import Service from "./Service";

export default class UserService extends Service {
    constructor() {
        super('/user');
    }

    /*export default function */
    authHeader() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.accessToken) {
            return { Authorization: 'Bearer ' + user.accessToken };
        } else {
            return {};
        }
    }

    async login(payload) {
        //todo:: Burada tokenla napılacak, giris yapildiktan sonra nereye navigate edilecek vs problemleri var
        return await axios.post('/signin', payload).then((rs) =>{
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
            baseUrl: this.endpointBase
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

    async forgotPassword(payload) {
        return await axios.post('/forgotPassword', payload, {
            baseUrl: this.endpointBase
        });

    }

}
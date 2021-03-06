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

    async updateUser(payload, userToken) {
        console.log(payload);
        return axios.put('/profile', payload,  {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

    async updateUserPhoto(payload, userToken) {
        return axios.post('/profile/profile-pic', payload,  {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

    async isFormCompleted(userToken) {
        return axios.get('/profile/isFormComplete',  {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

}
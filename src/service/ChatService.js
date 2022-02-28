import axios from 'axios';
import Service from "./Service";
import authHeader from "./AuthHeader";

export default class ChatService extends Service {
    constructor() {
        super('/chat');
    }

    async startChat(payload) {
        return await axios.post('/startChat', payload, {
            baseUrl: this.endpointBase,
            headers: authHeader()
        });

    }

}
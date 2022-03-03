import axios from 'axios';
import Service from "./Service";

export default class ChatService extends Service {
    constructor() {
        super('/chat');
    }

    async startChat(payload, userToken) {
        return await axios.post('/startChat', payload, {
            baseUrl: this.endpointBase,
            headers: userToken
        });

    }

}
import axios from 'axios';
import Service from "./Service";
import SockJS from "sockjs-client";
import {over} from "stompjs";

export default class ChatService extends Service {
    constructor() {
        super('/chat');
    }

    async connectChat(userToken, username) {
        return axios.get(`/connect/${username}`, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

    connectSocket() {
        const Sock = new SockJS('http://localhost:8080/ws');
        return over(Sock)
    }

}
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

    connectSocket(userToken) {
        const Sock = new SockJS('http://localhost:8080/ws', null, {
            headers: {
                Authorization: 'Bearer ' + userToken
            },
        });
        Sock.addEventListener('close', (event) => {
            this.closeSocket(userToken);
        });
        return over(Sock)
    }

    closeSocket(userToken) {
        return axios.post(`http://localhost:8080/chat/connect/abort`,null, {
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

    checkConnection(userToken){
        return axios.get('http://localhost:8080/chat/check-connection', {
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
}
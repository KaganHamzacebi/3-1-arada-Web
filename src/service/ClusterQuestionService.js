import Service from "./Service";
import axios from "axios";

class ClusterQuestionService extends Service{
    constructor() {
        super('/question');
    }
    getQuestions(userToken){
        return axios.get("/getQuestions", {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }

    addQuestion(userToken,payload){
        return axios.post("/addQuestion",payload, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
    removeQuestion(userToken,questionBody){
        return axios.post("/deleteQuestion",questionBody, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
    submitAnswers(userToken,answerObject){
        return axios.post("/submitAnswers",{payload:answerObject}, {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
    populateDataset(userToken) {
        return axios.get("/populateDataset", {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
    clusterQuestion(userToken){
        return axios.get("/clusterQuestions", {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });

    }
    getClusteredForms(userToken){
        return axios.get("/getClusteredForms", {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
}
export default ClusterQuestionService;
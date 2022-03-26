import Service from "./Service";
import authHeader from "./AuthHeader";

class ClusterQuestionService extends Service{
    constructor() {
        super('/question');
    }
    getQuestions(){
        return this.get("/question/getQuestions",{headers:this.authHeader()});
    }
    addQuestion(payload){
        return this.post("/question/addQuestion",payload,{headers:this.authHeader()});
    }
    removeQuestion(questionBody){
        return this.post("/question/deleteQuestion",{questionBody:questionBody},{headers:this.authHeader()});
    }
    submitAnswers(answerObject){
        return this.post("/question/submitAnswers",{payload:answerObject},{headers:this.authHeader()});
    }
    populateDataset() {
        return this.get("/question/populateDataset",{headers: authHeader()});
    }
    clusterQuestion(){
        return this.get("/question/clusterQuestions",{headers:this.authHeader()})
    }
    getClusteredForms(){
        return this.get("/question/getClusteredForms",{headers:this.authHeader()})
    }
}
export default ClusterQuestionService;
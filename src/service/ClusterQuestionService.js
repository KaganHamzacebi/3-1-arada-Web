import Service from "./Service";

class ClusterQuestionService extends Service{
    constructor() {
        super('localhost:8080');
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
        debugger;
        return this.post("/question/submitAnswers",{user:JSON.parse(localStorage.getItem('user')),payload:answerObject},{headers:this.authHeader()});
    }
}
export default ClusterQuestionService;
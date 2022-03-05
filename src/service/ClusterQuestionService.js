import Service from "./Service";

class ClusterQuestionService extends Service{
    constructor() {
        super('localhost:8080');
    }
    getQuestions(){
        return this.get("/question/getQuestions",{headers:this.authHeader()});
    }
}
export default ClusterQuestionService;
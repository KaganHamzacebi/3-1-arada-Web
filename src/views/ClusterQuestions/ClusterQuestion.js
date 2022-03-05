import React, {useEffect, useState} from "react";
import DataTable from "../../common/QuestionDataTable";
import ClusterQuestionService from "../../service/ClusterQuestionService";
import QuestionDataTable from "../../common/QuestionDataTable";
import "./ClusterQuestion.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function ClusterQuestion(){
    let [questions,setQuestions] = useState(null);
    let [fetchComplete, setFetchComplete] = useState(false);
    let [answers, setAnswers] = useState(null);
    let service = new ClusterQuestionService();
    useEffect(() => {
        debugger;
        service.getQuestions().then((response) => {
            setQuestions(response.data);
            setFetchComplete(true);
        })
    },[])
    useEffect(() => {
        if (answers){

        }
    },[answers])
    return(
        <div id="clusterQuestionWrapper">
            <Header/>
            <div className="pt-48 pb-40 md:pt-60 px-8 md:px-24">
                <h1 className="text-2xl font-black mt-8">Questions for us to know you better</h1>
                <QuestionDataTable
                    setAnswers={setAnswers}
                    questions={questions}
                    fetchCompleted={fetchComplete}
                />
            </div>
        </div>);
}
export default ClusterQuestion;
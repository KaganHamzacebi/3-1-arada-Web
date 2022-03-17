import React, {useEffect, useState} from "react";
import DataTable from "../../common/QuestionDataTable";
import ClusterQuestionService from "../../service/ClusterQuestionService";
import QuestionDataTable from "../../common/QuestionDataTable";
import "./ClusterQuestion.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddQuestionPopUp from "./AddQuestionPopUp";
function ClusterQuestion(){
    let [questions,setQuestions] = useState(null);
    let [fetchComplete, setFetchComplete] = useState(false);
    let [answers, setAnswers] = useState({});
    let service = new ClusterQuestionService();
    useEffect(() => {
        service.getQuestions().then((response) => {
            setQuestions(response.data);
            setFetchComplete(true);
        })
    },[])
    return(
        <div id="clusterQuestionWrapper">
            <Header/>
            <div className="pt-48 pb-40 md:pt-60 px-8 md:px-24">

                <QuestionDataTable
                    answers={answers}
                    service={service}
                    setAnswers={setAnswers}
                    questions={questions}
                    fetchCompleted={fetchComplete}
                />
            </div>
        </div>);
}
export default ClusterQuestion;
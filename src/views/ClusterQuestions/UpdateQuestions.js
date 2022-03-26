import Header from "../../components/Header";
import QuestionDataTable from "../../common/QuestionDataTable";
import React, {useEffect, useState} from "react";
import ClusterQuestionService from "../../service/ClusterQuestionService";
import "./UpdateQuestions.css";

function UpdateQuestions(){
    let [questions,setQuestions] = useState(null);
    let [fetchComplete, setFetchComplete] = useState(false);
    let [answers, setAnswers] = useState(null);
    let [questionAdded,setQuestionAdded] = useState(false);
    let [questionRemoved,setQuestionRemoved] = useState(false);
    function onSubmit(){
        setQuestionAdded(!questionAdded)
    }
    function onRemove(){
        setQuestionRemoved(!questionRemoved);
    }
    let service = new ClusterQuestionService();
    useEffect(() => {
        service.getQuestions().then((response) => {
            setQuestions(response.data);
            setFetchComplete(true);
        })
    },[questionAdded,questionRemoved])
    return(
        <div id="clusterQuestionWrapper">
            <Header/>
            <div id="clusterDataTableWrapper" className="pt-48 pb-40 md:pt-60 px-8 md:px-24">
                <QuestionDataTable
                    onSubmit={onSubmit}
                    onRemove={onRemove}
                    service={service}
                    isEditable={true}
                    setAnswers={setAnswers}
                    questions={questions}
                    fetchCompleted={fetchComplete}
                />
            </div>
        </div>);
}
export default UpdateQuestions;
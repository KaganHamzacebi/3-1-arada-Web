import Header from "../../components/Header";
import QuestionDataTable from "../../common/QuestionDataTable";
import React, {useEffect, useState} from "react";
import ClusterQuestionService from "../../service/ClusterQuestionService";
import "./UpdateQuestions.css";
import {useCookies} from "react-cookie";

function UpdateQuestions(){
    let [questions,setQuestions] = useState(null);
    let [fetchComplete, setFetchComplete] = useState(false);
    let [answers, setAnswers] = useState(null);
    let [questionAdded,setQuestionAdded] = useState(false);
    let [questionRemoved,setQuestionRemoved] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    function onSubmit(){
        setQuestionAdded(!questionAdded)
    }
    function onRemove(){
        setQuestionRemoved(!questionRemoved);
    }
    let service = new ClusterQuestionService();
    useEffect(() => {
        service.getQuestions(userToken).then((response) => {
            setQuestions(response.data);
            setFetchComplete(true);
        })
    },[questionAdded,questionRemoved])
    return(
        <div id="clusterQuestionWrapper">
            <Header/>
            <div id="clusterDataTableWrapper" className="pt-48 pb-40 md:pt-36 px-8 md:px-24">
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
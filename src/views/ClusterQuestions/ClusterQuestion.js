import React, {useEffect, useState} from "react";
import ClusterQuestionService from "../../service/ClusterQuestionService";
import QuestionDataTable from "../../common/QuestionDataTable";
import "./ClusterQuestion.css";
import Header from "../../components/Header";
import {useCookies} from "react-cookie";
function ClusterQuestion(){
    let [questions,setQuestions] = useState(null);
    let [fetchComplete, setFetchComplete] = useState(false);
    let [answers, setAnswers] = useState({});
    let service = new ClusterQuestionService();
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    useEffect(() => {
        service.getQuestions(userToken).then((response) => {
            setQuestions(response.data);
            setFetchComplete(true);
        })
    },[])
    return(
        <QuestionDataTable
            answers={answers}
            service={service}
            setAnswers={setAnswers}
            questions={questions}
            fetchCompleted={fetchComplete}
        />);
}
export default ClusterQuestion;
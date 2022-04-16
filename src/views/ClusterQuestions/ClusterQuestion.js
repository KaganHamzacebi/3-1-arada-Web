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
        <div id="clusterQuestionWrapper">
            <Header/>
            <div id="clusterDataTableWrapper" className="pt-14 pb-20 md:pt-36 px-8 md:px-24">

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
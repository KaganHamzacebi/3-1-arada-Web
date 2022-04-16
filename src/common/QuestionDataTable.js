import React, {useEffect, useState} from "react";
import AddQuestionPopUp from "../views/ClusterQuestions/AddQuestionPopUp";
import "./QuestionDataTable.css"
import {useCookies} from "react-cookie";
function QuestionDataTable(props){
    let questions = props.questions && props.questions.questions;
    let [visibleQuestions,setVisibleQuestions] = useState(null);
    let [page,setPage] = useState(0);
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    useEffect(() => {
        if (questions){
            setVisibleQuestions(props.questions.questions.slice(page*10,(page*10+10)))
            if (page * 10 >= props.questions.questions.length){
                setPage(page-1);
            }
        }
    },[page,questions]);
    let [isPopUpActive, setIsPopUpActive] = useState(false);
    let [error,setError] = useState(null);
    function handleValidation(){
        let flag = true;
        visibleQuestions.forEach((question) => {
            if (!props.isEditable && (!props.answers[question.questionBody] || props.answers[question.questionBody] === "Select")){
                flag = false;
            }
        })
        return flag;
    }
    function answerMap(question) {

        if (question.type === "OPEN_ENDED"){
            return (
                <input
                    type="text"
                    value={props.answers ? props.answers[question.questionBody]: null}
                    onChange={(e) => {
                        props.setAnswers({...props.answers,[question.questionBody]:e.target.value})}}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Type Your Answer Here"
                />);
        }
        else if (question.potentialAnswer == null){
            return (<input  value={props.answers ? props.answers[question.questionBody]: null}
                           onChange={(e) => {
                               props.setAnswers({...props.answers,[question.questionBody]:e.target.value})}}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Answer" aria-label="Full name"/>);
        }
        else {
            return (<select
                            value={props.answers ? props.answers[question.questionBody]: null}
                            onChange={(e) => {
                                props.setAnswers({...props.answers,[question.questionBody]:e.target.value})}}
                            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                <option>Select</option>
                {

                    question.potentialAnswer.map((answer) => {
                        return <option>{answer}</option>
                    })
                }
            </select>);


        }

    }
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {isPopUpActive && <AddQuestionPopUp onSubmit={props.onSubmit} setPopUpActive={setIsPopUpActive} service={props.service} handleClose={() => {setIsPopUpActive(false)}}/>}
                                    {props.isEditable &&
                                    <button onClick={() => setIsPopUpActive(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                        </svg>
                                    </button> }
                                    Question
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Answer


                                </th>

                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {visibleQuestions && visibleQuestions.map((question) => (
                                <tr key={question.questionBody}>
                                    <td className="px-6 py-4 whitespace-nowrap">

                                        <div className="flex items-center">
                                            {props.isEditable &&
                                            <button onClick={(e) => {
                                                props.service.removeQuestion(userToken,question.questionBody).then((response) => {
                                                    if (response.data){
                                                        props.onRemove()
                                                    }
                                                })
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                </svg>
                                            </button>
                                            }
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{question.questionBody}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {answerMap(question)}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot className="bg-gray-50">
                            <tr>

                                <td align="left">
                                    {page > 0 &&
                                    <button
                                        onClick={() => {
                                            setError(false);
                                            setPage(page-1)
                                        }}
                                    >
                                        Previous Page
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                        </svg>
                                    </button>
                                    }
                                </td>

                                <td align="right">
                                    { questions && page < (questions.length / 10)-1 &&
                                    <button
                                        onClick={() => {
                                            if (handleValidation()){
                                                setError(false);
                                                setPage(page+1)
                                            }
                                            else {
                                                setError("Please submit an answer for each question")
                                            }
                                            }}
                                    >
                                        Next Page
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                        </svg>
                                    </button>
                                    }
                                    {!props.isEditable && questions && page === (questions.length / 10)-1 &&
                                    <button
                                        onClick={(e) => {
                                            let payload = [];
                                            props.questions.questions.forEach((question) => {
                                                payload.push({questionBody:question.questionBody,answer:props.answers[question.questionBody]})
                                            })
                                            if (handleValidation()){
                                                setError(false);
                                                props.service.submitAnswers(userToken,payload);
                                            }
                                            else {
                                                setError("Please submit an answer for each question")
                                            }

                                        }}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Submit Answers

                                    </button>

                                    }
                                    { error && questions && !props.isEditable && <span style={{color: "red"}}>{error}</span>}
                                </td>
                            </tr>

                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default QuestionDataTable;
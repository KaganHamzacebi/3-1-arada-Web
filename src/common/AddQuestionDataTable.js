import React, {useState} from "react";
import AddQuestionPopUp from "../views/ClusterQuestions/AddQuestionPopUp";
function QuestionDataTable(props){
    let trueFalse = "True,False";
    let score = "1,2,3,4,5";
    let openEnded = "Open Ended";
    let typePossibleAnswers="Type Potential Answers Here";
    let [questionBody, setQuestionBody] = useState("");
    let [potentialAnswer,setPotentialAnswer] = useState(null);
    let [potentialAnswersDisabled,setPotentialAnswersDisabled]= useState(true);
    let [chosenType,setChosenType] = useState("OPEN_ENDED");
    let [visibleChosenType,setVisibleChosenType] = useState("Open Ended");
    let [possibleAnswers,setPossibleAnswers] = useState(openEnded);
    let [error, setError] = useState(null);
    function addQuestion(){
        if (handleValidation() && props.service){
            let formattedPotentialAnswer = !potentialAnswer ? null : potentialAnswer.split(",");
            props.service.addQuestion({questionBody:questionBody,answerType:chosenType,potentialAnswer:formattedPotentialAnswer}).then((response) => {

                if (response.data){
                    props.onSubmit();
                }
                props.setPopUpActive(false);
            });
        }
    }
    function handleValidation(){
        if (questionBody.length == 0){
            setError("Question Body is not valid");
            return false;
        }
        else if (chosenType == "DROPDOWN" && potentialAnswer.length == 0){
            setError("Potential answers is not valid");
            return false;
        }
        else{
            setError(null);
            return true;
        }
    }
    function setPossibleQuestion(type){
        switch (type){
            case "Open Ended":
                setPotentialAnswer(null);
                setPossibleAnswers(openEnded);
                setPotentialAnswersDisabled(true);
                break;
            case "Score":
                setPotentialAnswer("1,2,3,4,5");
                setPossibleAnswers(score);
                setPotentialAnswersDisabled(true);
                break;
            case "True-False":
                setPotentialAnswer("True,False");
                setPossibleAnswers(trueFalse);
                setPotentialAnswersDisabled(true);
                break;
            case "Dropdown":
                setPossibleAnswers(typePossibleAnswers);
                setPotentialAnswersDisabled(false);
                break;
        }
    }
    function reverseVisibleQuestionType(type){

        switch (type){
            case "Open Ended":
                return "OPEN_ENDED";
            case "Score":
                return "SCORE";
            case "True-False":
                return "BOOLEAN";
            case "Dropdown":
                return "DROPDOWN";
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
                                    Question Body
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Question Type
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Possible Answers
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => addQuestion()}>
                                        Submit Answers

                                    </button>
                                    {error && <span style={{color: "red"}}>{error}</span>}
                                </th>

                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="text" placeholder="Question" aria-label="Full name" value={questionBody} onChange={(e) => setQuestionBody(e.target.value)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select id="questionTypeToAdd"
                                                name="questionType"
                                                value={visibleChosenType}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                                onChange={(e) => {

                                                    setChosenType(reverseVisibleQuestionType(e.target.value));

                                                    setVisibleChosenType(e.target.value);
                                                    setPossibleQuestion(e.target.value)
                                                }}
                                        >
                                                <option>Open Ended</option>
                                                <option>Score</option>
                                                <option>Dropdown</option>
                                                <option>True-False</option>
                                    </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="text" placeholder={possibleAnswers}
                                            aria-label="Full name"
                                            disabled={potentialAnswersDisabled}
                                            value={potentialAnswer}
                                            onChange={(e) => {setPotentialAnswer(e.target.value)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuestionDataTable;
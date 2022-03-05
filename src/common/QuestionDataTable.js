import React from "react";
function QuestionDataTable(props){
    let questions = props.questions && props.questions.questions;

    function answerMap(question) {
        debugger;
        if (question.type == "OPEN_ENDED"){
            return (
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Type Your Answer Here"
                />);
        }
        else if (question.potentialAnswer == null){
            return (<input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Answer" aria-label="Full name"/>);
        }
        else {
            return (<select id="currency" name="currency" className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                {
                    question.potentialAnswer.map((answer) => {
                        return <option>{answer}</option>
                    })
                }
            </select>);
        }

    }
    debugger;
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
                                    Question
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Answer
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Submit Answers
                                    </button>
                                </th>

                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {questions && questions.map((question) => (
                                <tr key={question.questionBody}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">

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
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default QuestionDataTable;
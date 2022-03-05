import React from "react";
class QuestionDataTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions : props.questions,
            fetchComplete : props.fetchComplete,
            answers : [["1","2","3","4","5"],["1","2","3","4","5"],["Yes","No"],["Always","Frequently","Rarely","Never"],""],
        }
    }
    render(){
        return (<div>
            <table className="min-w-full table-auto">
                <thead className="justify-between">
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-300">Question</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">Answer</span>
                        <button onClick={() => {this.setAnswers()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                   Submit Answers
                        </button>
                    </th>

                </tr>
                </thead>
                <tbody className="bg-gray-200">
                  <tr className="bg-white border-4 border-gray-200">
                        <td>
                            <span className="text-center ml-2 font-semibold">If you were to score meaning in life, what would it be?</span>
                        </td>
                      <td>
                          <div>
                              <select
                                  id="currency"
                                  name="currency"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                              >

                                  {
                               this.state.answers[0].map((answer) => {
                                  return (<option>{answer}</option>);
                              })
                              }
                              </select>
                          </div>
                      </td>
                </tr>
                <tr className="bg-white border-4 border-gray-200">
                    <td>
                        <span className="text-center ml-2 font-semibold">If you were to score your success in life, what would it be?</span>
                    </td>
                    <td>
                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                            >
                                {
                                    this.state.answers[1].map((answer) => {
                                        return (<option>{answer}</option>);
                                    })
                                }
                            </select>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <span className="text-center ml-2 font-semibold">Do you ever feel that you’ve been affected by feelings of edginess</span>
                    </td>
                    <td>
                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                            >
                                {
                                    this.state.answers[2].map((answer) => {
                                        return (<option>{answer}</option>);
                                    })
                                }
                            </select>
                        </div>
                    </td>

                    </tr>
                  <tr className="bg-white border-4 border-gray-200">
                      <td>
                          <span className="text-center ml-2 font-semibold">How frequently have you been bothered by not being able to stop worrying about problems?</span>
                      </td>
                      <td>

                          <select
                              id="currency"
                              name="currency"
                              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                          >
                                  {
                                      this.state.answers[2].map((answer) => {
                                          return (<option>{answer}</option>);
                                      })
                                  }
                              </select>

                      </td>
                  </tr>
                  <tr className="bg-white border-4 border-gray-200">
                      <td>
                          <span className="text-center ml-2 font-semibold">Tell me about how confident you have been feeling in your capabilities</span>
                      </td>
                      <td>
                          <input
                              type="text"
                              name="price"
                              id="price"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Type Your Answer Here"
                          />
                      </td>
                  </tr>
            </tbody>
            </table>
        </div>);
    }
    setAnswers(){

    }
}
export default QuestionDataTable;
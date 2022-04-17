import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

function TaskList(props){
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    let [addTask,setAddTask] = useState(false);
    let [taskNameBody,setTaskNameBody] = useState("");

    return <div className="col-span-2 rounded-l-xl rounded-r-xl bg-gray-200 shadow-lg z-20 relative">
        <div className="w-full grid grid-rows-1">
            <ol className="divide-y-2 divide-gray-100">
                <li className="p-3">
                    <span className="font-bold uppercase">Tasks</span>
                </li>
                {props.tasks && props.tasks.map((task) => {
                    return (
                    <li className="p-3 flex gap-x-4">
                            <input
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-white bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                onChange={() => {
                                    props.addTrueTask(userToken,task.task,!task.isDone)}}
                                type="checkbox"
                                checked={task.isDone}/>
                           <span className="font-semibold">{task.task}</span>
                        <button
                            className="ml-auto"
                            onClick={() => {
                            props.removeTask(userToken,task.task,task.id)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>

                    </li>)
                })
                }
                {addTask === false &&
                <li className="p-3 flex" onClick={() => setAddTask(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                    </svg>
                    <span className="my-auto pl-2 font-bold">Add Task</span>
                </li>}
                {addTask &&
                <li className="p-3">
                    <form  onSubmit={() => {
                        props.setEditActive(false);
                        props.addTask(userToken,taskNameBody)}
                    }>
                        <input
                            placeholder="Enter task name here"
                            type="task"
                            className="w-full p-2 rounded focus:ring-2 focus:ring-green-900 outline-none"
                            onChange={(e) => {
                                setTaskNameBody(e.target.value)}}
                            onSubmit={() => {
                                props.setEditActive(false);
                                props.addTask(userToken,taskNameBody)}
                            }
                        />
                    </form>
                    </li>
                }
            </ol>
        </div>
    </div>
}
export default TaskList;
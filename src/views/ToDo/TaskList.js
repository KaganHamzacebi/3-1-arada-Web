import {useEffect, useState} from "react";

function TaskList(props){
    let [addTask,setAddTask] = useState(false);
    useEffect(() => {
        debugger;
        let checkObject = {};
        props.currentCategory && props.currentCategory.content.forEach((task) => {
            debugger;
            checkObject = {...checkObject,[task.name]:false}
        })
        debugger;
        props.setCheckMap(checkObject);
    },[props.currentCategory])
    return <div className="col-span-2 rounded-r-xl bg-gray-200 shadow-lg z-20 relative">
        <div className="w-full grid grid-rows-5">
            <ol className="divide-y-2 divide-gray-100">
                <li className="p-3">
                    TASKS
                </li>
                {props.currentCategory && props.currentCategory.content.map((task) => {
                    return (
                    <li className="p-3" onClick={() => {
                        props.setFocusedTask(task);
                        props.setEditActive(true)
                    }}>
                            <input
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-white bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                onChange={() => {
                                    props.setCheckMap({...props.checkMap,[task.name]:!props.checkMap[task.name]})}}
                                type="checkbox"
                                checked={props.checkMap[task.name]}/>

                            {task.name}
                    </li>)
                })
                }
                {addTask === false &&
                <li className="p-3" onClick={() => setAddTask(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                    </svg>
                    Add Task
                </li>}
                {addTask &&
                <li className="p-3">
                    <form  onSubmit={() => {
                        props.setEditActive(false);
                        props.addTask(props.currentCategory,addTask)}
                    }>
                        <input
                            placeholder="Enter task name here"
                            type="task"
                            className="w-full p-2 rounded focus:ring-2 focus:ring-green-900 outline-none"
                            onChange={(e) => {
                                setAddTask(e.target.value)}}
                            onSubmit={() => {
                                debugger;
                                props.setEditActive(false);
                                props.addTask(props.currentCategory,addTask)}
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
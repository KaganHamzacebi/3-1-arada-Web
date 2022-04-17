import Header from "../../components/Header";
import "./Todo.css";
import {useEffect, useState} from "react";
import TasksTab from "./TasksTab";
import TaskList from "./TaskList";
import EditTaskPanel from "./EditTaskPanel";
import ToDoService from "../../service/ToDoService";
import {useCookies} from "react-cookie";
function ToDo(){
    let service = new ToDoService();
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const [userToken, setUserToken] = useState(cookies["userToken"]);
    let [checkMap,setCheckMap] = useState(false);
    let [editActive,setEditActive] = useState(false);
    let [changeState,setChangeState] = useState(false);
    let [focusedTask, setFocusedTask] = useState(null);
    let [tasks, setTasks] = useState(null);
    let body;
    useEffect(() => {
        service.getPlainTasks(userToken).then((response) => {
            setTasks(response.data.tasks);
        })
    },[changeState])
    return <div id="todoWrapper">
        <Header/>
        <div className="pt-28 pb-8 px-14 grid grid-cols-1 md:grid-cols-2">
            <TaskList
                addTask={(userToken,taskName) => service.addTask(userToken,taskName)}
                addTrueTask={(userToken,taskName,taskBoolean) => {
                    service.addTrueTask(userToken,taskName,taskBoolean)
                    setChangeState(!changeState);
                }}
                removeTask={(userToken,taskName,taskId) => {
                    service.removeTask(userToken,taskName,taskId);
                    setChangeState(!changeState);
                }}
                tasks={tasks}
                checkMap={checkMap}
                setCheckMap={setCheckMap}
                focusedTask={focusedTask}
                setFocusedTask={setFocusedTask}
                setEditActive={setEditActive}/>
        </div>

    </div>

}
export default ToDo;
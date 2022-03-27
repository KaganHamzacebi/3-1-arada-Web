import Header from "../../components/Header";
import "./Todo.css";
import {useEffect, useState} from "react";
import TasksTab from "./TasksTab";
import TaskList from "./TaskList";
import EditTaskPanel from "./EditTaskPanel";
import ToDoService from "../../service/ToDoService";
function ToDo(){
    let service = new ToDoService();
    let [taskCategories,setTaskCategories] = useState(null);
    let [currentCategory, setCurrentCategory] = useState(null);
    let [checkMap,setCheckMap] = useState(false);
    let [editActive,setEditActive] = useState(false);
    let [focusedTask, setFocusedTask] = useState(null);
    let body;
    useEffect(() => {
        service.getTaskCategories().then((response) => {
            setTaskCategories(response.data);
            setCurrentCategory(response.data[0])
        })
    },[])
    if (editActive){
        body = <div className="w-100 pt-28 pb-8 px-14 grid grid-cols-1 md:grid-cols-4">
             <TasksTab categories={taskCategories}
                       setCurrentCategory={setCurrentCategory}/>
            <TaskList
                addTask={(currentCategory,taskName) => service.addTask(currentCategory,taskName)}
                currentCategory={currentCategory}
                checkMap={checkMap}
                setCheckMap={setCheckMap}
                focusedTask={focusedTask}
                setFocusedTask={setFocusedTask}
                setEditActive={setEditActive}/>
             <EditTaskPanel setEditActive={setEditActive}
                focusedTask={focusedTask}
             />
         </div>
    }
         else {
        body = <div className="w-100 pt-28 pb-8 px-14 grid grid-cols-1 md:grid-cols-3">
            <TasksTab categories={taskCategories}
                      setCurrentCategory={setCurrentCategory}/>
            <TaskList addTask={(currentCategory,taskName) => service.addTask(currentCategory,taskName)}
                      currentCategory={currentCategory}
                      checkMap={checkMap}
                      setCheckMap={setCheckMap}
                      focusedTask={focusedTask}
                      setFocusedTask={setFocusedTask}
                      setEditActive={setEditActive}/>
        </div>
     }

    return <div id="todoWrapper">
        <Header/>
        {body}
    </div>

}
export default ToDo;
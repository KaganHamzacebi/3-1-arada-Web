import Service from "./Service";
import axios from "axios";

class ToDoService extends Service{
    constructor(){
        super("/profile");
    }
    async getPlainTasks(userToken) {
        return axios.get('/todo', {
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        });
    }
    addTrueTask(userToken,taskName,taskBoolean){
        let payload = {task:taskName, isDone:taskBoolean}
        return axios.put("/todo",payload,{
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        })
    }
    removeTask(userToken,taskName,taskId){
        let payload = {id:taskId,task:taskName}
        return axios.post("/deleteTask",payload,{
            baseURL : this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        })
    }
    addTask(userToken,taskName){
        let payload = {task:taskName, isDone:false}
        return axios.post("/todo",payload,{
            baseURL: this.endpointBase,
            headers: {
                Authorization: 'Bearer ' + userToken
            }
        })
    }
}
export default ToDoService;

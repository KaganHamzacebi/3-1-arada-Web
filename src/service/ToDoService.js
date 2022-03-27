import Service from "./Service";
import axios from "axios";

class ToDoService extends Service{
    constructor(){
        super("/todo");
    }
    getTaskCategories(){
        return axios.get("/getCategories", {
            baseURL: this.endpointBase,
            headers: this.authHeader()
        })
    }
    addTask(currentCategory,taskName){
        if (currentCategory){
            let payload = {categoryName : currentCategory.id, taskName:taskName}
            return axios.post("/addTask",payload,{
                baseURL: this.endpointBase,
                headers: this.authHeader()
            })
        }
    }
}
export default ToDoService;

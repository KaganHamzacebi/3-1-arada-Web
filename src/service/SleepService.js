import Service from "./Service";

class SleepService extends Service{
    getLineChartData(){
        return this.get("/sleep/deneme");
    }
}
export default SleepService;
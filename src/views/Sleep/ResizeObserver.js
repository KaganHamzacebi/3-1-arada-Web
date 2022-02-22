import * as echarts from "echarts";

export default new ResizeObserver(entries => {
    entries.map(({target}) => {
        const instance = echarts.getInstanceByDom(target)
        if (instance) {
            console.log("RESIZE: " + instance.getId());
            instance.resize()
        }
    })
})
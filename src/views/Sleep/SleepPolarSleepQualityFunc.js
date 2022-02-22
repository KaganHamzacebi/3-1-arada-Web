import React, {useEffect, useRef, useState} from "react";
import Theme from "./Theme";
import * as echarts from "echarts";

export default function SleepPolarSleepQualityFunc({options, resizeObserver}) {
    const [theme, setTheme] = useState(new Theme().theme);
    const myChart = useRef(null);


    useEffect(() => {
        echarts.registerTheme('purple-passion', theme);
        const chart = echarts.init(myChart.current, 'purple-passion', {
            width: window.parent.innerWidth,
            height: window.outerHeight * 0.60
        });

        chart.setOption(options);
        if (resizeObserver) resizeObserver.observe(myChart.current);
    }, [options, resizeObserver, theme]);

    return (<div
        ref={myChart}
        style={{
            width: "100%",
            height: "100%",
        }}
    ></div>);
}
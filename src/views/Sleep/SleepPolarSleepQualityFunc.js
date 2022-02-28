import React, {useEffect, useRef, useState} from "react";
import Theme from "./Theme";
import * as echarts from "echarts";

export default function SleepPolarSleepQualityFunc({options, resizeObserver}) {
    const [theme, setTheme] = useState(new Theme().theme);
    const myChart = useRef(null);


    useEffect(() => {
        echarts.registerTheme('purple-passion', theme);
        const chart = echarts.init(myChart.current, 'purple-passion', {
            width: window.parent.innerWidth*0.2,
            height: window.parent.innerHeight * 0.2
        });

        function updateSize() {
            chart.resize({
                width: window.parent.innerWidth * 0.2,
                height: window.parent.innerHeight * 0.2
            });
        }

        chart.setOption(options);
        if (resizeObserver) resizeObserver.observe(myChart.current);
        window.addEventListener('resize', updateSize);

    }, [options, resizeObserver, theme]);

    return (<div
        ref={myChart}
    ></div>);
}
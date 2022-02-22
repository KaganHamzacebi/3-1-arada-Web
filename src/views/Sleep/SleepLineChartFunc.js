import * as echarts from "echarts";
import Theme from "./Theme";
import React, {useEffect, useRef, useState} from "react";
import SleepService from "../../service/SleepService";
import PropTypes from "prop-types";

export default function SleepLineChartFunc({options, resizeObserver}) {
    const [theme, setTheme] = useState(new Theme().theme);
    const sleepService = new SleepService();
    const data = sleepService.getLineChartData();
    const myChart = useRef(null);


    useEffect(() => {
        echarts.registerTheme('purple-passion', theme);
        const chart  = echarts.init(myChart.current, 'purple-passion', {
            width: window.parent.innerWidth,
            height: window.outerHeight * 0.60
        });

        chart.setOption(options);
        if (resizeObserver) resizeObserver.observe(myChart.current);
    }, [options, resizeObserver, theme]);

    SleepLineChartFunc.propTypes = {
        options: PropTypes.any,
        resizeObserver: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    };

    return (
        <div
            ref={myChart}
            style={{
                width: "100%",
                height: "100%",
            }}
        ></div>
    );
}
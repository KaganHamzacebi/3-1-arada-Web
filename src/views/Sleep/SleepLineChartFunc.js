import * as echarts from "echarts";
import Theme from "./Theme";
import React, {useEffect, useRef, useState} from "react";
import SleepService from "../../service/SleepService";
import PropTypes from "prop-types";

export default function SleepLineChartFunc({options, resizeObserver}) {
    const [theme] = useState(new Theme().theme);
    const sleepService = new SleepService();
    sleepService.getLineChartData();
    const myChart = useRef(null);
    let chart = null;

    useEffect(() => {
        echarts.registerTheme('purple-passion', theme);
        chart = echarts.init(myChart.current, 'purple-passion', {
            width: window.innerWidth * 0.4,
            height: window.outerHeight * 0.8
        });

        function updateSize() {
            chart.resize({
                width: window.innerWidth * 0.40,
                height: window.outerHeight * 0.8
            });
        }

        chart.setOption(options);
        if (resizeObserver) resizeObserver.observe(myChart.current);
        window.addEventListener('resize', updateSize);
    }, [options, resizeObserver, theme]);

    SleepLineChartFunc.propTypes = {
        options: PropTypes.any,
        resizeObserver: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    };

    return (
        <div
            ref={myChart}
        ></div>
    );
}
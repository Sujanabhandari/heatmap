import React from 'react';
import Plot from 'react-plotly.js';

const LineGraph = ({ data, targetId }) => {
    const filteredData =  Object.entries(data).filter(([key, value]) => key === targetId || !targetId)

    const linedata = filteredData.map(([key, value]) => {
        return {
            x: value.timeStamp,
            y: value.y,
            type: 'scatter',
            name:`Human ${key}`,
            mode: 'lines+markers',
            marker: { color: key },
        }
    })
    return (
        <Plot
            data={linedata}
            layout={{ width: 1024, height: 800, title: 'Line Graph of Instances' }}
        />
    );

}

export default LineGraph;
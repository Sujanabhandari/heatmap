import React from 'react';
import Plot from 'react-plotly.js';

const objectToColorMap = {
    0:"blue",
    1:"pink",
    2:"black",
    3:"grey",
    4:"orange"

}
const LineGraph = ({ data, targetId }) => {
    const filteredData =  Object.entries(data).filter(([key, value]) => key === targetId || !targetId)

    const linedata = filteredData.map(([key, value]) => {
        return {
            x: value.x,
            y: value.y,
            type: 'scatter',
            name:`Human ${key}`,
            mode: 'lines+markers',
            marker: { color: objectToColorMap[key] },
        }
    })
    return (
        <Plot
            data={linedata}
            layout={{ width: 1200, height: 500, title: 'A Fancy Plot' }}
        />
    );

}

export default LineGraph;
import React, { useRef, useEffect } from 'react'
import h337 from 'heatmap.js';
import heatMapData from './Model';


const DataHeatMap = ({data, targetId}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const heatmap = h337.create({
            container: containerRef.current
        });

        const heatData = data.filter((d) => d.objectId == targetId || !targetId).map((d) => {
            return {
                x: parseInt(d.x)*60,
                y: parseInt(d.y)*25,
                value:1,
            }
        })
        heatmap.setData({ max: 30, data: [...heatData] });
    }, [data, targetId]);

    return (
        <div className="col" ref={containerRef} style={{ width: "auto", height: "800px", border:"3px solid black" , marginTop:"10px"}} />
    )
}

export default DataHeatMap;

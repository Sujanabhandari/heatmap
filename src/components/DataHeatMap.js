import React, { useRef, useEffect } from 'react'
import Heatmap from 'heatmap.js';

const ZOOM = 30;

const DataHeatMap = ({ data, targetId }) => {
    const containerRef = useRef(null);
    const heatmapRef = useRef();
    useEffect(() => {
        if (!containerRef.current) {
            return;
        }
        const heatData = data.filter((d) => d.objectId == targetId || !targetId).map((d) => {
            return {
                x: parseInt(d.x) * ZOOM,
                y: parseInt(d.y) * ZOOM,
                value: 1,
            }
        });
        if (!heatmapRef || !heatmapRef.current) {
            console.log("lkjl");
            heatmapRef.current = Heatmap.create({
                container: containerRef.current
            });
        }
        // set the data to the heatmap
        heatmapRef.current.setData({ max: 30, data: heatData });
    }, [data, targetId, containerRef]);

    return (
        <div ref={containerRef} style={{ width: "auto", height: "800px" }} />
    )
}

export default DataHeatMap;

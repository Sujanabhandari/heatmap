import { useRef, useEffect, useState, useMemo } from 'react';
import './App.css';
import DataHeatMap from './components/DataHeatMap';
import LineGraph from './components/LineGraph';
import { getLists } from './utils/utils';
import heatMapData from './components/Model';
import FilterInstance from './components/FilterInstance';

function App() {
    const [targetId, setTargetid] = useState(null);
    const [lineData, setLineData] = useState(getLists());
    // let lineData = getLists();
    const instances = Object.keys(lineData);

    return (
        <>
            <div className='container mt-5'>
                <FilterInstance instances={instances} setTargetid={setTargetid}/>
                <LineGraph data={lineData} targetId={targetId}/>
                <DataHeatMap data={heatMapData} targetId={targetId}/>
            </div>
        </>
    );
}

export default App;

import React from 'react'

const FilterInstance = ({instances, setTargetid}) => {

    const handleClick = (e) => {
        let id = null;
        if (e.target.value !== "null") id = e.target.value;
        setTargetid(id);
    }
    return (
        <div>
        <select className="form-select mt-5" style={{height:"50px", width:"300px"}} onChange={handleClick}>
            <option value="null">All Instances</option>
            {instances.map((data, index) => (
                <option value={data} key={index}>Instance {data}</option>
            )
            )}
        </select>
        </div>
    )
}
export default FilterInstance;
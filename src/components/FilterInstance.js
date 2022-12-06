import React from 'react'

const FilterInstance = ({instances, setTargetid}) => {

    const handleClick = (e) => {
        let id = null;
        if (e.target.value !== "null") id = e.target.value;
        setTargetid(id);
    }
    return (
        <select className="form-select form-select-sm" aria-label="Default select example" onChange={handleClick}>
            <option value="null">All Instances</option>
            {instances.map((data, index) => (
                <option value={data} key={index}>Human {data}</option>
            )
            )}
        </select>
    )
}
export default FilterInstance;
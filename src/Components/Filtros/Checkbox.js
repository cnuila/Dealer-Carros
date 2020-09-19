import React from 'react'

function Checkbox(props) {
    return (
        <div>
            <label className="inline-flex items-center">
                <input name={props.nombre} type="checkbox" className="form-checkbox text-gray-900" onChange={props.handleInputChange} checked={props.checked}/>
                <span className="ml-2">{props.texto}</span>
            </label>
        </div>
    )
}

export default Checkbox;

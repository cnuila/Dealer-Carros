import React from 'react'

function Checkbox(props) {
    return (
        <div>
            <label className="inline-flex items-center">
                <input name={props.nombre} type="checkbox" className="rounded text-gray-900 focus:ring-0" onChange={props.handleInputChange} checked={props.checked}/>
                <span className="ml-2">{props.texto}</span>
            </label>
        </div>
    )
}

export default Checkbox;

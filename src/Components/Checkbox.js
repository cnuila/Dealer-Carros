import React from 'react'

function Checkbox(props) {
    return (
        <div>
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-gray-900" />
                <span className="ml-2">{props.texto}</span>
            </label>
        </div>
    )
}

export default Checkbox;

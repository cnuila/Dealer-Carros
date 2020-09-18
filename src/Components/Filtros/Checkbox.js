import React, { Component } from 'react'

class Checkbox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: this.props.isChecked,
        }
    }
    
    //handleOnChange = ({target})

    render() {
        return (
            <div>
                <label className="inline-flex items-center">
                    <input name={this.props.nombre} type="checkbox" className="form-checkbox text-gray-900" />
                    <span className="ml-2">{this.props.texto}</span>
                </label>
            </div>
        )
    }
}

Checkbox.defaultProps = {
    isChecked:false,
}

export default Checkbox;

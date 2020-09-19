import React, { Component } from 'react'
import { CirclePicker } from 'react-color';
import "react-datepicker/dist/react-datepicker.css"


class ColorPicker extends Component {

    handleChangeComplete = (color) => {
        let colorActual = "transparent"
        if (this.props.color !== color.hex){
            colorActual = color.hex
        }
        let target = {
            name:"color",
            type:"color",
            value:colorActual
        }
        let event = {
            target
        }
        this.props.handleInputChange(event)
    };

    render() {
        let colors= ["#FF0000", "#0047CB", "#FBFF00", "#FFFFFF", "#000000", "#777777"]
        return (
            <CirclePicker color={this.props.color}
                colors={colors}
                onChangeComplete={this.handleChangeComplete} 
                width={this.props.width}
                circleSize={this.props.circleSize}/>
        )
    }
}

export default ColorPicker;

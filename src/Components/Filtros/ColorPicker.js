import React, { Component } from 'react'
import { CirclePicker } from 'react-color';
import "react-datepicker/dist/react-datepicker.css"


class ColorPicker extends Component {
    state = {
        background:"#1C8D00",
    };

    handleChangeComplete = (color) => {
        let colorActual = "#1C8D00"
        if (this.state.background !== color.hex){
            colorActual = color.hex
        }
        this.setState({ background: colorActual });
    };

    render() {
        let colors= ["#FF0000", "#0047CB", "#FBFF00", "#FFFFFF", "#000000", "#777777"]
        return (
            <CirclePicker color={this.state.background}
                colors={colors}
                onChangeComplete={this.handleChangeComplete} 
                width={this.props.width}
                circleSize={this.props.circleSize}/>
        )
    }
}

export default ColorPicker;

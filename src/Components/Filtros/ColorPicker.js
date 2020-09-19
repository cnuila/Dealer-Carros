import React from 'react'
import { CirclePicker } from 'react-color';
import "react-datepicker/dist/react-datepicker.css"


function ColorPicker(props) {

    const handleChangeComplete = (color) => {
        let colorActual = "transparent"
        if (props.color !== color.hex) {
            colorActual = color.hex
        }
        let target = {
            name: "color",
            type: "color",
            value: colorActual
        }
        let event = {
            target
        }
        props.handleInputChange(event)
    };

    const colors= ["#FF0000", "#0047CB", "#FBFF00", "#FFFFFF", "#000000", "#777777"]

    return (
        <CirclePicker color={props.color}
            colors={colors}
            onChangeComplete={handleChangeComplete}
            width={props.width}
            circleSize={props.circleSize} />
    )
}

export default ColorPicker;

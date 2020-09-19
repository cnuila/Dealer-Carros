import React, { Component } from 'react'

class Counter extends Component {

    mandarPadre = (valor) => {
        let target = {
            name:this.props.nombre,
            type:"text",
            value:valor,
        }
        let evento = {
            target
        }
        this.props.handleInputChange(evento)
    }

    handleChange = ({ target }) => {
        let { value } = target
        let { valor } = this.props
        let nuevoValor
        if ((value - 0) === 0) {
            nuevoValor = "Cualquiera"         
        } else {
            nuevoValor = value
            if (valor === "Cualquiera") {                
                nuevoValor = nuevoValor.substring(nuevoValor.length-1)
            }
            if (!isNaN(nuevoValor - 0)){
                nuevoValor = nuevoValor - 0
            } else {
                nuevoValor = valor
            }
        }
        this.mandarPadre(nuevoValor)
    }

    decrement = () => {
        let { minimo, step, valor } = this.props
        let nuevoValor = valor
        if (nuevoValor !== "Cualquiera") {
            nuevoValor-=step
            let valorGuardar = nuevoValor
            if (nuevoValor === 0) {
                valorGuardar = "Cualquiera"
            } else {
                if (nuevoValor < minimo) {
                    valorGuardar = "Cualquiera"
                }
            }
            this.mandarPadre(valorGuardar)
        }
    }

    increment = () => {
        let { minimo, step, valor } = this.props
        let nuevoValor = valor
        if (nuevoValor === "Cualquiera") {
            if (minimo === 0){
                nuevoValor = 0
            } else {
                nuevoValor = minimo - 1
            }            
        }
        nuevoValor+=step
        this.mandarPadre(nuevoValor)
    }

    render() {
        return (
            <div className="h-10 w-48 transform scale-75">

                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button className="bg-gray-800 text-gray-100 hover:text-gray-200 hover:bg-gray-700 h-full w-20 rounded-l cursor-pointer focus:outline-none"
                        onClick={this.decrement}>
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>

                    <input className="outline-none focus:outline-none text-center w-full bg-gray-800 font-semibold text-md hover:text-gray-500 focus:text-gray-500  md:text-basecursor-default flex items-center text-gray-100  outline-none"
                        name="numero" type="text" value={this.props.valor} onChange={this.handleChange}></input>

                    <button className="bg-gray-800 text-gray-100 hover:text-gray-200 hover:bg-gray-700 h-full w-20 rounded-r cursor-pointer focus:outline-none"
                        onClick={this.increment}>
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    valor:0,
    minimo: 0,
    step: 1,
};

export default Counter;
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numero: props.inicial,
        }
    }


    handleChange = ({ target }) => {
        let { name, value } = target
        let { numero } = this.state
        if ((value - 0) === 0) {
            this.setState({
                [name]: "Cualquiera",
            })
        } else {
            let valor = value
            if (numero === "Cualquiera") {                
                valor = valor.substring(valor.length-1)
            }
            if ((valor - 0) >= 0) {
                this.setState({
                    [name]: valor - 0,
                })
            }
        }
    }

    decrement = () => {
        let { minimo, step } = this.props
        let { numero } = this.state
        let nuevoValor = numero
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
            this.setState({
                numero: valorGuardar,
            })
        }
    }

    increment = () => {
        let { minimo, step } = this.props
        let { numero } = this.state
        let nuevoValor = numero
        if (nuevoValor === "Cualquiera") {
            if (minimo === 0){
                nuevoValor = 0
            } else {
                nuevoValor = minimo - 1
            }            
        }
        nuevoValor+=step
        this.setState({
            numero: nuevoValor,
        })
    }

    render() {
        return (
            <div className="h-10 w-48 transform scale-75">

                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button className="bg-gray-800 text-gray-100 hover:text-gray-200 hover:bg-gray-700 h-full w-20 rounded-l cursor-pointer focus:outline-none"
                        onClick={this.decrement}>
                        <span class="m-auto text-2xl font-thin">−</span>
                    </button>

                    <input className="outline-none focus:outline-none text-center w-full bg-gray-800 font-semibold text-md hover:text-gray-500 focus:text-gray-500  md:text-basecursor-default flex items-center text-gray-100  outline-none"
                        name="numero" type="text" value={this.state.numero} onChange={this.handleChange}></input>

                    <button className="bg-gray-800 text-gray-100 hover:text-gray-200 hover:bg-gray-700 h-full w-20 rounded-r cursor-pointer focus:outline-none"
                        onClick={this.increment}>
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    inicial: "Cualquiera",
    minimo: 0,
    step: 1,
};

export default Counter;
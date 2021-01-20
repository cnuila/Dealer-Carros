import React, { Component } from 'react'
import ColorPicker from "../Utilidades/ColorPicker"
import Checkbox from "../Utilidades/Checkbox"
import Counter from "../Utilidades/Counter"
import Swal from "sweetalert2"
import { db } from "../../firebase"

class Filtros extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ...this.estadoInicial,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    estadoInicial = {
        ano: "Cualquiera",
        color: "transparent",
        precioMax: "Cualquiera",
        precioMin: "Cualquiera",
        salvage: false,
        clean: false,
        titulo: false,
        inspeccionado: false,
        linkHolder: false,
    }

    handleInputChange({ target }) {
        let { name, type } = target
        let valor
        if (type === "checkbox") {
            valor = target.checked
        } else {
            valor = target.value
        }
        this.setState({
            [name]: valor,
        })
    }

    aplicarFiltros = () => {
        let { ano, color, precioMax, precioMin, salvage, clean, titulo, inspeccionado, linkHolder } = this.state
        if (ano !== "Cualquiera" || color !== "transparent" || precioMax !== "Cualquiera" || precioMin !== "Cualquiera" ||
            salvage !== false || clean !== false || titulo !== false || inspeccionado !== false || linkHolder !== false) {

            let query = db.collection("carros")

            if (ano !== "Cualquiera") {
                query = query.where("ano", "==", ano)
            }

            if (salvage !== false) {
                query = query.where("salvage", "==", true)
            }

            if (clean !== false) {
                query = query.where("clean", "==", true)
            }

            if (titulo !== false) {
                query = query.where("titulo", "==", true)
            }

            if (inspeccionado !== false) {
                query = query.where("inspeccionado", "==", true)
            }

            if (linkHolder !== false) {
                query = query.where("linkHolder", "==", true)
            }

            if (color !== "transparent") {
                if (color === "#ff0000") {
                    color = "Rojo"
                }
                if (color === "#0047cb") {
                    color = "Azul"
                }
                if (color === "#fbff00") {
                    color = "Amarillo"
                }
                if (color === "#ffffff") {
                    color = "Blanco"
                }
                if (color === "#000000") {
                    color = "Negro"
                }
                if (color === "#777777") {
                    color = "Gris"
                }
                if (color === "#c0c0c0") {
                    color = "Plateado"
                }
                if (color === "#ff8a65") {
                    color = "Otro"
                }
                query = query.where("color", "==", color)
            }

            if (precioMax !== "Cualquiera") {
                query = query.where("precioFinal", "<=", precioMax)
            }

            if (precioMin !== "Cualquiera") {
                query = query.where("precioFinal", ">=", precioMin)
            }

            if (precioMax !== "Cualquiera" || precioMin !== "Cualquiera") {
                query = query.orderBy("precioFinal")
            }

            this.props.mostrarConsulta(query)
        } else {
            Swal.fire(
                '¡Ops!',
                'No puedes filtrar si no seleccionas un campo',
                'warning'
            )
        }
    }

    reiniciar = () => {
        let { ano, color, precioMax, precioMin, salvage, clean, proveedor, titulo, inspeccionado, linkHolder } = this.state
        if (ano !== "Cualquiera" || color !== "transparent" || precioMax !== "Cualquiera" || precioMin !== "Cualquiera" ||
            salvage !== false || clean !== false || proveedor !== false || titulo !== false || inspeccionado !== false || linkHolder !== false) {
            let query = db.collection("carros").orderBy("marca")
            this.props.mostrarConsulta(query)
            this.setState({
                ...this.estadoInicial,
            })
        }
    }

    render() {
        let { ano, color, precioMax, precioMin, salvage, clean, titulo, inspeccionado, linkHolder } = this.state
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-900 rounded-lg text-sm font-semibold mx-7 sm:mx-12 p-5 text-gray-200">

                <div className="flex items-center space-x-1 mx-2 mb-2 sm:m-1 col-span-2 sm:col-span-1">
                    <div>
                        Año
                    </div>
                    <div>
                        <Counter nombre={"ano"} valor={ano} minimo={1980} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="flex space-x-1 sm:space-x-4 items-center m-2 sm:m-1 col-span-2 sm:col-span-1">
                    <div>
                        Precio Min.
                    </div>
                    <div>
                        <Counter nombre={"precioMin"} valor={precioMin} minimo={0} step={100} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="flex space-x-1 sm:space-x-4 items-center m-2 sm:m-1 col-span-2 sm:col-span-1">
                    <div className="">
                        Precio Max.
                    </div>
                    <div>
                        <Counter nombre={"precioMax"} valor={precioMax} minimo={0} step={100} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="m-2 sm:mt-4">
                    <Checkbox texto="Salvage" nombre="salvage" handleInputChange={this.handleInputChange} checked={salvage} />
                </div>

                <div className="m-2 sm:mb-1">
                    <Checkbox texto="Clean" nombre="clean" handleInputChange={this.handleInputChange} checked={clean} />
                </div>

                <div className="m-2 sm:mb-1">
                    <Checkbox texto="Titulo" nombre="titulo" handleInputChange={this.handleInputChange} checked={titulo} />
                </div>

                <div className="m-2 sm:mb-1">
                    <Checkbox texto="Inspeccionado" nombre="inspeccionado" handleInputChange={this.handleInputChange} checked={inspeccionado} />
                </div>

                <div className="m-2 sm:mb-1 place-self-center md:place-self-start col-span-2 md:col-span-1 ">
                    <Checkbox texto="Link Holder" nombre="linkHolder" handleInputChange={this.handleInputChange} checked={linkHolder} />
                </div>

                <div className="flex items-center space-x-4 transform scale-95 sm:scale-100 sm:m-1 col-span-2 sm:col-span-2">
                    <div>
                        Color
                    </div>
                    <div className="overflow-x-scroll md:overflow-hidden py-4 md:py-2 pl-2">
                        <ColorPicker width={300} circleSize={22} color={color} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="md:col-start-4 m-2 md:mb-1 place-self-center md:place-self-end col-span-2 md:col-span-1">
                    <button className="focus:outline-none mx-2 sm:mx-5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center"
                        onClick={this.aplicarFiltros}>
                        <span className="flex-1">Aplicar</span>
                    </button>
                    <button className="focus:outline-none mx-2 sm:mx-5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center"
                        onClick={this.reiniciar}>
                        <span className="flex-1">Limpiar</span>
                    </button>
                </div>



            </div>
        );
    }
}

export default Filtros;

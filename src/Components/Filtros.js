import React, { Component } from 'react'
import ColorPicker from "./Utilidades/ColorPicker"
import Checkbox from "./Utilidades/Checkbox"
import Counter from "./Utilidades/Counter"
import { db } from "../firebase"

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
        proveedor: false,
        inspeccionado: false,
        lienHolder: false,
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
        let { ano, color, precioMax, precioMin, salvage, clean, proveedor, titulo, inspeccionado, lienHolder } = this.state
        if (ano !== "Cualquiera" || color !== "transparent" || precioMax !== "Cualquiera" || precioMin !== "Cualquiera" ||
            salvage !== false || clean !== false || proveedor !== false || titulo !== false || inspeccionado !== false || lienHolder !== false) {

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

            if (lienHolder !== false) {
                query = query.where("lienHolder", "==", true)
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

            if (proveedor !== false) {
                query = query.orderBy("proveedor")
            }

            this.props.mostrarConsulta(query)
        } else {
            alert("No puede filtrar sin seleccionar un campo")
        }
    }

    reiniciar = () => {
        let { ano, color, precioMax, precioMin, salvage, clean, proveedor, titulo, inspeccionado, lienHolder } = this.state        
        if (ano !== "Cualquiera" || color !== "transparent" || precioMax !== "Cualquiera" || precioMin !== "Cualquiera" ||
            salvage !== false || clean !== false || proveedor !== false || titulo !== false || inspeccionado !== false || lienHolder !== false) {
            let query = db.collection("carros").orderBy("marca")
            this.props.mostrarConsulta(query)
            this.setState({
                ...this.estadoInicial,
            })
        }
    }

    render() {
        let { ano, color, precioMax, precioMin, salvage, clean, proveedor, titulo, inspeccionado, lienHolder } = this.state
        return (
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-gray-900 rounded-lg text-sm font-semibold mx-8 sm:mx-12 p-5 text-gray-100">

                <div className="flex items-center space-x-1 m-2 sm:m-1 col-span-2 sm:col-span-1">
                    <div>
                        Año
                    </div>
                    <div>
                        <Counter nombre={"ano"} valor={ano} minimo={1950} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="flex items-center space-x-4 transform scale-95 sm:scale-100 sm:m-1 col-span-2 sm:col-span-1">
                    <div>
                        Color
                    </div>
                    <div>
                        <ColorPicker width={230} circleSize={22} color={color} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="flex space-x-7 sm:space-x-4 items-center m-2 sm:m-1 col-span-2 sm:col-span-1">
                    <div>
                        Precio Min.
                    </div>
                    <div>
                        <Counter nombre={"precioMin"} valor={precioMin} minimo={0} step={100} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="flex space-x-7 sm:space-x-4 items-center m-2 sm:m-1 col-span-2 sm:col-span-1">
                    <div>
                        Precio Max.
                    </div>
                    <div>
                        <Counter nombre={"precioMax"} valor={precioMax} minimo={0} step={100} handleInputChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="m-2 sm:mb-1">
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

                <div className="m-2 sm:mb-1">
                    <Checkbox texto="Lien Holder" nombre="lienHolder" handleInputChange={this.handleInputChange} checked={lienHolder} />
                </div>

                <div className="m-2 sm:mb-1">
                    <Checkbox texto="Proveedor" nombre="proveedor" handleInputChange={this.handleInputChange} checked={proveedor} />
                </div>

                <div className="sm:col-start-4 m-2 sm:mb-1 place-self-center sm:place-self-end col-span-2 sm:col-span-1">
                    <button className="focus:outline-none mx-4 sm:mx-5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center"
                        onClick={this.aplicarFiltros}>
                        <span className="flex-1">Aplicar</span>
                    </button>
                    <button className="focus:outline-none mx-4 sm:mx-5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center"
                        onClick={this.reiniciar}>
                        <span className="flex-1">Limpiar</span>
                    </button>
                </div>


            </div>
        );
    }
}

export default Filtros;

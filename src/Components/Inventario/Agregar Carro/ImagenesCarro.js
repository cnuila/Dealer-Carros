import React, { Component } from 'react'
import Imagen from '../../Utilidades/Imagen'
import OtrasImagenes from './OtrasImagenes'
import Swal from 'sweetalert2'

export default class ImagenesCarro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
        this.traerFotos = this.traerFotos.bind(this)
    }

    traerFotos(arrayAgregar) {
        let objetoMandar = { name: "imagenes", value: [...arrayAgregar] }
        this.props.mandarPadre(objetoMandar)
    }

    borrarFoto = (indexFoto) => {
        const { imagenes } = this.props
        let copiaArray = [...imagenes]
        //eliminar elemento
        copiaArray = copiaArray.filter((foto, index) => {
            return index !== indexFoto
        })
        let objetoMandar = { name: "imagenes", value: [...copiaArray] }
        this.props.mandarPadre(objetoMandar)
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const { imagenes } = this.props;
        if (imagenes.length >= 1 && imagenes.length < 5) {
            Swal.fire(
                '¡Ops!',
                'Debes seleccionar 5 fotos',
                'warning'
            )
        } else {
            this.props.guardarDB()
        }
    }

    render() {
        const { imagenes, loading } = this.props
        const otrasFotos = imagenes.map((foto, index) => {
            if (index >= 1) {
                return (
                    <div key={index} className="relative rounded-lg h-40 w-11/12 ml-2 mt-2">
                        <div className="grid grid-cols-1 absolute z-10 h-10 w-full rounded-t-lg bg-black bg-opacity-50">
                            <svg className="fill-current text-gray-400 hover:text-gray-600 mb-3 mr-3 inline-block h-4 w-4 place-self-end" onClick={() => this.borrarFoto(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 00-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 00-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" />
                            </svg>
                        </div>
                        <img
                            className="z-0 h-full w-full rounded-lg object-cover shadow-md"
                            alt="Foto Carro"
                            src={URL.createObjectURL(foto)}
                        />
                    </div>
                )
            }
            return null
        })
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-4 h-full md:h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                    <div className="flex flex-col m-4 md:col-span-2 rounded-md bg-gray-800">
                        <h1 className="p-6 text-center text-lg font-semibold cursor-default text-gray-200">Fotos Vehículo</h1>
                        <Imagen mandarFotos={this.traerFotos} imagenes={imagenes} texto={"Agregar Foto Principal"}/>
                        <OtrasImagenes mandarFotos={this.traerFotos} imagenes={imagenes} />
                    </div>
                    <div className="flex flex-col md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-5/6 mt-4 mb-4 mr-4">
                            {otrasFotos}
                        </div>
                        <div className="grid grid-cols-2 pr-3">
                            <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl -mt-3 h-9 w-8/12 items-center place-self-start shadow-lg cursor-pointer">
                                <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => this.props.previoStep(3)}>
                                    Anterior
                                </button>
                            </div>
                            {loading
                                ? <div className="flex bg-green-600 hover:bg-green-700 cursor-not-allowed rounded-3xl -mt-3 h-9 w-8/12 items-center place-self-end shadow-lg">
                                    <div className="ml-4 pt-px mr-2 text-center text-sm font-semibold focus:outline-none text-gray-200">
                                        Guardando
                                    </div>
                                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="stroke-current opacity-25" strokeWidth="4" cx="12" cy="12" r="10" />
                                        <path className="fill-current opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                </div>
                                : <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl -mt-3 h-9 w-8/12 items-center place-self-end shadow-lg cursor-pointer">
                                    <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                                        Finalizar
                                    </button>
                                </div>}
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


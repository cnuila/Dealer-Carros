import React, { Component } from 'react'
import ImagenPrincipal from './ImagenPrincipal'
import OtrasImagenes from './OtrasImagenes'

export default class ImagenesCarro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imagenes: [],
        }
        this.traerFotos = this.traerFotos.bind(this)
    }

    traerFotos(arrayAgregar) {
        this.setState({
            imagenes: arrayAgregar
        })
    }

    borrarFoto = (indexFoto) => {
        const { imagenes } = this.state
        let copiaArray = [...imagenes]
        //eliminar elemento
        copiaArray = copiaArray.filter((foto, index) => {
            return index !== indexFoto
        })
        this.setState({
            imagenes: copiaArray
        })
    }

    handleOnSubmit(e) {
        e.preventDefault()
        //¿Deben ser siempre 5 fotos?
    }

    render() {
        const { imagenes } = this.state
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
                <div className="grid grid-cols-4 h-72 bg-red-800 max-w-3xl mx-auto rounded-lg shadow-2xl">
                    <div className="flex flex-col m-4 col-span-2 bg-blue-400">
                        <h1 className="p-6 text-center text-lg font-semibold cursor-default">Fotos Vehículo</h1>
                        <ImagenPrincipal mandarFotos={this.traerFotos} imagenes={imagenes} />
                        <OtrasImagenes mandarFotos={this.traerFotos} imagenes={imagenes} tamañoArray={imagenes.length} />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <div className="grid grid-cols-2 h-5/6 mt-4 mb-4 mr-4 bg-green-800">
                            {otrasFotos}
                        </div>
                        <div className="flex bg-gray-900 hover:bg-gray-800 rounded-3xl mx-5 -mt-3 h-9 w-4/12 items-center self-end shadow-lg cursor-pointer">                           
                            <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-white">
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


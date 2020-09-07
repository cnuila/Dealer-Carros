import React from 'react'
import Carro from './Carro'

class Principal extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bg-gray-100">
                {/*Inicio del navbar*/}
                <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-3">
                    <div class="flex items-center flex-shrink-0 text-white mr-6">
                        <span class="font-bold text-4xl tracking-tight pl-10">Santos Motors</span>
                    </div>
                    <div>
                        <button class="bg-gray-900 hover:bg-gray-800 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Agregar</span>
                        </button>
                        <button class="bg-gray-900 hover:bg-gray-800 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                </nav>
                {/*fin del navbar*/}
                <div className="grid grid-cols-1 gap-4">
                    poner botones
                </div>
                <div className="grid grid-flow-cols-1 md:grid-cols-3 mt-20 mx-4 md:mx-8">
                    <Carro marca={"Tesla"} modelo={"Model X"} ano={2020} precio={30000} estado={"Disponible"} tipoTitulo={"S"}/>
                    <Carro marca={"Aston Martin"} modelo={"DBS Superleggera"} ano={2020} precio={400000} estado={"Disponible"} tipoTitulo={"C"}/>
                    <Carro marca={"Tesla"} modelo={"Model X"} ano={2020} precio={1230000} estado={"Disponible"} tipoTitulo={"S"}/>
                    <Carro marca={"Tesla"} modelo={"Model X"} ano={2020} precio={130000} estado={"Disponible"} tipoTitulo={"S"}/>
                    <Carro marca={"Tesla"} modelo={"Model X"} ano={2020} precio={30000} estado={"Disponible"} tipoTitulo={"S"}/>
                    <Carro marca={"Tesla"} modelo={"Model X"} ano={2020} precio={30000} estado={"Disponible"} tipoTitulo={"S"}/>
                </div>
            </div>
        );
    }

}

export default Principal;
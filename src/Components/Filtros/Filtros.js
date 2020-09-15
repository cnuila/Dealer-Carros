import React from 'react'
import ColorPicker from "./ColorPicker"
import Checkbox from "./Checkbox"
import Counter from "./Counter"

function Filtros(props) {
    return (
        <div className={"grid grid-cols-2 sm:grid-cols-4 bg-gray-900 rounded-lg text-sm font-semibold mx-6 sm:mx-12 p-5 text-gray-100"}>

            <div className="flex items-center space-x-1 m-2 sm:m-1 col-span-2 sm:col-span-1">
                <div className="sm:ml-3">
                    Año
                </div>
                <div>
                    <Counter inicial={"Cualquiera"} minimo={1950} />
                </div>
            </div>

            <div className="flex items-center space-x-4 transform scale-95 sm:scale-100 sm:m-1 col-span-2 sm:col-span-1">
                <div className="ml-0 sm:ml-3">
                    Color
                </div>
                <div>
                    <ColorPicker width={230} circleSize={22} />
                </div>
            </div>

            <div className="flex items-center m-2 sm:m-1 col-span-2 sm:col-span-1">
                <div className="flex-1">
                    Precio Max.
                </div>
                <div className="flex-1">
                    <Counter inicial={"Cualquiera"} minimo={0} />
                </div>
            </div>

            <div className="flex items-center m-2 sm:m-1 col-span-2 sm:col-span-1">
                <div className="flex-1 ml-0 sm:ml-4">
                    Precio Min.
                </div>
                <div className="flex-1">
                    <Counter inicial={"Cualquiera"} minimo={0} />
                </div>
            </div>

            <div className="m-2 sm:mb-1">
                <Checkbox texto="Salvage" />
            </div>

            <div className="m-2 sm:mb-1">
                <Checkbox texto="Clean" />
            </div>

            <div className="m-2 sm:mb-1">
                <Checkbox texto="Proveedor" />
            </div>

            <div className="m-2 sm:mb-1">
                <Checkbox texto="Titulo" />
            </div>

            <div className="m-2 sm:mb-1">
                <Checkbox texto="Inspeccionado" />
            </div>

            <div className="m-2 sm:mb-1">
                <Checkbox texto="Lien Holder" />
            </div>

            <div className="sm:col-start-4 m-2 sm:mb-1 place-self-center sm:place-self-end col-span-2 sm:col-span-1">
                <button className="focus:outline-none mx-4 sm:mx-5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="flex-1">Aplicar</span>
                </button>
                <button className="focus:outline-none mx-4 sm:mx-5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="flex-1">Limpiar</span>
                </button>
            </div>


        </div>
    );
}

export default Filtros;

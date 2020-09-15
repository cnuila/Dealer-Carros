import React from 'react'
import ColorPicker from "./ColorPicker"
import "react-datepicker/dist/react-datepicker.css"
import Checkbox from "./Checkbox"
import Counter from "./Counter"

function Filtros(props) {
    return (
        <div className={"grid grid-cols-4 bg-gray-900 rounded-lg mx-12 p-5 transform scale-75 sm:scale-100 place-items-center text-gray-100"}>

            <div className="flex items-center">
                <div className="flex-1 mx-4 my-1">
                    Año
                </div>
                <div className="flex-1">
                    <Counter inicial={2000} minimo={1950}/>
                </div>
            </div>
            <div className="flex items-center my-1">
                <div className="flex-1 mx-4">
                    Color
                </div>
                <div className="flex!">
                    <ColorPicker />
                </div>
            </div>

            <div className="m-1 my-1">
                <Checkbox texto="Proveedor" />
            </div>

            <div className="m-1 my-1">
                <Checkbox texto="Salvage" />
            </div>

            <div className="m-1 my-1">
                <Checkbox texto="Titulo" />
            </div>

            <div className="m-1 my-1">
                <Checkbox texto="Inspeccionado" />
            </div>
            <div className="m-1">
                <Checkbox texto="Lien Holder" />
            </div>

            <div className="m-1 my-1">
                <Checkbox texto="Clean" />
            </div>
        </div>
    );
}

export default Filtros;

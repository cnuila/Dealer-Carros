import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import ColorPicker from "./ColorPicker"
import "react-datepicker/dist/react-datepicker.css"

function Filtros(props) {
    const [startDate, setStartDate] = useState(null);
    return (
        <div className={"grid grid-cols-4 bg-gray-800 rounded-lg mx-12 p-5 transform scale-75 sm:scale-100 place-items-center text-gray-100"}>

            <div className="flex items-center">
                <div className="flex-1 mx-4 my-1">
                    Año:
                </div>
                <div className="flex-1">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        yearItemNumber={4}
                        showYearPicker
                        isClearable
                        dateFormat="yyyy"
                    />
                </div>
            </div>
            <div className="flex items-center my-1">
                <div className="flex-1 mx-4">
                    Color:
                </div>
                <div className="flex!">
                    <ColorPicker />
                </div>
            </div>

            <div className="m-1 my-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-800" />
                    <span className="ml-2">Proveedor</span>
                </label>
            </div>

            <div className="m-1 my-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-800" />
                    <span className="ml-2">Salvage</span>
                </label>
            </div>

            <div className="m-1 my-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-800" />
                    <span className="ml-2">Titulo</span>
                </label>
            </div>

            <div className="m-1 my-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-800" />
                    <span className="ml-2">Inspecionado</span>
                </label>
            </div>
            <div className="m-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-800" />
                    <span className="ml-2">Lien Holder</span>
                </label>
            </div>

            <div className="m-1 my-1">
                <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-gray-800" />
                    <span className="ml-2">Clean</span>
                </label>
            </div>
        </div>
    );
}

export default Filtros;

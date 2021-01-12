import React from 'react'
import Counter from '../../Utilidades/Counter'
import ColorPicker from '../../Utilidades/ColorPicker'
import Swal from 'sweetalert2'

export default function InfoGeneral(props) {

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const { vin, marca, modelo, codigo, proveedor, ano, millaje, color } = props

    const handleOnSubmit = e => {
        e.preventDefault()
        if (millaje === "Cualquiera") {
            Swal.fire(
                '¡Ops!',
                'Debes ingresar un millaje',
                'warning'
              )
        } else {
            if (ano === "Cualquiera") {
                Swal.fire(
                    '¡Ops!',
                    'Debes ingresar un año',
                    'warning'
                  )
            } else {
                if (color === "transparent") {
                    Swal.fire(
                        '¡Ops!',
                        'Debes escoger un color',
                        'warning'
                      )
                } else {
                    props.siguienteStep(0)
                }
            }
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 p-3">

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">VIN</h2>
                        <input type="text" value={vin} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="vin" placeholder="Ej. P21CS" required onChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Marca</h2>
                        <input type="text" value={marca} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="marca" placeholder="Ej. Tesla" required onChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Modelo</h2>
                        <input type="text" value={modelo} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="modelo" placeholder="Ej. Model X" required onChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Código</h2>
                        <input type="text" value={codigo} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="codigo" placeholder="Ej. SANTOS" required onChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Proveedor</h2>
                        <input type="text" value={proveedor} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="proveedor" placeholder="Ej. Grupo Q" required onChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Año</h2>
                        <Counter nombre={"ano"} valor={ano} minimo={1980} required={true} handleInputChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Millaje</h2>
                        <Counter nombre={"millaje"} valor={millaje} minimo={0} step={100} required={true} handleInputChange={handleInputChange} />
                    </div>

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Color</h2>
                        <div className="pl-7 py-2">
                            <ColorPicker width={300} circleSize={22} color={color} handleInputChange={handleInputChange} />
                        </div>
                    </div>

                </div>
                <div className="grid place-items-end pt-1 px-7">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-4/12 items-center shadow-lg cursor-pointer">
                        <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

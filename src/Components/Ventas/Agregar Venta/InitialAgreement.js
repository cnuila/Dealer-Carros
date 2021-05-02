import React from 'react'
import moment from 'moment'
import Swal from 'sweetalert2'


export default function InitialAgreement(props) {

    const { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, nuevoDown, down, saldo, payments, fee, frecuencia14, taxes, stickers, title, inspection, fee2, tagTotal, endDate } = props.datosInitial

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const validarCampos = () => {
        if (nuevoPrecio < precio) {
            Swal.fire(
                '¡Ops!',
                'El precio que ingresaste es menor al que el carro tenía originalmente',
                'warning'
            )
        } else {
            if (nuevoDown < down - 500) {
                Swal.fire(
                    '¡Ops!',
                    'El down que ingresaste es menor al que tienes permitido ingresar',
                    'warning'
                )
            } else {
                if (payments < 250) {
                    Swal.fire(
                        '¡Ops!',
                        'El pago mínimo es $250.00',
                        'warning'
                    )
                } else {
                    return true
                }
            }
        }
        return false
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        if (validarCampos()) {
            props.siguienteStep(0)
        }
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col bg-gray-900 mx-auto lg:mx-28 rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 p-3">
                    <div className="flex flex-col">
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Costumer</h2>
                            <input type="text" value={costumer} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="costumer" placeholder="Ej. John Doe" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Address</h2>
                            <textarea rows={4} value={address} name="address" className="block bg-gray-900 text-gray-200 ml-4 px-2 py-3 mt-1 w-11/12 resize-none border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" placeholder="Ej. 10412 GUILFORD RD" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Cell</h2>
                            <input type="text" value={phoneNumber} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="phoneNumber" placeholder="Ej. (999)999-9999" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Auto</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{auto}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Year</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{year}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">VIN</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{vin}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Email</h2>
                            <input type="email" value={email} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="email" placeholder="Ej. sm@group.com" required onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Precio</h2>
                            <input type="number" min={precio} value={nuevoPrecio} step={50} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="nuevoPrecio" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Down</h2>
                            <input type="number" min={down - down*0.15} value={nuevoDown} step={10} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="nuevoDown" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Saldo</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{saldo}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Payments</h2>
                            <input type="number" min={250} value={payments} step={10} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="payments" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Fee</h2>
                            <input type="number" min={65} value={fee} step={5} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="fee" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Frecuency</h2>
                            <input type="radio" id="14dias" name="frecuency" value="14" checked={frecuencia14} className="ml-4 my-2" onChange={handleInputChange}/>
                            <label for="14dias" className="bg-gray-900 text-gray-200 ml-3">14 days</label>
                            <input type="radio" id="30dias" name="frecuency" value="30" checked={!frecuencia14} className="ml-4 my-2" onChange={handleInputChange}/>
                            <label for="30dias" className="bg-gray-900 text-gray-200 ml-3">30 days</label>                            
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Date</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{moment(new Date()).format("MM/DD/YYYY")}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">SS#</h2>
                            <input type="text" value={socialNumber} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="socialNumber" placeholder="Ej. 000000" required onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Taxes</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{taxes}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Stickers</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{stickers}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Title</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{title}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Inspection</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{inspection}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Fee</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{fee2}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Tag Total</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{tagTotal}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">End Date</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{endDate}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end place-items-end space-x-4 py-4 px-7">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-2/12 items-center shadow-lg cursor-pointer">
                        <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

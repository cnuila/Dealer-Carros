import React, { useState } from 'react'
import InitialAgreement from './Agregar Venta/InitialAgreement'
import Pasos from "../Utilidades/Pasos"

export default function NuevaVenta(props) {

    const estadoInicial = {
        pasos: [{ texto: "Initial Agreement", selected: true, terminado: false },
        { texto: "Receipt", selected: false, terminado: false },
        { texto: "Docs", selected: false, terminado: false },
        { texto: "Observaciones", selected: false, terminado: false }],
    }

    console.log(props.location.state.carro)

    const [objeto, setObjeto] = useState({ ...estadoInicial })

    const { pasos } = objeto

    const mostrarPasos = pasos.map((paso, index) => {
        return <Pasos key={index + 1} index={index + 1} selected={paso.selected} terminado={paso.terminado} texto={paso.texto} />
    })

    let pasoAmostrar = (<></>)
    if (pasos[0].selected) {
        pasoAmostrar = <InitialAgreement/>
    }
    if (pasos[1].selected) {
        pasoAmostrar = <div>hola</div>
    }
    if (pasos[2].selected) {
        pasoAmostrar = <div>hola</div>
    }
    if (pasos[3].selected) {
        pasoAmostrar = <div>hola</div>
    }

    return (
        <div className="bg-gray-200">
            <div className="shadow-2xl py-7">
                <div className="grid grid-cols-4 relative mx-auto px-3 py-4 max-w-3xl place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">
                    <div className="flex absolute z-0 w-9/12 -mt-7 align-center items-center">
                        <div className="flex-1 w-full rounded-full bg-gray-200 py-0.5"></div>
                    </div>
                    {mostrarPasos}
                </div>
                {pasoAmostrar}
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import InitialAgreement from './Agregar Venta/InitialAgreement'
import Observaciones from './Agregar Venta/Observaciones'
import Pasos from "./Agregar Venta/PasosVenta"

export default function NuevaVenta(props) {

    const estadoInicial = {
        pasos: [{ texto: "Initial Agreement", selected: true, terminado: false },
        { texto: "Receipt", selected: false, terminado: false },
        { texto: "Docs", selected: false, terminado: false },
        { texto: "Observaciones", selected: false, terminado: false }],
        costumer: "",
        address: "",
        phoneNumber: "",
        auto: props.location.state.carro.marca + " " + props.location.state.carro.modelo,
        year: props.location.state.carro.ano,
        vin: props.location.state.carro.id,
        email: "",
        precio: props.location.state.carro.precioFinal,
        nuevoPrecio: props.location.state.carro.precioFinal,
        down: props.location.state.carro.downPayment,
        nuevoDown: props.location.state.carro.downPayment,
        saldo: props.location.state.carro.precioFinal - props.location.state.carro.downPayment,
        payments: 250.00,
        fee: 75.00,
        frecuencia: "14 days",
        socialNumber: "",
        date: new Date().toDateString(),
        taxes: props.location.state.carro.precioFinal * 0.06,
        stickers: 180.00,
        title: 120.00,
        inspection: 120.00,
        fee2: 100.00,
        tagTotal: props.location.state.carro.precioFinal * 0.06 + 180.00 + 120.00 * 2 + 100.00,
    }

    const [objeto, setObjeto] = useState({ ...estadoInicial })

    const traerDatos = ({ name, value }) => {
        let nuevoSaldo = objeto.saldo
        let taxes = objeto.taxes
        let tagTotal = objeto.tagTotal
        if (name === "nuevoPrecio") {
            nuevoSaldo = value - objeto.nuevoDown
            taxes = value * 0.06
            tagTotal = taxes + 180.00 + 120.00 * 2 + 100.00
        }
        if (name === "nuevoDown") {
            nuevoSaldo = objeto.nuevoPrecio - value
        }
        setObjeto({
            ...objeto,
            [name]: value,
            saldo: nuevoSaldo,
            taxes,
            tagTotal,
        })
    }

    const siguienteStep = indexActual => {
        const { pasos } = objeto
        let changeStep = [...pasos]
        changeStep[indexActual].terminado = true
        changeStep[indexActual].selected = false
        changeStep[indexActual + 1].selected = true
        setObjeto({
            ...objeto,
            pasos: changeStep,
        })
    }

    const previoStep = indexActual => {
        const { pasos } = objeto
        let changeStep = [...pasos]
        changeStep[indexActual].selected = false
        changeStep[indexActual].terminado = false
        changeStep[indexActual - 1].selected = true
        setObjeto({
            ...objeto,
            pasos: changeStep,
        })
    }

    const { pasos } = objeto
    const mostrarPasos = pasos.map((paso, index) => {
        return <Pasos key={index + 1} index={index + 1} selected={paso.selected} terminado={paso.terminado} texto={paso.texto} />
    })

    let pasoAmostrar = (<></>)
    if (pasos[0].selected) {
        const { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, down, nuevoDown, saldo, payments, fee, frecuencia, date, taxes, stickers, title, inspection, fee2, tagTotal } = objeto
        let datosInitial = { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, nuevoDown, down, saldo, payments, fee, frecuencia, date, taxes, stickers, title, inspection, fee2, tagTotal }
        pasoAmostrar = <InitialAgreement datosInitial={datosInitial} mandarPadre={traerDatos} siguienteStep={siguienteStep} />
    }
    if (pasos[1].selected) {
        pasoAmostrar = <div>hola</div>
    }
    if (pasos[2].selected) {
        pasoAmostrar = <div>hola</div>
    }
    if (pasos[3].selected) {
        pasoAmostrar = <Observaciones />
    }

    return (
        <div className="bg-gray-200">
            <div className="shadow-2xl py-7">
                <div className="grid grid-cols-4 relative mx-auto lg:mx-28 px-3 py-4 place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">
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

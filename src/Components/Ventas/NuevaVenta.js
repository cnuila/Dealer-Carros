import React, { useState } from 'react'
import moment from 'moment'
import InitialAgreement from './Agregar Venta/InitialAgreement'
import Docs from './Agregar Venta/Docs'
import Pasos from "../Utilidades/Pasos"

export default function NuevaVenta(props) {

    /*const estadoInicial = {
        pasos: [{ texto: "Initial Agreement", selected: true, terminado: false },
        { texto: "Docs y Observaciones", selected: false, terminado: false }],
        millaje: props.location.state.carro.millaje,
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
        taxes: props.location.state.carro.precioFinal * 0.06,
        stickers: 180.00,
        title: 120.00,
        inspection: 120.00,
        fee2: 100.00,
        tagTotal: props.location.state.carro.precioFinal * 0.06 + 180.00 + 120.00 * 2 + 100.00,
        endDate: "MM/DD/YYYY",
        observaciones:"",
    }*/

    const estadoInicial = {
        pasos: [{ texto: "Initial Agreement", selected: false, terminado: true },
        { texto: "Docs y Observaciones", selected: true, terminado: false }],
        millaje: props.location.state.carro.millaje,
        costumer: "DANIEL ENRIQUE HERNANDEZ HERNANDEZ",
        address: "2014 POWHATAN RD HYATTSVILLE MD 20782",
        phoneNumber: "(301) 404-8347",
        auto: props.location.state.carro.marca + " " + props.location.state.carro.modelo,
        year: props.location.state.carro.ano,
        vin: props.location.state.carro.id,
        email: "cnuila14@icloud.com",
        precio: props.location.state.carro.precioFinal,
        nuevoPrecio: 17500,
        down: props.location.state.carro.downPayment,
        nuevoDown: 2000,
        saldo: 17500 - 2000,
        payments: 250.00,
        fee: 75.00,
        frecuencia: "14 days",
        socialNumber: "0801200023837",
        taxes: props.location.state.carro.precioFinal * 0.06,
        stickers: 180.00,
        title: 120.00,
        inspection: 120.00,
        fee2: 100.00,
        tagTotal: props.location.state.carro.precioFinal * 0.06 + 180.00 + 120.00 * 2 + 100.00,
        endDate: "MM/DD/YYYY",
        observaciones: "",
    }

    const [objeto, setObjeto] = useState({ ...estadoInicial })

    const calcularFechaFinal = () => {
        const pagos = calcularPagos()
        return moment(pagos[pagos.length - 1].fechaPago).format("MM/DD/YYYY")
    }

    const calcularPagos = () => {
        //revisar con fee 65 qué pasa
        const { saldo, payments, fee } = objeto
        let saldoActual = saldo
        let subTotal = saldoActual + fee
        let fechaPago = moment(new Date()).add(14, "days")
        let pago = payments
        let totalActual = subTotal - pago
        const pagosIdeales = []
        let cantPagos = 1
        let fechaPagar = new Date(parseInt(fechaPago.format('YYYY')), parseInt(fechaPago.format('MM')) - 1, parseInt(fechaPago.format('D')))
        pagosIdeales.push({
            numPago: cantPagos,
            saldo: saldoActual,
            fee,
            subTotal,
            fechaPago: fechaPagar,
            payment: pago,
            total: totalActual
        })
        while (totalActual !== 0) {
            cantPagos++
            saldoActual = totalActual
            subTotal = saldoActual + fee
            fechaPago.add(14, "days")
            let fechaPagar = new Date(parseInt(fechaPago.format('YYYY')), parseInt(fechaPago.format('MM')) - 1, parseInt(fechaPago.format('D')))
            if (subTotal - pago < 0) {
                totalActual = 0
                pago = subTotal
            } else {
                totalActual = subTotal - pago
            }
            pagosIdeales.push({
                numPago: cantPagos,
                saldo: saldoActual,
                fee,
                subTotal,
                fechaPago: fechaPagar,
                payment: pago,
                total: totalActual
            })
        }
        return pagosIdeales
    }

    const traerDatos = ({ name, value }) => {
        let nuevoSaldo = objeto.saldo
        let taxes = objeto.taxes
        let tagTotal = objeto.tagTotal
        let nuevoDown = objeto.nuevoDown
        if (name === "nuevoPrecio") {
            nuevoSaldo = value - objeto.nuevoDown
            taxes = value * 0.06
            tagTotal = taxes + 180.00 + 120.00 * 2 + 100.00
            nuevoDown = value * 0.2
        }
        if (name === "nuevoDown") {
            nuevoSaldo = objeto.nuevoPrecio - value
            nuevoDown = value
        }
        setObjeto({
            ...objeto,
            [name]: value,
            saldo: nuevoSaldo,
            taxes,
            tagTotal,
            nuevoDown,
        })
    }

    const siguienteStep = indexActual => {
        const { pasos, endDate } = objeto
        let endDateIngresar = endDate
        if (indexActual === 0) {
            endDateIngresar = calcularFechaFinal()
        }
        let changeStep = [...pasos]
        changeStep[indexActual].terminado = true
        changeStep[indexActual].selected = false
        changeStep[indexActual + 1].selected = true
        setObjeto({
            ...objeto,
            pasos: changeStep,
            endDate: endDateIngresar,
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

    const coma = (cantidad) => {
        let cantidadS = cantidad.toString();
        let cont = 0;
        let nuevoS = "";
        if (cantidadS.length > 3) {
            for (let i = cantidadS.length - 1; i >= 0; i--) {
                cont++;
                nuevoS = cantidadS.charAt(i).concat(nuevoS);
                if (cont === 3) {
                    nuevoS = ",".concat(nuevoS);
                    cont = 0;
                }
            }
            if (cantidadS.length % 3 === 0) {
                return nuevoS.substring(1, nuevoS.length);
            }
            return nuevoS;
        }
        return cantidad.toString();
    }

    const guardaVenta = () => {
        const { millaje, costumer, address, phoneNumber, auto, year, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, socialNumber, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones } = objeto


    }

    const { pasos } = objeto
    const mostrarPasos = pasos.map((paso, index) => {
        return <Pasos key={index + 1} index={index + 1} selected={paso.selected} terminado={paso.terminado} texto={paso.texto} />
    })

    let pasoAmostrar = (<></>)
    if (pasos[0].selected) {
        const { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, down, nuevoDown, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate } = objeto
        let datosInitial = { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, nuevoDown, down, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate }
        pasoAmostrar = <InitialAgreement datosInitial={datosInitial} mandarPadre={traerDatos} siguienteStep={siguienteStep} calcularPagos={calcularPagos} calcularFechaFinal={calcularFechaFinal} coma={coma} />
    }
    if (pasos[1].selected) {
        const { millaje, costumer, address, phoneNumber, auto, year, socialNumber, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones } = objeto
        let datosDoc = { millaje, costumer, address, phoneNumber, auto, year, socialNumber, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones }
        pasoAmostrar = <Docs datosDoc={datosDoc} previoStep={previoStep} calcularFechaFinal={calcularFechaFinal} coma={coma} mandarPadre={traerDatos} calcularPagos={calcularPagos} />
    }

    return (
        <div className="bg-gray-20000">
            <div className="shadow-2xl py-7 min-h-screen">
                <div className="grid grid-cols-2 relative mx-auto lg:mx-28 px-3 py-4 place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">
                    <div className="flex absolute z-0 w-1/2 -mt-7 align-center items-center">
                        <div className="flex-1 w-full rounded-full bg-gray-200 py-0.5"></div>
                    </div>
                    {mostrarPasos}
                </div>
                {pasoAmostrar}
            </div>
        </div>
    )
}

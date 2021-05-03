import React, { useState } from 'react'
import moment from 'moment'
import IAPayments from './Agregar Venta/InitialAgreementPayments'
import IATags from './Agregar Venta/InitialAgreementTags'
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
        pasos: [{ texto: "Initial Agreement of Payments", selected: false, terminado: true },
        { texto: "Initial Agreement of Tags", selected: true, terminado: false },
        { texto: "Docs y Observaciones", selected: false, terminado: false }],
        millaje: props.location.state.carro.millaje,
        costumer: "DANIEL ENRIQUE HERNANDEZ HERNANDEZ",
        address: "2014 POWHATAN RD HYATTSVILLE MD 20782",
        phoneNumber: "(301) 404-8347",
        auto: props.location.state.carro.marca + " " + props.location.state.carro.modelo,
        year: props.location.state.carro.ano,
        vin: props.location.state.carro.id,
        codigo: props.location.state.carro.codigo,
        clean: props.location.state.carro.clean,
        email: "cnuila14@icloud.com",
        precio: props.location.state.carro.precioFinal,
        nuevoPrecio: 17000,
        down: props.location.state.carro.downPayment,
        nuevoDown: 2000,
        saldo: 17500 - 2000,
        payments: 250.00,
        fee: 75.00,
        frecuencia14: true,
        socialNumber: "0801200023837",
        taxes: props.location.state.carro.precioFinal * 0.06,
        stickers: 180.00,
        title: 120.00,
        inspection: 120.00,
        fee2: 100.00,
        tagTotal: props.location.state.carro.precioFinal * 0.06 + 180.00 + 120.00 * 2 + 100.00,
        endDate: "MM/DD/YYYY",
        observaciones: "",
        dealDescriptionPayments:"Garantia: motor y transmision unicamente 1 mes o mil millas a partir de la venta. Down payment y/o apartado no es reeembolsable.",
        dealDescriptionTags:`Placas no incluidas en el trato. Deberan ser canceladas dentro de 4 semanas $${props.location.state.carro.precioFinal * 0.06 + 180.00 + 120.00 * 2 + 100.00}, sus sticker de 2 anos seran entregadas 10 dias despues de que hayan sido canceladas. De no cancelarse en el termino establecido cargos aplicaran`,
    }

    const [info, setInfo] = useState({ ...estadoInicial })

    const calcularFechaFinal = () => {
        const pagos = calcularPagos()
        return moment(pagos[pagos.length - 1].fechaPago).format("MM/DD/YYYY")
    }

    const calcularPagos = () => {
        const { saldo, payments, fee } = info
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
        let nuevoSaldo = info.saldo
        let taxes = info.taxes
        let tagTotal = info.tagTotal
        let nuevoDown = info.nuevoDown
        let frecuencia14 = info.frecuencia14
        let fee = info.fee
        let payments = info.payments
        let down = info.down
        let nuevoPrecio = info.nuevoPrecio

        if (name === "nuevoPrecio") {
            nuevoPrecio = parseInt(value)
            nuevoSaldo = value - info.nuevoDown
            taxes = value * 0.06
            tagTotal = taxes + 180.00 + 120.00 * 2 + 100.00
            nuevoDown = value * 0.2
            down = value * 0.2
        }
        if (name === "fee"){
            fee = parseInt(value)
        }
        if (name === "nuevoDown") {
            nuevoSaldo = info.nuevoPrecio - value
            nuevoDown = value
        }
        if (name === "payments") {
            payments = parseInt(value)
        }
        if (name === "frecuency") {
            if (value === "30"){
                frecuencia14 = false
            } else {
                frecuencia14 = true
            }
        }
        setInfo({
            ...info,
            [name]: value,
            saldo: nuevoSaldo,
            taxes,
            tagTotal,
            nuevoDown,
            frecuencia14,
            fee,
            payments,
            down,
            nuevoPrecio,
        })
    }

    const siguienteStep = indexActual => {
        const { pasos, endDate } = info
        let endDateIngresar = endDate
        if (indexActual === 0) {
            endDateIngresar = calcularFechaFinal()
        }
        let changeStep = [...pasos]
        changeStep[indexActual].terminado = true
        changeStep[indexActual].selected = false
        changeStep[indexActual + 1].selected = true
        setInfo({
            ...info,
            pasos: changeStep,
            endDate: endDateIngresar,
        })
    }

    const previoStep = indexActual => {
        const { pasos } = info
        let changeStep = [...pasos]
        changeStep[indexActual].selected = false
        changeStep[indexActual].terminado = false
        changeStep[indexActual - 1].selected = true
        setInfo({
            ...info,
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
        const { millaje, costumer, address, phoneNumber, auto, year, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, socialNumber, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones } = info


    }

    const { pasos } = info
    const mostrarPasos = pasos.map((paso, index) => {
        return <Pasos key={index + 1} index={index + 1} selected={paso.selected} terminado={paso.terminado} texto={paso.texto} />
    })

    let pasoAmostrar = (<></>)
    if (pasos[0].selected) {
        const { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, down, nuevoDown, saldo, payments, fee, frecuencia14, taxes, stickers, title, inspection, fee2, tagTotal, endDate, codigo, clean, millaje, dealDescriptionPayments } = info
        let datosInitial = { costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, nuevoDown, down, saldo, payments, fee, frecuencia14, taxes, stickers, title, inspection, fee2, tagTotal, endDate, codigo, clean, millaje, dealDescriptionPayments }
        pasoAmostrar = <IAPayments datosInitial={datosInitial} mandarPadre={traerDatos} siguienteStep={siguienteStep}/>
    }
    if (pasos[1].selected) {
        const { costumer, address, phoneNumber, auto, year, vin, taxes, stickers, title, inspection, fee2, tagTotal, dealDescriptionTags } = info
        let datosInitialTags = { costumer, address, phoneNumber, auto, year, vin, taxes, stickers, title, inspection, fee2, tagTotal, dealDescriptionTags }
        pasoAmostrar = <IATags datosInitialTags={datosInitialTags} mandarPadre={traerDatos} previoStep={previoStep} siguienteStep={siguienteStep} />
    }
    if (pasos[2].selected) {
        const { millaje, costumer, address, phoneNumber, auto, year, socialNumber, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia14, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones, dealDescriptionPayments, dealDescriptionTags, codigo, clean } = info
        let frecuencia = "30 days"
        if (frecuencia14){
            frecuencia = "14 days"
        }
        let datosDoc = { millaje, costumer, address, phoneNumber, auto, year, socialNumber, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones, dealDescriptionPayments, dealDescriptionTags, codigo, clean }
        pasoAmostrar = <Docs datosDoc={datosDoc} previoStep={previoStep} calcularFechaFinal={calcularFechaFinal} coma={coma} mandarPadre={traerDatos} calcularPagos={calcularPagos} />
    }

    return (
        <div className="bg-gray-20000">
            <div className="shadow-2xl py-7 min-h-screen">
                <div className="grid grid-cols-3 relative mx-auto lg:mx-28 px-3 py-4 place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">
                    <div className="flex absolute z-0 w-2/3 -mt-7 align-center items-center">
                        <div className="flex-1 w-full rounded-full bg-gray-200 py-0.5"></div>
                    </div>
                    {mostrarPasos}
                </div>
                {pasoAmostrar}
            </div>
        </div>
    )
}

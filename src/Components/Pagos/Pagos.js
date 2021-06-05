import React, { useState, useEffect } from 'react'
import { db, storage } from '../../firebase'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment'

function Pagos() {

    const [pagos, setPagos] = useState([])

    useEffect(() => {
        db.collection("pagos").onSnapshot((querySnapshot) => {
            const listaPagos = []
            let venta
            let clientePago
            let carroPago
            querySnapshot.forEach(async (doc) => {
                await db.collection("ventas").doc(doc.data().idVenta).get().then((doc) => {
                    venta = doc.data()
                })
                await db.collection("clientes").doc(venta.cliente).get().then((doc) => {
                    clientePago = doc.data()
                })
                await db.collection("carros").doc(venta.carro).get().then((doc) => {
                    carroPago = doc.data()
                })
                listaPagos.push({ ...doc.data(), id: doc.id, venta, clientePago, carroPago })
            });
            setTimeout(() => {
                setPagos(listaPagos)
            }, 1000)
        })
    }, [])

    const clickPagarPagoNoAplicado = async (pago) => {
        const { value: formValues } = await Swal.fire({
            title: 'Pago Normal',
            text: 'Digite el monto a pagar',
            html:
                '<h1> <b> Cantidad a Pagar </b> </h1>' +
                '<input min="0" type="number" id="cantidad" size="10" value="0" class="swal2-input">' +
                '<h2> <b> Descuento </b> </h2>' +
                '<input min="0" type="number" id="descuento" size="10" value="0" class="swal2-input">',
            focusConfirm: false,
            confirmButtonText: `Realizar Pago`,
            showCancelButton: true,
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                return [
                    document.getElementById('cantidad').value,
                    document.getElementById('descuento').value
                ]
            },
        })
        if (formValues) {
            const cantidad = parseInt(formValues[0])
            const descuento = parseInt(formValues[1])
            if (cantidad === 0) {
                Swal.fire({
                    title: 'venta en 0',
                    text: 'No se puede crear una venta en 0',
                    icon: 'warning',
                })
            } else {
                const fecha = moment(new Date()).format("MM/DD/YYYY")
                let saldo
                db.collection("ventas").doc(pago.idVenta).get().then((doc) => {
                    saldo = doc.data().saldo
                })
                db.collection("ventas").doc(pago.idVenta).update({ saldo: saldo - cantidad - descuento, ultimaFechaPago: fecha, tipo: "normal" }).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Pago realizado',
                        showConfirmButton: true,
                    })
                }).catch((error) => {
                    Swal.fire({
                        title: '¡Ops!',
                        text: error,
                        icon: 'warning'
                    })
                })
            }
        }
    }
    return (
        <div className="bg-gray-100 h-screen" >
            <Navbar componente="pagos"></Navbar>
            <div className="py-6" >
                <div className="flex flex-row w-full">
                    <h1 className="font-bold text-center w-full text-3xl text-gray-800">Pagos</h1>
                </div>
                {pagos.map((pago, index) => {
                    let colorPago = "gray-800"
                    if (pago.tipo === "noAplicado") {
                        colorPago = "yellow-500"
                    }
                    return (
                        <div key={index}>
                            <div className={`md:flex md:flex-row border-l-8 border-${colorPago} p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer`}>
                                <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">{pago.idVenta}</h2>
                                <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">{pago.cantidad}$</h2>
                                <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">{pago.carroPago.marca} {pago.carroPago.modelo} {pago.carroPago.ano}</h2>
                                <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">{pago.clientePago.customer}</h2>
                                <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">{pago.fecha}</h2>
                                <h2 className="hidden text-sm md:block  md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">{pago.cantidad}$</h2>
                                {pago.tipo === "noAplicado" ? (<>
                                    <div>
                                        <button className="bg-green-500 hover:bg-green-800 rounded-xl w-24 h-full text-white text-xs font-semibold focus:outline-none" onClick={() => clickPagarPagoNoAplicado(pago)}>
                                            Pagar
                                        </button>
                                    </div>
                                </>) : (<></>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pagos

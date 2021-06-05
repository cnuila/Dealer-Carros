import React, { useState, useEffect } from 'react'
import { db, storage } from '../../firebase'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment'

export default function Ventas() {

    const [ventas, setVentas] = useState([])

    useEffect(() => {
        db.collection("ventas").onSnapshot((querySnapshot) => {
            const listaVentas = []
            var clienteVenta
            var carroVenta
            querySnapshot.forEach(async (doc) => {
                await db.collection("clientes").doc(doc.data().cliente).get().then((doc) => {
                    clienteVenta = doc.data()
                })
                await db.collection("carros").doc(doc.data().carro).get().then((doc) => {
                    carroVenta = doc.data()
                })
                listaVentas.push({ ...doc.data(), id: doc.id, clienteVenta: clienteVenta, carroVenta: carroVenta })
            });
            console.log(listaVentas)
            setTimeout(() => {
                setVentas(listaVentas)
            }, 600)
        })
    }, [])

    const crearPago = (tipo, idVenta, cantidad, descuento) => {
        const fecha = moment(new Date()).format("MM/DD/YYYY")
        let infoPago = { tipo, cantidad, fecha, idVenta }
        if (descuento > 0) {
            infoPago = { ...infoPago, descuento }
        }
        db.collection("pagos").doc().set(infoPago).then(() => {
            //update de la venta
            const cantidadPorPagar = 0
            db.collection("ventas").doc(idVenta).get().then((doc) => {
                cantidadPorPagar = doc.data().fee
            })
            console.log(cantidadPorPagar)
            //db.collection("ventas").doc(idVenta).update({ faltaPorPagar: cantidadPorPagar - cantidad - descuento, ultimoPago: fecha }).then(() => {
            //    Swal.fire({
            //        icon: 'success',
            //        title: 'Pago realizado',
            //        showConfirmButton: true,
            //    })
            //})

        }).catch(() => {
            Swal.fire({
                title: '¡Ops!',
                text: 'Ocurrió un error, vuelva a intentarlo',
                icon: 'warning'
            })
        })

    }

    const clickPagarVenta = () => {
        Swal.fire({
            title: "Que tipo de pago se va a realizar?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Normal`,
            denyButtonText: `No Aplicado`,
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Pago Normal',
                    text: 'Digite el monto a pagar',
                    input: 'number',
                    inputValue: '0',
                    confirmButtonText: `Realizar Pago`,
                    showDenyButton: true,
                    denyButtonText: `Aplicar Descuento`,
                    denyButtonColor: "#FFB300",
                }).then((result,value) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Pago realizado!',
                            text: 'El pago se realizo correctamente.',
                            icon: 'success',
                            confirmButtonText: `Imprimir Factura`,
                        })
                        console.log("value: ", result.value)
                    } else if (result.isDenied) {
                        Swal.fire({
                            title: 'Aplicando Descuento',
                            text: 'Digite el monto a descontar',
                            input: 'number',
                            inputValue: '0',
                            confirmButtonText: `Aplicar Descuento`,
                        }).then((value2) => {
                            Swal.fire({
                                title: 'Pago realizado!',
                                text: 'El Pago se realizo correctamente.',
                                icon: 'success',
                                confirmButtonText: `Imprimir Factura`,
                            })
                            console.log("value2: ",   value2)
                        })
                    }
                })
            } else if (result.isDenied) {

                Swal.fire({
                    title: 'Pago No Aplicado',
                    text: 'Digite el monto a pagar',
                    input: 'number',
                    inputValue: '0',
                    confirmButtonText: `Realizar Pago`,
                })
            }
        })
    }

    return (
        <div className="bg-gray-100 h-screen" >
            <Navbar componente="ventas"></Navbar>
            <div className="py-6" >

                <div className="flex flex-row w-full">
                    <h1 className="font-bold text-center w-full text-3xl text-gray-800">Ventas</h1>
                </div>

                {ventas.map((venta, index) => {
                    return (
                        <div key={index}>
                            <div className="md:flex md:flex-row border-l-8 border-gray-800 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                                <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">{venta.id}</h2>
                                <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800 capitalize">{venta.carroVenta.marca} {venta.carroVenta.modelo} - {venta.clienteVenta.costumer}</h2>
                                <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left capitalize">{venta.carroVenta.marca} {venta.carroVenta.modelo} {venta.carroVenta.ano}</h2>
                                <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left capitalize">{venta.clienteVenta.costumer}</h2>
                                <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">{venta.fechaVenta}</h2>
                                <div>
                                    <button className="bg-green-500 hover:bg-green-800 rounded-xl w-24 h-full text-white text-xs font-semibold focus:outline-none" onClick={() => clickPagarVenta()}>
                                        Realizar Pago
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

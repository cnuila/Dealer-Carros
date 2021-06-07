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
            
            querySnapshot.forEach(async (doc) => {let clienteVenta
            let carroVenta
                await db.collection("clientes").doc(doc.data().cliente).get().then((doc) => {
                    clienteVenta = doc.data()
                })
                await db.collection("carros").doc(doc.data().carro).get().then((doc) => {
                    carroVenta = doc.data()
                })
                console.log(listaVentas)
                listaVentas.push({ ...doc.data(), id: doc.id, clienteVenta, carroVenta })
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
        console.log(infoPago)
        db.collection("pagos").doc().set(infoPago).then(() => {
            //update de la venta
            let saldo
            db.collection("ventas").doc(idVenta).get().then((doc) => {
                saldo = doc.data().saldo
            })
            db.collection("ventas").doc(idVenta).update({ saldo: saldo - cantidad - descuento, ultimaFechaPago: fecha }).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Pago realizado',
                    showConfirmButton: true,
                })
            })

        }).catch((error) => {
            Swal.fire({
                title: '¡Ops!',
                text: error,
                icon: 'warning'
            })
        })

    }

    const clickPagarVenta = (idVenta) => {
        Swal.fire({
            title: "Que tipo de pago se va a realizar?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Normal`,
            denyButtonText: `No Aplicado`,
        }).then(async (result) => {
            if (result.isConfirmed) {
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
                        console.log("entra")
                        crearPago("normal", idVenta, cantidad, descuento)
                    }
                }
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'Pago No Aplicado',
                    text: 'Digite el monto a pagar',
                    input: 'number',
                    inputValue: '0',
                    confirmButtonText: `Realizar Pago`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        const cantidad = result.value
                        crearPago("noAplicado", idVenta, cantidad, 0)
                    }
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
                                    <button className="bg-green-500 hover:bg-green-800 rounded-xl w-24 h-full text-white text-xs font-semibold focus:outline-none" onClick={() => clickPagarVenta(venta.id)}>
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

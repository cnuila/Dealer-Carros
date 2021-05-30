import React, { useState, useEffect } from 'react'
import { db, storage } from '../../firebase'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Ventas() {

    const [ventas, setVentas] = useState([])

    useEffect(() => {
        db.collection("ventas").onSnapshot((querySnapshot) => {
            const listaVentas = []
            querySnapshot.forEach((doc) => {
                listaVentas.push({ ...doc.data(), id: doc.id })
            });
            setVentas(listaVentas)
        })
    }, [])

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
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Pago realizado!',
                            text: 'El pago se realizo correctamente.',
                            icon: 'success',
                            confirmButtonText: `Imprimir Factura`,
                        })
                    } else if (result.isDenied) {
                        Swal.fire({
                            title: 'Aplicando Descuento',
                            text: 'Digite el monto a descontar',
                            input: 'number',
                            inputValue: '0',
                            confirmButtonText: `Aplicar Descuento`,
                        }).then(() => {
                            Swal.fire({
                                title: 'Pago realizado!',
                                text: 'El Pago se realizo correctamente.',
                                icon: 'success',
                                confirmButtonText: `Imprimir Factura`,
                            })
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
                                <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">{venta.codigo}</h2>
                                <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">{venta.carro.marca} {venta.carro.modelo} - {venta.cliente.nombre}</h2>
                                <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">{venta.carro.marca} {venta.carro.modelo} {venta.carro.ano}</h2>
                                <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">{venta.cliente.nombre}</h2>
                                <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">{venta.fecha}</h2>
                            </div>
                        </div>
                    )
                })}
                <div className="md:flex md:flex-row border-l-8 border-red-700 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">SM-1303</h2>
                    <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">Toyota Tacoma - Carlos Nuila</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Toyota Tacoma 2004</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Carlos Antonio Nuila Salgado</h2>
                    <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">07/Dec/2020</h2>
                    <div>
                        <button className="bg-green-500 hover:bg-green-800 rounded-xl w-24 h-full text-white text-xs font-semibold focus:outline-none" onClick={() => clickPagarVenta()}>
                            Realizar Pago
                        </button>
                    </div>
                </div>
                <div className="md:flex md:flex-row border-l-8 border-yellow-500 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">SM-6969</h2>
                    <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">Dodge Charger - Daniel Agurcia</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Dodge Charger 2016</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Daniel Enrique Agurcia Hernandez</h2>
                    <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">17/Aug/2021</h2>
                    <Link to={{
                        pathname: `/nuevo-pago/${1}`,
                        state: {

                        }
                    }}>
                        <button className="bg-green-500 hover:bg-green-800 rounded-xl w-24 h-full text-white text-xs font-semibold focus:outline-none">
                            Realizar Pago
                        </button>
                    </Link>
                </div>
                <div className="md:flex md:flex-row border-l-8 border-gray-800 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-xs md:text-lg ml-1 pl-3 w-full text-gray-800 md:w-80">SM-2407</h2>
                    <h2 className="md:hidden text-base md:text-lg ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">Tesla Model X - Valentina Hernandez</h2>
                    <h2 className="hidden md:block text-base text-lg ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Tesla Model X 2018</h2>
                    <h2 className="hidden md:block text-base text-lg ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Valentina Emperatriz Hernandez Carbajal</h2>
                    <h2 className="text-sm md:text-lg md:text-right md:pr-4 ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">07/Apr/2021</h2>
                    <Link to={{
                        pathname: `/nuevo-pago/${1}`,
                        state: {

                        }
                    }}>
                        <button className="bg-green-500 hover:bg-green-800 rounded-xl w-24 h-full text-white text-xs font-semibold focus:outline-none">
                            Realizar Pago
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

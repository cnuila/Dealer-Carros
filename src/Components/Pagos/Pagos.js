import React, { useState, useEffect } from 'react'
import { db, storage } from '../../firebase'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';

function Pagos() {

    const [pagos, setPagos] = useState([])

    useEffect(() => {
        db.collection("pagos").onSnapshot((querySnapshot) => {
            const listaPagos = []
            querySnapshot.forEach((doc) => {
                listaPagos.push({ ...doc.data(), id: doc.id })
            });
            setPagos(listaPagos)
        })
    }, [])

    return (
        <div className="bg-gray-100 h-screen" >
            <Navbar componente="pagos"></Navbar>
            <div className="py-6" >
                <div className="flex flex-row w-full">
                    <h1 className="font-bold text-center w-full text-3xl text-gray-800">Pagos</h1>
                </div>
                <div className="md:flex md:flex-row border-l-8 border-green-500 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">SM-1303</h2>
                    <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">250$</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Toyota Tacoma 2004</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Carlos Antonio Nuila Salgado</h2>
                    <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">07/Dec/2020</h2>
                    <h2 className="hidden text-sm md:block  md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">250$</h2>
                </div>
                <div className="md:flex md:flex-row border-l-8 border-yellow-500 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-xs   md:text-lg   ml-1 pl-3 w-full text-gray-800 md:w-80">SM-6969</h2>
                    <h2 className="md:hidden text-base md:text-lg   ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">250$</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Dodge Charger 2016</h2>
                    <h2 className="hidden md:block text-base text-lg   ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Daniel Enrique Agurcia Hernandez</h2>
                    <h2 className="text-sm   md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">17/Aug/2021</h2>
                    <h2 className="hidden text-sm md:block  md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">250$</h2>
                </div>
                <div className="md:flex md:flex-row border-l-8 border-green-500 p-2 cursor-default my-4 mx-8 rounded-md md:rounded-lg bg-white shadow-lg hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-xs md:text-lg ml-1 pl-3 w-full text-gray-800 md:w-80">SM-2407</h2>
                    <h2 className="md:hidden text-base md:text-lg ml-1 font-bold md:font-medium pl-3 w-full text-gray-800">250$</h2>
                    <h2 className="hidden md:block text-base text-lg ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Tesla Model X 2018</h2>
                    <h2 className="hidden md:block text-base text-lg ml-1 font-semibold pl-3 w-full text-gray-800 text-left">Valentina Emperatriz Hernandez Carbajal</h2>
                    <h2 className="text-sm md:text-lg md:text-right md:pr-4 ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">07/Apr/2021</h2>
                    <h2 className="hidden text-sm md:block  md:text-lg md:text-right md:pr-4   ml-1 font-semibold md:font-normal pl-3 w-full text-gray-800 md:w-64">250$</h2>
                </div>
            </div>
        </div>
    )
}

export default Pagos

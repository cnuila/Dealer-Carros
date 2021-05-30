import React, { useState, useEffect } from 'react'
import { db, storage } from '../../firebase'
import Navbar from '../Navbar'
import l1 from '../../Imágenes/license.jpg'



function Clientes() {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        db.collection("clientes").onSnapshot((querySnapshot) => {
            const listaClientes = []
            querySnapshot.forEach((doc) => {
                listaClientes.push({ ...doc.data(), id: doc.id })
            });
            setClientes(listaClientes)
        })
    }, [])

    let fotoCargando = (<div className="relative pb-48 bg-gray-400 h-full w-full rounded-lg shadow-md"></div>)
    let fotoCargada = null

    return (
        <div>
            <Navbar componente="clientes"></Navbar>
            <div className="bg-gray-100 h-screen" >
                <div className="flex flex-row w-full">
                    <h1 className="font-bold text-center w-full text-3xl text-gray-800 py-6">Clientes</h1>
                </div>




                {clientes.map((cliente, index) => {
                    return (
                        <div key={index}>
                            <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                <div className="relative pb-48">
                                    <img
                                        className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                        alt="Carro"
                                        src={l1}
                                    />
                                </div>
                                <div className="relative px-4 -mt-10">
                                    <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                        <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                            Daniel Enrique Agurcia Hernandez
                                        </div>

                                        <div className="text-gray-500 text-sm font-medium mb-2">
                                            1503-1999-02378
                                        </div>

                                        <div className="text-gray-500 text-sm font-medium mb-2">
                                            1201 Leafy Hollow Cir MD
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                })}




                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center mb-10 mx-6 sm:mx-8 pt-2">




                    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div className="relative pb-48">
                            <img
                                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                alt="Carro"
                                src={l1}
                            />
                        </div>
                        <div className="relative px-4 -mt-10">
                            <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                    Daniel Enrique Agurcia Hernandez
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1503-1999-02378
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1201 Leafy Hollow Cir MD
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div className="relative pb-48">
                            <img
                                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                alt="Carro"
                                src={l1}
                            />
                        </div>
                        <div className="relative px-4 -mt-10">
                            <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                    Daniel Enrique Agurcia Hernandez
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1503-1999-02378
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1201 Leafy Hollow Cir MD
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div className="relative pb-48">
                            <img
                                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                alt="Carro"
                                src={l1}
                            />
                        </div>
                        <div className="relative px-4 -mt-10">
                            <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                    Daniel Enrique Agurcia Hernandez
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1503-1999-02378
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1201 Leafy Hollow Cir MD
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div className="relative pb-48">
                            <img
                                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                alt="Carro"
                                src={l1}
                            />
                        </div>
                        <div className="relative px-4 -mt-10">
                            <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                    Daniel Enrique Agurcia Hernandez
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1503-1999-02378
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1201 Leafy Hollow Cir MD
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div className="relative pb-48">
                            <img
                                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                alt="Carro"
                                src={l1}
                            />
                        </div>
                        <div className="relative px-4 -mt-10">
                            <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                    Daniel Enrique Agurcia Hernandez
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1503-1999-02378
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1201 Leafy Hollow Cir MD
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div className="relative pb-48">
                            <img
                                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                alt="Carro"
                                src={l1}
                            />
                        </div>
                        <div className="relative px-4 -mt-10">
                            <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
                                <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
                                    Daniel Enrique Agurcia Hernandez
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1503-1999-02378
                                </div>

                                <div className="text-gray-500 text-sm font-medium mb-2">
                                    1201 Leafy Hollow Cir MD
                                </div>
                            </div>
                        </div>
                    </div>







                </div>
            </div>
        </div>

    )
}

export default Clientes

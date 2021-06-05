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

    return (
        <div>
            <Navbar componente="clientes"></Navbar>
            <div className="bg-gray-100 h-screen" >
                <div className="flex flex-row w-full">
                    <h1 className="font-bold text-center w-full text-3xl text-gray-800 py-6">Clientes</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center mb-10 mx-6 sm:mx-8 pt-2">
                    {clientes.map((cliente, index) => {
                        return (
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
                                            {cliente.costumer}
                                        </div>

                                        <div className="text-yellow-300 text-sm font-medium mb-2">
                                            {cliente.id}
                                        </div>

                                        <div className="text-gray-400 text-sm font-medium mb-2 md:truncate">
                                            {cliente.address}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Clientes

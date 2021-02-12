import React from "react";
import Navbar from './Navbar';
import FotoInv from "../Imágenes/FotoInv.jpg"
import FotoVen from "../Imágenes/FotoVen.jfif"
import FotoPag from "../Imágenes/FotoPag.jpg"
import FotoCli from "../Imágenes/FotoCli.jpg"
import { Link } from "react-router-dom"

export default function Home() {

    let modules = [["inventario", FotoInv], ["ventas", FotoVen], ["pagos", FotoPag], ["clientes", FotoCli]]

    return (

        <div className="bg-gray-100 h-screen">
            <Navbar componente="home" />
            <div className="pt-8 grid grid-cols-1 md:grid-cols-4 place-items-center">
                {
                    modules.map((module, index) => {
                        return (
                            <Link to={`/${module[0]}`}>
                                <div key={index} className="flex flex-wrap content-end relative w-64 h-64 object-cover rounded-lg shadow-2xl transition duration-300 ease-in-out transform hover:scale-95 motion-reduce:transform-none cursor-pointer">
                                    <img
                                        className="absolute h-full w-full object-cover rounded-lg shadow-md"
                                        alt="Modulo"
                                        src={module[1]}
                                    />
                                    <div className="capitalize w-full pb-4 flex justify-center relative text-white text-3xl font-bold">
                                        {module[0]}
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    )


}


import React from "react";
import Navbar from './Navbar';
import FotoInv from "../Imágenes/fotoInv.jpg"

export default function LandingPage() {


    return (

        <div>
            <Navbar compo="LandingPage" />

            <div className="pt-5 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-100 place-items-center mb-10 mt-4 sm:mt-8 mx-6 sm:mx-8">
                <div className="bg-red-500 object-cover">
                    <img alt="Inv" className="transform scale-75 sm:scale-50 opacity-75" src={FotoInv}></img>
                    <div className="bg-blue-500">
                        Inventario
                    </div>
                </div>
                
            </div>

        </div>

    )


}


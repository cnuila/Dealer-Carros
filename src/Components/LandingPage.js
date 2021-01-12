import React from "react";
import Navbar from './Navbar';

export default function LandingPage() {


    return (

        <div>
            <Navbar compo="LandingPage" />

            <div className="border-t-2 border-gray-400 pt-5 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-100 place-items-center mb-10 mt-4 sm:mt-8 mx-6 sm:mx-8 transform transition duration-500 ease-in-out">
                <div className="bg-red-500">
                    aqui ira la foto
                    <div className="bg-blue-500">
                        aqui ira el nombre
                    </div>
                </div>

            </div>

        </div>

    )


}


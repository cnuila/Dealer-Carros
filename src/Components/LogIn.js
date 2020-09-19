import React from 'react'
import logoImg from "../img1.jpeg";
import { Link } from 'react-router-dom';


function LogIn() {


    return (
        <body className="h-screen bg-gray-300">
            <div className="flex items-center justify-center h-full ">
                <div className="flex max-w-sm md:max-w-3xl shadow-2xl border-0">
                    <div className="hidden md:block w-1/2 relative">
                        <img src={logoImg} alt="" className="w-full h-full  object-cover" />
                    </div>
                    <div className="bg-white md:w-1/2 p-8">
                        <h1 className="text-gray-900 text-3xl text-left font-bold">LogIn</h1>
                        <p className="text-gray-600 text-sm  my-4 font-sans">Bienvenido, inicie sesión por favor</p>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-600">
                            <div className="my-3">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre de usuario" />
                            </div>
                            <div class="my-3">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña" />
                            </div>
                            <div class="flex items-center justify-between my-3">
                                <Link to="/">
                                    <button class="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Iniciar sesión
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>

    )
}

export default LogIn


/*<div className="w-full max-w-xs flex content-start">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
</div>*/


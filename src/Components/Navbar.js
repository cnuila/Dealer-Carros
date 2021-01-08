import React from 'react'
import { Link } from 'react-router-dom';
import fb from "../firebase"

export default function Navbar(props) {
    let compo = props.componente

    return (
        <nav className="justify-center flex items-center justify-between flex-wrap bg-gray-900 p-3">
            <div className="flex items-center ml-2 mb-3 lg:ml-0 lg:mb-0 flex-shrink-0 text-white mr-6">
                <span className="font-bold text-4xl tracking-tight pl-10">
                    Santos Motors
            </span>
            </div>
            {compo === "Principal" ?
                <div className="w-2/5 text-left appearance-none focus:outline-none bg-gray-200 rounded-lg">
                    {/*Inicio search bar*/}
                    <input type="text" name="SearchBar" placeholder="Buscar Marca, Modelo, o Proveedor" className="h-7 w-full text-left appearance-none focus:outline-none bg-gray-200 rounded-lg" />
                    {/*Fin search bar*/}
                </div> :
                <div></div>
            }
            <div className="flex items-center">
                <Link to="/agregar">
                    <button className="ml-8 focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-1 px-4 rounded inline-flex items-center">
                        <svg className="w-8 h-8 mr-3 fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.001 488.001">
                            <path
                                className="active-path"
                                d="M462.6 214.404l-39.2-17.9-34.6-55.2c-10-16-27.6-25.7-46.5-25.6H194.9c-17.1 0-33.3 7.9-43.7 21.5l-44.7 58.5-74.5 20.4c-18.9 5.2-32 22.5-32 42.1v28.5c0 24.1 19.2 44 43.3 44h6.4c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h168c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h12c24.1 0 43.3-19.9 43.3-44v-32.5c.1-17.1-9.9-32.7-25.4-39.8zm-359.2 137.7c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm275.5 0c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm65.8-41.4h-10.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1H158.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1h-5c-13.1 0-23.3-10.9-23.3-24v-28.5c-.1-10.7 7-20 17.3-22.9l77.9-21.3c2.1-.6 4-1.8 5.3-3.6l46.6-61.1c6.7-8.6 17-13.6 27.9-13.6h147.4c12-.1 23.3 6 29.6 16.2l36.2 57.8c1 1.7 2.6 3 4.3 3.8l41.8 19.1c8.4 3.9 13.8 12.3 13.7 21.6v32.5h.1c0 13.1-10.2 24-23.3 24z"
                                data-original="#000000" data-old_color="#000000" />
                        </svg>
                        <span>Agregar</span>
                    </button>
                </Link>
                <button onClick={() => fb.auth().signOut()} className="focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="w-6 h-6 mr-2 fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M19 10l-6-5v3H6v4h7v3l6-5zM3 3h8V1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H3V3z" />
                    </svg>
                    <span>Log out</span>
                </button>
            </div>
        </nav>
    )
}

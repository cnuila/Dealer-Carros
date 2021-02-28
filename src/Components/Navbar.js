import React from 'react'
import { Link } from 'react-router-dom';
import fb from "../firebase"
import SearchBar from "./Utilidades/SearchBar"

export default function Navbar(props) {
    let compo = props.componente
    let smg = `/${compo}`
    if (compo === "agregar-carro") {
        smg = "/inventario"
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-3">
            <Link to={smg}>
                <button type="button" className="flex items-center ml-2 mb-3 lg:ml-0 lg:mb-0 flex-shrink-0 text-white mr-6 focus:outline-none" >
                    <span className="font-bold text-4xl tracking-tight pl-10">
                        Santos Motors
            </span>
                </button>
            </Link>
            {compo === "inventario"
                ? <SearchBar mostrarConsulta={props.mostrarConsulta} sugerencias={props.dataSearchBar} />
                : <></>
            }
            <div className="flex items-center">
                {compo === "inventario"
                    ? (<>
                        <Link to="/agregar-carro">
                            <div className="hidden md:block">
                                <button className="focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-1 px-4 rounded inline-flex items-center">
                                    <svg className="w-8 h-8 mr-3 fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.001 488.001">
                                        <path
                                            className="active-path"
                                            d="M462.6 214.404l-39.2-17.9-34.6-55.2c-10-16-27.6-25.7-46.5-25.6H194.9c-17.1 0-33.3 7.9-43.7 21.5l-44.7 58.5-74.5 20.4c-18.9 5.2-32 22.5-32 42.1v28.5c0 24.1 19.2 44 43.3 44h6.4c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h168c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h12c24.1 0 43.3-19.9 43.3-44v-32.5c.1-17.1-9.9-32.7-25.4-39.8zm-359.2 137.7c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm275.5 0c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm65.8-41.4h-10.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1H158.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1h-5c-13.1 0-23.3-10.9-23.3-24v-28.5c-.1-10.7 7-20 17.3-22.9l77.9-21.3c2.1-.6 4-1.8 5.3-3.6l46.6-61.1c6.7-8.6 17-13.6 27.9-13.6h147.4c12-.1 23.3 6 29.6 16.2l36.2 57.8c1 1.7 2.6 3 4.3 3.8l41.8 19.1c8.4 3.9 13.8 12.3 13.7 21.6v32.5h.1c0 13.1-10.2 24-23.3 24z"
                                            data-original="#000000" data-old_color="#000000" />
                                    </svg>
                                    <span>Agregar</span>
                                </button>
                            </div>
                        </Link>
                    </>)
                    : (<></>)}
                <Link to="/home">
                    <button className="focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-6 h-6 mr-2 fill-current text-gray-100" height="511pt" viewBox="0 1 511 511.999" width="511pt" xmlns="http://www.w3.org/2000/svg">
                            <path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0" />
                        </svg>
                        <span>Home</span>
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

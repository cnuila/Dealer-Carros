import React, { useState, useEffect } from 'react'
import { storage } from "../firebase"

function InfoCarro(props) {
    let [foto, setFoto] = useState(null)
    let [loading, setLoading] = useState(true)

    let { fotos } = props.carro

    useEffect(() => {
        //obtener foto del storage
        let gsReference = storage.refFromURL(fotos[0])
        async function descargarFoto() {
            gsReference.getDownloadURL().then(direc => {
                setFoto(direc)
                setLoading(false)
            }).catch((err) => {
                console.log(err)
            })
        }
        descargarFoto()
    })

    const handleClick = (estado) => {
        props.mostrarInfo(estado)
    }

    let fotoCargando = (
        <>
            <div className="animate-pulse col-span-8 rounded-b-none h-64 w-full object-cover rounded-md shadow-md bg-gray-100">
            </div>
        </>
    )
    let fotoCargada = (
        <>
            <div className="rounded-b-none rounded-md col-span-4 h-64 pb-48 bg-black">
                <img
                    className="rounded-b-none rounded-md h-64 w-full object-cover shadow-md"
                    alt="Carro"
                    src={foto}
                />
            </div>
        </>
    )

    return (
        <>
            <div className="absolute overflow-hidden animate__animated animate__zoomIn animate__faster fixed z-40 justify-center items-center flex inset-0 outline-none focus:outline-none bg-opacity-50">

                {/*Container*/}
                <div className="pb-8 pr-3 absolute grid grid-cols-2 bg-gray-900 rounded-md h-80 w-7/12">


                    <button className="col-span-2 top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => handleClick(false)}>
                        <span className="mb-4 mr-2 text-white h-8 w-8 text-4xl block outline-none focus:outline-none">
                            x
                        </span>
                    </button>



                    {/*Imagenes*/}
                    <div className="rounded-md transform -translate-x-24 w-69 h-74 bg-gray-100">
                        {loading ? fotoCargando : fotoCargada}



                        <div class="relative inline-block text-left">
                            <div>
                                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                    Estado
                                     {/*<!-- Heroicon name: chevron-down -->*/}
                                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* <!--
                            Dropdown panel, show/hide based on dropdown state.
                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                           --> */}
                            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Disponible</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Reparacion</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Repo</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Apartado</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Vendido</a>
                                </div>
                            </div>
                        </div>





                    </div>


                    {/*Informacion*/}
                    <div className="h-74 transform w-78 -translate-x-24">
                        <div className="h-20">
                            <h3 className="text-4xl font-semibold text-gray-100">
                                {props.carro.marca} - {props.carro.modelo}
                            </h3>
                        </div>
                        <div className="h-70 overflow-auto ">
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                VIN : {props.carro.id}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Codigo : {props.carro.codigo}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Color : {props.carro.color}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Millaje : {props.carro.millaje}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Año : {props.carro.ano}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Tipo del titulo : {props.carro.clean}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Proveedor : {props.carro.proveedor}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Millaje : {props.carro.millaje}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Estado : {props.carro.estado}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Inspeccionado : {props.carro.inspeccionado}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Titulo a Mano : {props.carro.titulo}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Lien Holder : {props.carro.lienHolder}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Valor de la Compra : {props.carro.valorCompra}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Valor Invertido : {props.carro.valorInvertido}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Valor para Venta : {props.carro.precioFinal}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-black" ></div>
        </>
    );
}
export default InfoCarro;



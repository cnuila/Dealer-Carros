import React, { useState, useEffect } from 'react'
import { storage } from "../firebase"
import Dropdown from './Dropdown'

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



                        <Dropdown />


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



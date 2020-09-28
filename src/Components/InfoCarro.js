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

    let fotoCargando = (<div class="col-span-4 pb-48 bg-gray-400 h-64 rounded-lg shadow-md"></div>)
    let fotoCargada = (
        <>
            <div className=" col-span-4 h-64 bg-black pb-48">
                <img
                    className="rounded-b-none h-64 object-cover rounded-md shadow-md"
                    alt="Carro"
                    src={foto}
                />
            </div>
            <div className="rounded-bl-md p-6 bg-gray-900 text-white">foto</div>
            <div className="p-6 bg-gray-900 text-white">foto</div>
            <div className="p-6 bg-gray-900 text-white">foto</div>
            <div className="rounded-br-md p-6 bg-gray-900 text-white">foto</div>
        </>
    )

    return (
        <>
            <div className="fixed pin z-50 justify-center items-center flex inset-0 outline-none focus:outline-none">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-md fixed absolute animate__animated animate__zoomIn animate__faster relative w-auto my-6 mx-auto max-w-3xl">


                    {/*Container*/}
                    <div className="grid grid-cols-2 border-0 rounded-lg w-auto outline-none focus:outline-none">


                        {/*Imagenes*/}
                        <div className="fixed transform -translate-x-16 relative grid grid-cols-4 bg-transparent w-full px-6 py-4">
                            {loading ? fotoCargando : fotoCargada}
                        </div>


                        {/*Informacion*/}
                        <div className="h-3/5 rounded-l-none rounded-md bg-transparent relative p-6 flex-auto overflow-auto">
                            <button className="top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => handleClick(false)}>
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                            <h3 className="text-3xl font-semibold text-gray-100">
                                {props.carro.marca} - {props.carro.modelo}
                            </h3>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                VIN : {props.carro.id}
                            </p>
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                Codigo : {props.carro.codigo}
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
                        {/*FIN*/}
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-black" ></div>
        </>
    );
}
export default InfoCarro;



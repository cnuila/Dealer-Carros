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
                    <div className="rounded-md transform -translate-x-24 w-69 h-74 bg-gray-700">
                        {loading ? fotoCargando : fotoCargada}
                        <div className="bg-gray-900 h-10 w-3/4 transform -translate-y-5 rounded-md ml-10 flex flex-wrap content-center">
                            <select className="px-6 bg-gray-200 ml-4 rounded-lg h-3/4">
                                <option value="Disponible">
                                    Disponible
                                    </option>
                                <option value="Reparacion">
                                    Reparacion
                                    </option>
                                <option value="Repo">
                                    Repo
                                    </option>
                                <option value="Apartados">
                                    Apartados
                                    </option>
                            </select>
                            <button className="w-8 h-3/4 grid justify-items-center ml-5 mr-2">
                                <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M311.18 78.008L32.23 356.958.613 485.716a21.221 21.221 0 0025.671 25.671l128.759-31.617 278.95-278.95L311.18 78.008zM40.877 471.123l10.871-44.271 33.4 33.4-44.271 10.871zM502.598 86.818L425.182 9.402c-12.536-12.536-32.86-12.536-45.396 0l-30.825 30.825 122.812 122.812 30.825-30.825c12.536-12.535 12.536-32.86 0-45.396z" />
                                </svg>
                            </button>
                            <button className="w-8 h-3/4 grid justify-items-center">
                                <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200 " viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 233.82L299.223.5v139.203h-45.239C113.711 139.703 0 253.414 0 393.687v73.77l20.094-22.02a360.573 360.573 0 01266.324-117.5h12.805v139.204zm0 0" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 ml-12 h-40 w-60">




                            <div className="rounded-md h-20 w-28 object-cover bg-black">
                                <img
                                    className="rounded-md object-cover shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                            <div className="rounded-md h-20 w-28 object-cover bg-black">
                                <img
                                    className="rounded-md object-cover shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                            <div className="rounded-md h-20 w-28 object-cover bg-black">
                                <img
                                    className="rounded-md object-cover shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                            <div className="rounded-md h-20 w-28 object-cover bg-black">
                                <img
                                    className="rounded-md object-cover shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
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



import React, { useState, useEffect } from 'react'
import { storage } from "../../firebase"
import Swal from 'sweetalert2';
import ComboBoxCambiarEstado from './ComboBoxCambiarEstado';
import CarroSinFoto from "../../Imágenes/CarroSinFoto.jpg"

export default function Modifcar(props) {
    const { id, ano, marca, modelo, proveedor, fotos, estado } = props.carro;
    let [foto, setFoto] = useState(null)
    let [loading, setLoading] = useState(true)
    let [modificar, setModificar] = useState(false)
    useEffect(() => {
        //obtener foto del storage
        if (fotos === undefined) {
            function noHayFoto() {
                setFoto(CarroSinFoto)
                setLoading(false)
            }
            noHayFoto()
        } else {
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
        }
    })

    const handleEstadoModal = (estadoModal) => {
        props.mostrarInfo(estadoModal)
    }
    let fotoCargando = (
        <>
            <div className="animate-pulse col-span-8 rounded-b-none h-64 w-full object-cover rounded-md shadow-md bg-gray-100">
            </div>
        </>
    )
    let fotoCargada = (
        <>
            <div className="rounded-b-none rounded-md col-span-4 h-64 bg-black">
                <img
                    className="rounded-b-none rounded-md h-64 w-full object-cover shadow-md"
                    alt="Carro"
                    src={foto}
                />
            </div>
        </>
    )
    const clickGuardarCambios = () => (
            (
                Swal.fire({ title: "Modificado!", icon: "Success", text: "Se modifico el carro con exito." })
            )
    )

    return (
        <>
            <div className="absolute overflow-hidden animate__animated animate__zoomIn animate__faster fixed z-40 justify-center items-center flex inset-0 outline-none focus:outline-none bg-opacity-50">

                {/*Container*/}
                <div className="pb-8 pr-3 absolute grid grid-cols-2 bg-gray-900 rounded-md h-80 w-7/12">
                    <button className="col-span-2 top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => handleEstadoModal(false)}>
                        <span className="mb-4 mr-2 text-white h-8 w-8 text-4xl block outline-none focus:outline-none">
                            x
                        </span>
                    </button>
                    {/*Imagenes*/}
                    <div className="rounded-md transform -translate-x-24 w-69 h-74 bg-gray-800">
                        {loading ? fotoCargando : fotoCargada}
                        <div className="bg-gray-900 h-10 w-3/4 transform -translate-y-5 rounded-md ml-10 flex flex-wrap content-center shadow-2xl">
                            <ComboBoxCambiarEstado carro={props.carro} estados={["Disponible", "Apartado", "Reparacion"]} />
                        </div>
                        <div className="grid grid-cols-2 h-52 w-58 z-0 transform -translate-y-3 pl-11">
                            {/*Aqui ira el map para traer las 4 fotos*/}
                            <div className="rounded-md h-20 w-28 object-cover bg-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <img
                                    className="rounded-md object-cover h-20 w-28 shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                            <div className="rounded-md h-20 w-28 object-cover bg-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <img
                                    className="rounded-md object-cover h-20 w-28 shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                            <div className="rounded-md h-20 w-28 object-cover bg-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <img
                                    className="rounded-md object-cover h-20 w-28 shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                            <div className="rounded-md h-20 w-28 object-cover bg-black transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <img
                                    className="rounded-md object-cover h-20 w-28 shadow-md"
                                    alt="Carro"
                                    src={foto}
                                />
                            </div>
                        </div>
                    </div>










                    {/*Informacion*/}
                    <div className="h-74 w-80 transform -translate-x-32 grid grid-cols-2">
                        <div className="h-11 col-span-2">
                            <div className="flex pb-5 ">
                                <div>
                                    <h3 className="text-5xl font-semibold text-gray-100">
                                        {props.carro.marca}
                                        <input type="text" value={marca} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="marca" placeholder="Ej. Tesla" />
                                    </h3>
                                    <p className="text-md text-gray-300 ml-1 mt-2">
                                        VIN: {props.carro.id}
                                    </p>
                                </div>
                                <h3 className="text-5xl font-semibold text-gray-100 ml-4">
                                    -
                                </h3>
                                <div className="ml-4">
                                    <h3 className="text-5xl font-semibold text-gray-100">
                                        {props.carro.modelo}

                                    </h3>
                                    <p className="text-md text-gray-300 ml-1 mt-2">
                                        Codigo: {props.carro.codigo}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <h2 className="text-gray-100 px-2 font-semibold text-xl underline">
                                General
                            </h2>
                            <div className="ml-2">
                                <p className="text-gray-300 px-2 text-md py-2 grid">
                                    Color: {props.carro.color},{props.carro.estado}
                                </p>
                                <p className="text-gray-300 px-2 text-md py-2">
                                    Millaje: {props.carro.millaje}
                                </p>
                                <p className="text-gray-300 px-2 text-md py-2">
                                    Año: {props.carro.ano}
                                </p>
                                <p className="text-gray-300 px-2 text-md py-2">
                                    Titulo: {props.carro.tipoTitulo}
                                </p>
                            </div>

                        </div>
                        <div className="pt-5">
                            <h6 className="text-gray-100 px-2 font-semibold text-xl underline">
                                Estado
                            </h6>
                            <div className="ml-2">
                                <p className="text-gray-300 px-2  text-md py-2">
                                    Inspeccionado: {props.carro.color}
                                </p>
                                <p className="text-gray-300 px-2  text-md py-2">
                                    Titulo en Mano: {props.carro.millaje}
                                </p>
                                <p className="text-gray-300 px-2  text-md py-2">
                                    Link Holder: {props.carro.ano}
                                </p>
                            </div>

                        </div>
                        <div className="col-span-2">
                            <h6 className="text-gray-100 px-2 font-semibold text-xl underline">
                                Precio
                            </h6>
                            <div className="ml-2">
                                <div className="flex">
                                    <p className="text-gray-300 px-2  text-md py-2 col-span-2">
                                        Compra: {props.carro.color}
                                    </p>
                                    <p className="text-gray-300 px-2  text-md py-2 col-span-2 ml-12">
                                        Venta: {props.carro.millaje}
                                    </p>
                                    <p className="text-gray-300 px-2  text-md py-2 col-span-2 ml-12">
                                        Total Cost: {props.carro.millaje}
                                    </p>
                                </div>
                                <p className="text-gray-300 px-2 text-md py-2">
                                    Down Payment: {props.carro.ano}
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="flex grid justify-items-center col-span-2 ml-60 transform -translate-y-4">
                        <button className="bg-green-400 w-36 h-10" onClick={clickGuardarCambios()}>
                            Guardar
                        </button>
                    </div>


                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-black" ></div>
        </>
    )


}

import React, { useState, useEffect } from 'react'
import { storage } from "../../firebase"
import Swal from 'sweetalert2';
import ComboBoxCambiarEstado from './ComboBoxCambiarEstado';
import ShareCarro from './ShareCarro'
import { db } from '../../firebase'

function InfoCarro(props) {
    const { id, ano, marca, modelo, fotos, estado } = props.carro;
    let [foto, setFoto] = useState(null)
    let [loading, setLoading] = useState(true)

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

    const handleEstadoModal = (estadoModal) => {
        props.mostrarInfo(estadoModal)
    }




    const clickVenderCarro = () => (
        Swal.fire({ title: "Oops!", icon: "warning", text: "Lo sentimos pero esta funcion sigue en desarrollo." })
    )
    const clickEditarCarro = () => (
        Swal.fire({ title: "Oops!", icon: "warning", text: "Lo sentimos pero esta funcion sigue en desarrollo." })
    )
    const clickEliminarCarro = () => (
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Una vez borrado no hay vuelta atras!",
            icon: 'warning',

            background: '#F3F4F6',

            showCancelButton: true,

            confirmButtonColor: '#CC0000',
            confirmButtonText: 'Borrar',

            cancelButtonColor: '#395494',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                var carro = db.collection("carros").doc(id)
                carro.delete().then(function () {
                    Swal.fire(
                        'Eliminado!',
                        'El carro se ha eliminado con exito',
                        'success'
                    )
                    handleEstadoModal(false)
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
            }
        })
    )
    const clickShareCarro = () => (
        Swal.fire({ title: "Oops!", icon: "warning", text: "Lo sentimos pero esta funcion sigue en desarrollo." })
    )

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
                            <ComboBoxCambiarEstado carro={props.carro} />
                            <button className="w-8 h-3/4 grid justify-items-center ml-3 mr-1 " onClick={clickEditarCarro}>
                                <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M311.18 78.008L32.23 356.958.613 485.716a21.221 21.221 0 0025.671 25.671l128.759-31.617 278.95-278.95L311.18 78.008zM40.877 471.123l10.871-44.271 33.4 33.4-44.271 10.871zM502.598 86.818L425.182 9.402c-12.536-12.536-32.86-12.536-45.396 0l-30.825 30.825 122.812 122.812 30.825-30.825c12.536-12.535 12.536-32.86 0-45.396z" />
                                </svg>
                            </button>
                            <button className="w-8 h-3/4 grid justify-items-center mr-1" onClick={clickEliminarCarro}>
                                <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 00-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 00-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" />
                                </svg>
                            </button>
                            <ShareCarro />

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
                                    Lien Holder: {props.carro.ano}
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
                                </div>

                                <p className="text-gray-300 px-2 text-md py-2">
                                    Down Payment: {props.carro.ano}
                                </p>
                            </div>

                        </div>
                    </div>



                    <div className="flex grid justify-items-center col-span-2 ml-60 transform -translate-y-4">
                        <button className="bg-yellow-400 w-36 h-10" onClick={clickVenderCarro}>
                            Vender
                        </button>
                    </div>






                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-black" ></div>
        </>
    );
}
export default InfoCarro;



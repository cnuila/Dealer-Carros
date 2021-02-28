import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { db, storage } from '../../firebase'
import { Link } from 'react-router-dom';
import ComboBoxCambiarEstado from './ComboBoxCambiarEstado'
import CarroSinFoto from "../../Imágenes/CarroSinFoto.jpg"
import ShareCarro from './ShareCarro'
import Modificar from './Modificar'
import Checked from "./Checked"
import { Carousel } from 'react-responsive-carousel';

function InfoCarro(props) {
    const { fotos, id, marca, modelo, proveedor } = props.carro;

    let [modificar, setModificar] = useState(false)
    const [fotosCarro, setFotosCarro] = useState([])
    const [loading, setLoading] = useState(true)
    const [animacion, setAnimacion] = useState("animate__animated animate__zoomIn animate__faster")

    useEffect(() => {
        if (fotos === undefined) {
            setFotosCarro([CarroSinFoto, CarroSinFoto, CarroSinFoto, CarroSinFoto, CarroSinFoto])
            setLoading(false)
        } else {
            async function descargarFoto() {
                let arrayFotos = []
                for (let i = 0; i < fotos.length; i++) {
                    let gsReference = storage.refFromURL(fotos[i])
                    await gsReference.getDownloadURL().then(direc => {
                        arrayFotos.push(direc)
                    }).catch((err) => {
                        console.log(err)
                    })
                }

                setFotosCarro(arrayFotos)

                setLoading(false)
            }
            descargarFoto()
        }
    }, [fotos])

    const handleEstadoModal = (estadoModal) => {
        props.mostrarInfo(estadoModal)
    }

    const clickVenderCarro = () => {
        Swal.fire({ title: "Oops!", icon: "warning", text: "Lo sentimos pero esta funcion sigue en desarrollo." })
    }

    const clickModificarCarro = (estadoModi) => {
        if (animacion !== "") {
            setAnimacion("")
        }
        setModificar(estadoModi)
    }

    const clickEliminarCarro = () => {
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

        }).then(async result => {
            const { dataSearchBar } = props
            if (result.isConfirmed) {

                let carro = db.collection("carros").doc(id)

                await carro.delete().then(() => {
                    //verificar si ya existen en el searchBar
                    let existeMarca = dataSearchBar.filter(dato => dato.valor === marca)
                    let existeProveedor = dataSearchBar.filter(dato => dato.valor === proveedor)
                    let existeModelo = dataSearchBar.filter(dato => dato.valor === modelo)
                    for (let i = 0; i < 3; i++) {
                        let objeto = existeMarca[0]
                        if (i === 1) {
                            objeto = existeProveedor[0]
                        }
                        if (i === 2) {
                            objeto = existeModelo[0]
                        }
                        let cant = objeto.cantidad
                        if (cant === 1) {
                            db.collection("searchBarCarros").doc(objeto.id).delete()
                        } else {
                            db.collection("searchBarCarros").doc(objeto.id).update({
                                cantidad: --cant
                            })
                        }
                    }
                }).then(() => {
                    console.log(fotos)
                    console.log("Aqui inicia a borrar del storage")
                    if (fotos !== undefined) {
                        let deleteRef
                        for (let i = 0; i < fotos.length; i++) {
                            deleteRef = storage.refFromURL(fotos[i]);
                            deleteRef.delete()
                        }
                    }
                    Swal.fire(
                        {
                            title: 'Eliminado!',
                            text: 'El carro se ha eliminado con exito',
                            icon: 'success'
                        }
                    )
                    handleEstadoModal(false)

                }).catch(function (error) {
                    Swal.fire(
                        {
                            icon: "error",
                            title: "Error al Eliminar",
                            text: "Error: " + error
                        }
                    )
                });
            }
        })
    }



    const handleComboBox = (estado) => {
        let arrayEstados = []
        if (estado === "Disponible") {
            arrayEstados = ["Disponible", "Apartado", "Reparacion"]
        } else if (estado === "Reparacion") {
            arrayEstados = ["Reparacion", "Disponible"]
        } else if (estado === "Repo") {
            arrayEstados = ["Repo", "Disponible", "Reparacion", "Apartado"]
        } else if (estado === "Apartado") {
            arrayEstados = ["Apartado", "Disponible"]
        } else if (estado === "Vendido") {
            arrayEstados = ["Vendido", "Disponible", "Reparacion", "Repo"]
        }
        return arrayEstados
    }


    const handleClickFoto = (index) => {
        let nuevoArray = [fotosCarro[index]]
        let filtrados = fotosCarro.filter((valor, ind) => index !== ind)
        setFotosCarro([...nuevoArray, ...filtrados])
    }

    let tipoTitulo
    let tituloClean
    if (typeof (props.carro.salvage) !== "undefined") {
        if (props.carro.salvage !== false) {
            tipoTitulo = "Salvage"
            tituloClean = false
        }
    }
    if (typeof (props.carro.clean) !== "undefined") {
        if (props.carro.clean !== false) {
            tipoTitulo = "Clean"
            tituloClean = true
        }
    }

    if (modificar) {
        let colorSelected = ""
        if (props.carro.color === "Azul") {
            colorSelected = "#0047CB"
        } else if (props.carro.color === "Amarillo") {
            colorSelected = "#FBFF00"
        } else if (props.carro.color === "Blanco") {
            colorSelected = "#FFFFFF"
        } else if (props.carro.color === "Negro") {
            colorSelected = "#000000"
        } else if (props.carro.color === "Gris") {
            colorSelected = "#777777"
        } else if (props.carro.color === "Plateado") {
            colorSelected = "#C0C0C0"
        } else if (props.carro.color === "Rojo") {
            colorSelected = "#FF0000"
        } else {
            colorSelected = "#FF8A65"
        }

        return (
            <Modificar carro={props.carro} estadoModi={clickModificarCarro} estadoModal={handleEstadoModal} tituloClean={tituloClean} color={colorSelected} imagenes={fotosCarro} estadosCombo={handleComboBox} />
        );
    } else {
        return (
            <>
                <div className={`overflow-hidden ${animacion} fixed z-40 justify-center items-center flex inset-0 outline-none focus:outline-none bg-opacity-50`}>

                    {/*Container Grande*/}
                    <div className="hidden md:block pb-8 pr-3 absolute md:grid md:grid-cols-2 bg-gray-900 rounded-md h-80 w-2/3">

                        <button className="col-span-2 top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => handleEstadoModal(false)}>
                            <span className="mb-4 mr-2 text-white h-8 w-8 text-4xl block outline-none focus:outline-none">
                                x
                        </span>
                        </button>
                        {/*Imagenes*/}
                        <div className="rounded-md transform -translate-x-24 w-69 h-74 bg-gray-800">

                            {loading
                                ? <div key={0} className={`bg-gray-400 animate-pulse rounded-b-none h-64 w-full object-cover rounded-md shadow-md`}></div>
                                : <div key={0}>
                                    <img
                                        className={`rounded-b-none rounded-md h-64 w-full object-cover shadow-md`}
                                        alt="Carro"
                                        src={fotosCarro[0]}
                                    />
                                </div>}

                            <div className="bg-gray-900 h-10 w-3/4 transform -translate-y-5 rounded-md ml-10 flex flex-wrap content-center shadow-2xl">
                                <ComboBoxCambiarEstado carro={props.carro} estados={handleComboBox(props.carro.estado)} estadoModal={handleEstadoModal} />
                                <button type="button" className="w-8 h-3/4 grid justify-items-center ml-3 mr-1 focus:outline-none" onClick={() => clickModificarCarro(true)}>
                                    <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M311.18 78.008L32.23 356.958.613 485.716a21.221 21.221 0 0025.671 25.671l128.759-31.617 278.95-278.95L311.18 78.008zM40.877 471.123l10.871-44.271 33.4 33.4-44.271 10.871zM502.598 86.818L425.182 9.402c-12.536-12.536-32.86-12.536-45.396 0l-30.825 30.825 122.812 122.812 30.825-30.825c12.536-12.535 12.536-32.86 0-45.396z" />
                                    </svg>
                                </button>
                                <button type="button" className="w-8 h-3/4 grid justify-items-center mr-1 focus:outline-none outline-none" onClick={clickEliminarCarro}>
                                    <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 00-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 00-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" />
                                    </svg>
                                </button>
                                <ShareCarro />

                            </div>

                            <div className="grid grid-cols-2 h-52 w-58 z-0 transform -translate-y-3 pl-11">
                                {/*Aqui ira el map para traer las 4 fotos*/}
                                {loading
                                    ? ([1, 2, 3, 4].map((valor) => {
                                        return <div key={valor} className="bg-gray-400 animate-pulse h-20 w-28 object-cover rounded-md shadow-md"></div>
                                    }))
                                    : fotosCarro.map((foto, index) => {
                                        if (index !== 0) {
                                            return (
                                                <div key={index} >
                                                    <img
                                                        onClick={() => handleClickFoto(index)}
                                                        className="rounded-md h-20 w-28 transition duration-300 ease-in-out transform hover:scale-105 object-cover shadow-md"
                                                        alt="Carro"
                                                        src={foto}
                                                    />
                                                </div>)
                                        }
                                        return null
                                    })}
                            </div>

                        </div>



                        {/*Informacion*/}
                        <div className="h-74 w-80 transform -translate-x-28 grid grid-cols-2">
                            <div className="h-11 col-span-2">
                                <div className="flex pb-5 ">
                                    <div>
                                        <h3 className="text-5xl capitalize font-semibold text-gray-100">
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
                                        <h3 className="text-5xl capitalize font-semibold text-gray-100">
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
                                        Color: {props.carro.color}
                                    </p>
                                    <p className="text-gray-300 px-2 text-md py-2">
                                        Millaje: {props.carro.millaje}
                                    </p>
                                    <p className="text-gray-300 px-2 text-md py-2">
                                        Año: {props.carro.ano}
                                    </p>
                                    <p className="text-gray-300 px-2 text-md py-2 capitalize">
                                        Proveedor: {props.carro.proveedor}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-5">
                                <h6 className="text-gray-100 px-2 font-semibold text-xl underline">
                                    Estado
                            </h6>
                                <div className="ml-2">
                                    <div className="flex ">
                                        <p className="text-gray-300 px-2  text-md py-2">
                                            Inspeccionado
                                        </p>
                                        <Checked valor={props.carro.inspeccionado} />
                                    </div>
                                    <div className="flex">
                                        <p className="text-gray-300 px-2  text-md py-2">
                                            Titulo en Mano
                                    </p>
                                        <Checked valor={props.carro.titulo} />
                                    </div>
                                    <div className="flex">
                                        <p className="text-gray-300 px-2  text-md py-2">
                                            Link Holder
                                    </p>
                                        <Checked valor={props.carro.linkHolder} />
                                    </div>
                                    <p className="text-gray-300 px-2 text-md py-2">
                                        Titulo: {tipoTitulo}
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
                                            Valor Compra: {props.carro.valorCompra}
                                        </p>
                                        <p className="text-gray-300 px-2  text-md py-2 col-span-2 ml-8">
                                            Valor Invertido: {props.carro.valorInvertido}
                                        </p>
                                        <p className="text-gray-300 px-2  text-md py-2 col-span-2 ml-8">
                                            Precio Final: {props.carro.precioFinal}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-gray-300 px-2 text-md py-2">
                                            Down Payment: {props.carro.downPayment}
                                        </p>
                                        <p className="text-gray-300 px-2  text-md py-2 col-span-2 ml-8">
                                            Total Cost: {props.carro.valorInvertido + props.carro.valorCompra}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {props.carro.estado === "Disponible" ? (<>
                            <div className="grid justify-items-center col-span-2 ml-60 transform -translate-y-4">
                                <Link to={{
                                    pathname: `/nueva-ventas/${id}`,
                                    state: {
                                        carro: {
                                            id: props.carro.id,
                                            ano: props.carro.ano,
                                            marca: props.carro.marca,
                                            modelo: props.carro.modelo,
                                            precioFinal: props.carro.precioFinal,
                                            downPayment: props.carro.downPayment,
                                            millaje: props.carro.millaje,
                                        }
                                    }
                                }}>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 rounded-xl w-36 h-10 text-gray-900 font-semibold focus:outline-none">
                                        Vender
                                    </button>
                                </Link>
                            </div>
                        </>) : (<></>)}

                    </div>
                    {/*Container Movil*/}
                    {/*<div className="absolute bg-gray-900 rounded-md w-2/3 h-80 ">
                        <button className="col-span-2 top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => handleEstadoModal(false)}>
                            <span className="mb-4 mr-2 text-white h-8 w-8 text-3xl block outline-none focus:outline-none">
                                x
                            </span>
                        </button>
                        <div className="h-64 w-64 object-cover bg-green-400">
                        </div>
                            </div>*/}
                </div>
                <div className="opacity-50 fixed inset-0 z-10 bg-black" ></div>
            </>
        );
    }

}
export default InfoCarro;


/**/



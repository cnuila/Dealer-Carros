import React, { useState, useEffect } from 'react'
import { storage } from "../../firebase"
import Swal from 'sweetalert2';
import ComboBoxCambiarEstado from './ComboBoxCambiarEstado';
import CarroSinFoto from "../../Imágenes/CarroSinFoto.jpg"
import Checkbox from '../Utilidades/Checkbox'
import ColorPicker from "../Utilidades/ColorPicker"
import { db } from '../../firebase'

export default function Modificar(props) {
    const { id, fotos, marca, modelo, codigo, proveedor, ano, millaje, valorCompra, valorInvertido, precioFinal, downPayment, inspeccionado, titulo, linkHolder, } = props.carro;

    const estadoInicial = {
        marca,
        modelo,
        codigo,
        color: props.color,
        proveedor,
        ano,
        millaje,
        inspeccionado,
        titulo,
        linkHolder,
        tituloClean: props.tipoTitulo,
        valorCompra,
        valorInvertido,
        precioFinal,
        downPayment,
    }

    const [foto, setFoto] = useState(null)
    const [loading, setLoading] = useState(true)
    const [objeto, setObjeto] = useState(...[estadoInicial])

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
    }, [fotos])


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

    const handleInputChange = ({ target }) => {

        const { name, type } = target
        let insertarObjeto = {}
        if (type === "checkbox") {
            insertarObjeto = { [name]: target.checked }
        } else {
            insertarObjeto = { [name]: target.value }
        }
        setObjeto({ ...objeto, ...insertarObjeto })
        console.log(insertarObjeto)
        console.log(objeto)
    }


    const clickGuardarCambios = async () => {
        if (objeto.color === "transparent") {
            Swal.fire(
                '¡Ops!',
                'No puedes dejar campos vacios, escoge un color',
                'warning'
            )
        } else {
            let carro = { id, marca: objeto.marca.toLowerCase(), modelo: objeto.modelo.toLowerCase(), codigo: objeto.codigo, proveedor: objeto.proveedor.toLowerCase(), ano: objeto.ano, millaje: objeto.millaje, valorCompra: objeto.valorCompra, valorInvertido: objeto.valorInvertido, precioFinal: objeto.precioFinal, downPayment: (objeto.precioFinal) * 0.2, }
            let colorCarro = "Rojo"
            if (objeto.color === "#0047cb") {
                colorCarro = "Azul"
            }
            if (objeto.color === "#fbff00") {
                colorCarro = "Amarillo"
            }
            if (objeto.color === "#ffffff") {
                colorCarro = "Blanco"
            }
            if (objeto.color === "#000000") {
                colorCarro = "Negro"
            }
            if (objeto.color === "#777777") {
                colorCarro = "Gris"
            }
            if (objeto.color === "#c0c0c0") {
                colorCarro = "Plateado"
            }
            if (objeto.color === "#ff8a65") {
                colorCarro = "Otro"
            }
            carro = { ...carro, color: colorCarro }

            if (objeto.inspeccionado) {
                carro = { ...carro, inspeccionado: objeto.inspeccionado }
            }
            if (objeto.titulo) {
                carro = { ...carro, titulo: objeto.titulo }
            }
            if (objeto.linkHolder) {
                carro = { ...carro, linkHolder: objeto.linkHolder }
            } if (objeto.tituloClean) {
                carro = { ...carro, clean: true }
            } else {
                carro = { ...carro, salvage: true }
            }

            if (props.imagenes.length !== 0) {
                let dirFotos = []
                let storageRef = storage.ref();
                let i = 0
                //guarda las fotos y guarda la direccion en un array
                while (i <= 4) {
                    try {
                        let carroRef = storageRef.child(`${id}/${props.imagenes[i].name}`);
                        carroRef.put(props.imagenes[i])
                        dirFotos.push(carroRef.toString())
                        i++
                    } catch (err) {
                        alert(err)
                    }
                }
                carro = { ...carro, fotos: dirFotos }
            }

            db.collection("carros").doc(id).set(carro).then(() => {
                Swal.fire({
                    title: "Modificado!",
                    icon: "Success",
                    text: "Se modifico el carro con exito."
                })
                props.estadoModi(false)
                props.estadoModal(false)
            }).catch(function (error) {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: "No se pudo modificar el carro. Error: " + error
                })
            });
            console.log("PASOOO")
            console.log(carro)
        }


    }


    return (
        <>
            <div className="absolute overflow-hidden fixed z-40 justify-center items-center flex inset-0 outline-none focus:outline-none bg-opacity-50">

                {/*Container*/}
                <div className="pb-8 pr-3 absolute grid grid-cols-2 bg-gray-900 rounded-md h-80 w-7/12">
                    <button type="button" className="col-span-2 top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => props.estadoModal(false)}>
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
                                    <input type="text" value={objeto.marca} className="block text-xl font-semibold text-gray-100 bg-gray-900 px-2 py-2 w-3/5 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="marca" placeholder={marca} onChange={handleInputChange} required />
                                    <p className="text-md text-gray-300 ml-1 mt-2">
                                        VIN: {props.carro.id}
                                    </p>
                                </div>

                                <div className="ml-4">
                                    <input type="text" value={objeto.modelo} className="block text-xl font-semibold text-gray-100 bg-gray-900 px-2 py-2 w-3/5 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="modelo" placeholder={modelo} onChange={handleInputChange} required />
                                    <p className="flex text-md text-gray-300 ml-1 mt-2 m-1">
                                        Codigo: <input type="text" value={objeto.codigo} className="block text-md text-gray-300 bg-gray-900 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="codigo" placeholder={codigo} onChange={handleInputChange} required />
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
                                    Color:
                                </p>
                                <div className="ml-6">
                                    <ColorPicker width={300} circleSize={20} color={objeto.color} handleInputChange={handleInputChange} />
                                </div>

                                <p className="flex text-gray-300 px-2 text-md py-2">
                                    Millaje: <input type="text" value={objeto.millaje} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="millaje" placeholder={props.carro.millaje} onChange={handleInputChange} required />
                                </p>
                                <p className="flex text-gray-300 px-2 text-md py-2">
                                    Año: <input type="text" value={objeto.ano} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="ano" placeholder={props.carro.ano} onChange={handleInputChange} required />
                                </p>
                                <p className="flex text-gray-300 px-2 text-md py-2">
                                    Proveedor: <input type="text" value={objeto.proveedor} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="proveedor" placeholder={props.carro.proveedor} onChange={handleInputChange} required />
                                </p>
                            </div>

                        </div>
                        <div className="pt-5">
                            <h6 className="text-gray-100 px-2 font-semibold text-xl underline">
                                Estado
                            </h6>
                            <div className="ml-2">
                                <div className="flex items-center">
                                    <p className="flex text-gray-300 px-2 text-md py-2 mr-1">
                                        Inspeccionado
                                    </p>
                                    <Checkbox nombre="inspeccionado" checked={objeto.inspeccionado} handleInputChange={handleInputChange} />
                                </div>
                                <div className="flex items-center">
                                    <p className="flex text-gray-300 px-2 text-md py-2">
                                        Titulo en Mano
                                    </p>
                                    <Checkbox nombre="titulo" checked={objeto.titulo} handleInputChange={handleInputChange} />
                                </div>
                                <div className="flex items-center">
                                    <p className="flex text-gray-300 px-2 text-md py-2">
                                        Link Holder
                                    </p>
                                    <Checkbox nombre="linkHolder" checked={objeto.linkHolder} handleInputChange={handleInputChange} />
                                </div>
                                <div className="flex items-center">
                                    <p className="flex text-gray-300 px-2 text-md py-2">
                                        Titulo Clean
                                    </p>
                                    <Checkbox nombre="tituloClean" checked={objeto.tituloClean} handleInputChange={handleInputChange} />
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2">
                            <h6 className="text-gray-100 px-2 font-semibold text-xl underline">
                                Precio
                            </h6>
                            <div className="ml-2">
                                <div className="flex">
                                    <p className="flex text-gray-300 px-2  text-md py-2">
                                        Valor Compra: <input type="text" value={objeto.valorCompra} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="valorCompra" placeholder={props.carro.valorCompra} onChange={handleInputChange} required />
                                    </p>
                                    <p className="flex text-gray-300 px-2  text-md py-2">
                                        Precio Final: <input type="text" value={objeto.precioFinal} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="precioFinal" placeholder={props.carro.precioFinal} onChange={handleInputChange} required />
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="flex text-gray-300 px-2 text-md py-2">
                                        Valor Invertido: <input type="text" value={objeto.valorInvertido} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="valorInvertido" placeholder={props.carro.valorInvertido} onChange={handleInputChange} required />
                                    </p>
                                    <p className="flex text-gray-300 px-2 text-md py-2">
                                        Down Payment: <input type="text" value={objeto.downPayment} className="block text-md text-gray-300 bg-gray-900 ml-2 px-2 w-1/2 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="downPayment" placeholder={props.carro.downPayment} onChange={handleInputChange} required />
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="flex grid justify-items-center col-span-2 ml-60 transform -translate-y-4">
                        <button type="button" className="bg-green-400 w-36 h-10" onClick={clickGuardarCambios}>
                            Guardar
                        </button>
                    </div>


                </div>

            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-black"  ></div>
        </>
    )


}

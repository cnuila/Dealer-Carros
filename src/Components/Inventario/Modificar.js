import React, { useState } from 'react'
import Swal from 'sweetalert2';
import ComboBoxCambiarEstado from './ComboBoxCambiarEstado';
import Checkbox from '../Utilidades/Checkbox'
import ColorPicker from "../Utilidades/ColorPicker"
import { db } from '../../firebase'

export default function Modificar(props) {

    const { fotos, estado, id, marca, modelo, codigo, proveedor, ano, millaje, valorCompra, valorInvertido, precioFinal, downPayment, inspeccionado, titulo, linkHolder } = props.carro;
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
        tituloClean: props.tituloClean,
        valorCompra,
        valorInvertido,
        precioFinal,
        downPayment,
        fotos,
    }
    const [fotosCarro, setFotosCarro] = useState(props.imagenes)
    const [objeto, setObjeto] = useState(...[estadoInicial])

    const handleClickFoto = (index) => {
        let nuevoArray = [fotosCarro[index]]
        let filtrados = fotosCarro.filter((valor, ind) => index !== ind)
        setFotosCarro([...nuevoArray, ...filtrados])
    }

    const handleInputChange = ({ target }) => {
        const { name, type } = target
        let insertarObjeto = {}
        if (type === "checkbox") {
            insertarObjeto = { [name]: target.checked }
        } else if (target.name === "marca" || target.name === "modelo" || target.name === "proveedor" || target.name === "codigo" || target.name === "color") {
            insertarObjeto = { [name]: target.value }
        } else {
            insertarObjeto = { [name]: parseInt(target.value, 10) }
        }
        setObjeto({ ...objeto, ...insertarObjeto })
    }

    const clickGuardarCambios = async () => {

        if (objeto.color === "transparent") {
            Swal.fire(
                '¡Ops!',
                'No puedes dejar campos vacios, escoge un color',
                'warning'
            )
        } else {
            let carro = { estado, id, marca: objeto.marca.toLowerCase(), modelo: objeto.modelo.toLowerCase(), codigo: objeto.codigo, proveedor: objeto.proveedor.toLowerCase(), ano: objeto.ano, millaje: objeto.millaje, valorCompra: objeto.valorCompra, valorInvertido: objeto.valorInvertido, precioFinal: objeto.precioFinal, downPayment: objeto.downPayment, }
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
            console.log(fotos)
            if (fotos !== undefined) {
                carro = { ...carro, fotos: fotos }
            }

            db.collection("carros").doc(id).set(carro).then(() => {
                if (modelo !== objeto.modelo || marca !== objeto.marca || proveedor !== objeto.proveedor) {

                    let datosSearchBar = []
                    db.collection("searchBarCarros").get().then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            datosSearchBar.push({ ...doc.data(), id: doc.id })
                        })
                    });

                    let existeModelo = datosSearchBar.filter(dato => dato.valor === objeto.modelo)
                    let existeMarca = datosSearchBar.filter(dato => dato.valor === objeto.marca)
                    let existeProveedor = datosSearchBar.filter(dato => dato.valor === objeto.proveedor)

                    let existeMarcaAntigua = datosSearchBar.filter(dato => dato.valor === marca)
                    let existeProveedorAntiguo = datosSearchBar.filter(dato => dato.valor === proveedor)
                    let existeModeloAntiguo = datosSearchBar.filter(dato => dato.valor === modelo)

                    let arreglo = []
                    let tipo = ""
                    let valor = ""
                    let objeto = ""
                    let flag = false

                    for (let i = 0; i < 3; i++) {
                        if (i === 0 && modelo !== objeto.modelo) {
                            objeto = existeModeloAntiguo[0]
                            arreglo = existeModelo
                            tipo = "modelo"
                            valor = carro.modelo
                            flag = true
                        } else if (i === 1 && marca !== objeto.marca) {
                            objeto = existeMarcaAntigua[0]
                            arreglo = existeMarca
                            tipo = "marca"
                            valor = carro.marca
                            flag = true
                        } else if (i === 2 && proveedor !== objeto.proveedor) {
                            objeto = existeProveedorAntiguo[0]
                            arreglo = existeProveedor
                            tipo = "proveedor"
                            valor = carro.proveedor
                            flag = true
                        }

                        if (flag) {
                            //si ya existe incrementa la cantidad si no crea uno nuevo 
                            if (arreglo.length === 1) {
                                let { id, cantidad } = arreglo[0]
                                let cant = cantidad + 1
                                db.collection("searchBarCarros").doc(id).update({
                                    cantidad: cant
                                })
                            } else {
                                db.collection("searchBarCarros").add({
                                    tipo: tipo,
                                    valor: valor,
                                    cantidad: 1
                                })
                            }
                            let cant = objeto.cantidad
                            if (cant === 1) {
                                db.collection("searchBarCarros").doc(objeto.id).delete()
                            } else {
                                db.collection("searchBarCarros").doc(objeto.id).update({
                                    cantidad: --cant
                                })
                            }
                            flag = false
                        }

                    }


                }

                Swal.fire({
                    title: "Modificado!",
                    icon: "success",
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

        }


    }


    return (
        <>
            <div className="overflow-hidden fixed z-40 justify-center items-center flex inset-0 outline-none focus:outline-none bg-opacity-50">

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

                        <div key={0}>
                            <img
                                className={`rounded-b-none rounded-md h-64 w-full object-cover shadow-md`}
                                alt="Carro"
                                src={fotosCarro[0]}
                            />
                        </div>

                        <div className="bg-gray-900 h-10 w-3/4 transform -translate-y-5 rounded-md ml-10 flex flex-wrap content-center shadow-2xl">
                            <ComboBoxCambiarEstado carro={props.carro} estados={props.estadosCombo(estado)} estadoModal={props.estadoModal} />
                            <button type="button" className="w-8 h-3/4 grid justify-items-center ml-3 mr-1 focus:outline-none" onClick={() => props.estadoModi(false)}>
                                <svg className="mt-1 h-6 w-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M492 236H68.442l70.164-69.824c7.829-7.792 7.859-20.455.067-28.284-7.792-7.83-20.456-7.859-28.285-.068l-104.504 104-.018.019c-7.809 7.792-7.834 20.496-.002 28.314l.018.019 104.504 104c7.828 7.79 20.492 7.763 28.285-.068 7.792-7.829 7.762-20.492-.067-28.284L68.442 276H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 h-52 w-58 z-0 transform -translate-y-3 pl-11">
                            {/*Aqui ira el map para traer las 4 fotos*/}
                            {fotosCarro.map((foto, index) => {
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

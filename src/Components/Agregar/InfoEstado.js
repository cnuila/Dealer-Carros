import React from 'react'

export default function InfoEstado(props) {

    const { estado, inspeccionado, titulo, linkHolder, salvage, clean } = props

    const handleOnSubmit = e => {
        e.preventDefault()
        props.siguienteStep(1)
    }

    const inputOnChange = ({ target }) => {
        const { name, value } = target
        let insertarObjeto = {}
        if (name === "estado") {
            insertarObjeto = { estado: value }
        }
        if (name === "inspeccionado" && value === "si") {
            insertarObjeto = { inspeccionado: true }
        } else {
            if (name === "inspeccionado" && value === "no") {
                insertarObjeto = { inspeccionado: false }
            }
        }
        if (name === "titulo" && value === "si") {
            insertarObjeto = { titulo: true }
        } else {
            if (name === "titulo" && value === "no") {
                insertarObjeto = { titulo: false }
            }
        }
        if (name === "linkHolder" && value === "si") {
            insertarObjeto = { linkHolder: true }
        } else {
            if (name === "linkHolder" && value === "no") {
                insertarObjeto = { linkHolder: false }
            }
        }
        if (name === "tipoTitulo") {
            if (value === "salvage") {
                insertarObjeto = { salvage: true, clean: false }
            } else {
                insertarObjeto = { clean: true, salvage: false }
            }
        }
        props.mandarObjeto(insertarObjeto)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-2 gap-10 bg-green-00 p-3">
                    <div className="col-span-2 px-8 pt-5 ">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Estado Actual</h2>
                        <div className="grid grid-cols-3 mt-2 pl-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="disponible" name="estado" value="Disponible" onChange={inputOnChange} checked={estado === "Disponible"} required />
                                <label htmlFor="disponible" className="text-gray-300 ml-2">Disponible</label>
                            </div>
                            <div>
                                <input type="radio" id="apartado" className="ml-4 my-1" name="estado" value="Apartado" onChange={inputOnChange} checked={estado === "Apartado"} />
                                <label htmlFor="apartado" className="text-gray-300 ml-2">Apartado</label>
                            </div>
                            <div>                                
                                <input type="radio" id="trade" className="ml-4 my-1" name="estado" value="Trade" onChange={inputOnChange} checked={estado === "Trade"} />
                                <label htmlFor="trade" className="text-gray-300 ml-2">Trade</label>
                            </div>
                            <div>                                
                                <input type="radio" id="repo" className="ml-4 my-1" name="estado" value="Repo" onChange={inputOnChange} checked={estado === "Repo"}/>
                                <label htmlFor="repo" className="text-gray-300 ml-2">Repo</label>
                            </div>
                            <div>
                                <input type="radio" id="devuelto" className="ml-4 my-1" name="estado" value="Devuelto" onChange={inputOnChange} checked={estado === "Devuelto"}/>
                                <label htmlFor="devuelto" className="text-gray-300 ml-2">Devuelto</label>
                            </div>
                            <div>
                                <input type="radio" id="reparacion" className="ml-4 my-1" name="estado" value="Reparacion" onChange={inputOnChange} checked={estado === "Reparacion"} />
                                <label htmlFor="reparacion" className="text-gray-300 ml-2">Reparación</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5 border-r-2 border-gray-800">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Inspeccionado</h2>
                        <div className="grid grid-cols-2 mt-2 pl-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="siInsp" name="inspeccionado" value="si" onChange={inputOnChange} required checked={inspeccionado} />
                                <label htmlFor="siInsp" className="text-gray-300 ml-2">Sí</label>
                            </div>
                            <div>
                                <input type="radio" id="noInsp" className="my-1" name="inspeccionado" value="no" onChange={inputOnChange} checked={!inspeccionado} />
                                <label htmlFor="noInsp" className="text-gray-300 ml-2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5" >
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Titulo</h2>
                        <div className="grid grid-cols-2 mt-2 ml-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="siTit" name="titulo" value="si" onChange={inputOnChange} required checked={titulo} />
                                <label htmlFor="siTit" className="text-gray-300 ml-2">Sí</label>
                            </div>
                            <div>
                                <input type="radio" id="noTit" className="my-1" name="titulo" value="no" onChange={inputOnChange} checked={!titulo} />
                                <label htmlFor="noTit" className="text-gray-300 ml-2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5 border-r-2 border-gray-800">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Link Holder</h2>
                        <div className="grid grid-cols-2 mt-2 ml-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="siLink" name="linkHolder" value="si" onChange={inputOnChange} required checked={linkHolder}/>
                                <label htmlFor="siLink" className="text-gray-300 ml-2">Sí</label>
                            </div>
                            <div>
                                <input type="radio" id="noLien" className="my-1" name="linkHolder" value="no" onChange={inputOnChange} checked={!linkHolder} />
                                <label htmlFor="noLink" className="text-gray-300 ml-2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Tipo Título</h2>
                        <div className="grid grid-cols-2 mt-2 ml-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="salvage" name="tipoTitulo" value="salvage" onChange={inputOnChange} required checked={salvage} />
                                <label htmlFor="salvage" className="text-gray-300 ml-1">Salvage</label>
                            </div>
                            <div>
                                <input type="radio" id="clean" className="my-1" name="tipoTitulo" value="clean" onChange={inputOnChange} checked={clean} />
                                <label htmlFor="clean" className="text-gray-300 ml-2">Clean</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-2 px-7 mt-6">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-8/12 items-center place-self-start shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => props.previoStep(1)}>
                            Anterior
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-8/12 items-center place-self-end shadow-lg cursor-pointer">
                        <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

import React from 'react'
import Checkbox from '../../Utilidades/Checkbox'

export default function InfoEstado(props) {

    const { estado, inspeccionado, titulo, linkHolder, salvage, clean } = props

    const handleOnSubmit = e => {
        e.preventDefault()
        props.siguienteStep(1)
    }

    const inputOnChange = ({ target }) => {
        const { name, type } = target
        let insertarObjeto = {}
        if (type === "checkbox"){
            insertarObjeto = { [name]: target.checked}        
        } else {            
            if (name === "tipoTitulo") {
                if (target.value === "salvage") {
                    insertarObjeto = { salvage: true, clean: false }
                } else {
                    insertarObjeto = { clean: true, salvage: false }
                }
            } else {
                insertarObjeto = { [name]: target.value }
            }
        }    
        props.mandarObjeto(insertarObjeto)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-2 gap-10 mb-3 p-3">
                    <div className="col-span-2 px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Estado Actual</h2>
                        <div className="grid grid-cols-2 mt-2 pl-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="disponible" name="estado" value="Disponible" onChange={inputOnChange} checked={estado === "Disponible"} required />
                                <label htmlFor="disponible" className="text-gray-200 ml-2">Disponible</label>
                            </div>
                            <div>
                                <input type="radio" id="apartado" className="ml-4 my-1" name="estado" value="Apartado" onChange={inputOnChange} checked={estado === "Apartado"} />
                                <label htmlFor="apartado" className="text-gray-200 ml-2">Apartado</label>
                            </div>
                            <div>                                
                                <input type="radio" id="repo" className="ml-4 my-1" name="estado" value="Repo" onChange={inputOnChange} checked={estado === "Repo"}/>
                                <label htmlFor="repo" className="text-gray-200 ml-2">Repo</label>
                            </div>
                            <div>
                                <input type="radio" id="reparacion" className="ml-4 my-1" name="estado" value="Reparacion" onChange={inputOnChange} checked={estado === "Reparacion"} />
                                <label htmlFor="reparacion" className="text-gray-200 ml-2">Reparación</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-8 py-2 border-r-2 border-gray-800">
                        <div className="grid grid-cols-2 mt-2 pl-3 text-gray-200 text-lg font-semibold underline">
                            <Checkbox texto="Título" nombre="titulo" handleInputChange={inputOnChange} checked={titulo} />
                        </div>
                    </div>
                    <div className="px-8 py-2">
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
                    <div className="px-8 py-4 border-r-2 border-gray-800">
                        <div className="grid grid-cols-2 mt-2 pl-3 text-gray-200 text-lg font-semibold underline">
                            <Checkbox texto="Link Holder" nombre="linkHolder" handleInputChange={inputOnChange} checked={linkHolder} />
                        </div>
                    </div>
                    <div className="px-8 py-4">
                        <div className="grid grid-cols-2 mt-2 pl-3 text-gray-200 text-lg font-semibold underline">
                            <Checkbox texto="Inspeccionado" nombre="inspeccionado" handleInputChange={inputOnChange} checked={inspeccionado} />
                        </div>
                    </div>                    

                </div>
                <div className="grid grid-cols-2 px-7 mt-6 pt-0.5">
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

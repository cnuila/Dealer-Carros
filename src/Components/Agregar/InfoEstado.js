import React from 'react'

export default function InfoEstado(props) {




    return (
        <form >
            <div className="flex flex-col h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-2 gap-10 bg-green-00 p-3">
                    <div className="col-span-2 px-8 pt-5 ">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg">Estado Actual</h2>
                        <div className="grid grid-cols-3 mt-2 pl-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="disponible" name="estado" value="Disponible" required/>
                                <label htmlFor="disponible" className="text-gray-300 ml-2">Disponible</label>
                            </div>
                            <div>
                                <input type="radio" id="apartado" className="ml-4 my-1" name="estado" value="Apartado"/>
                                <label htmlFor="apartado" className="text-gray-300 ml-2">Apartado</label>
                            </div>
                            <div>
                                <input type="radio" id="trade" className="ml-4 my-1" name="estado" value="Trade"/>
                                <label htmlFor="trade" className="text-gray-300 ml-2">Trade</label>
                            </div>
                            <div>
                                <input type="radio" id="repo" className="ml-4 my-1" name="estado" value="Repo"/>
                                <label htmlFor="repo" className="text-gray-300 ml-2">Repo</label>
                            </div>
                            <div>
                                <input type="radio" id="devuelto" className="ml-4 my-1" name="estado" value="Devuelto"/>
                                <label htmlFor="devuelto" className="text-gray-300 ml-2">Devuelto</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5 border-r-2 border-gray-800">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg">Inspeccionado</h2>
                        <div className="grid grid-cols-2 mt-2 pl-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="siInsp" name="inspeccionado" value="si" />
                                <label htmlFor="siInsp" className="text-gray-300 ml-2">Sí</label>
                            </div>
                            <div>
                                <input type="radio" id="noInsp" className="my-1" name="inspeccionado" value="no" />
                                <label htmlFor="noInsp" className="text-gray-300 ml-2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5" >
                        <h2 className="text-gray-200 px-2 font-semibold text-lg">Titulo</h2>
                        <div className="grid grid-cols-2 mt-2 ml-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="siTit" name="titulo" value="si" />
                                <label htmlFor="siTit" className="text-gray-300 ml-2">Sí</label>
                            </div>
                            <div>
                                <input type="radio" id="noTit" className="my-1" name="titulo" value="no" />
                                <label htmlFor="noTit" className="text-gray-300 ml-2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5 border-r-2 border-gray-800">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg">Lien Holder</h2>
                        <div className="grid grid-cols-2 mt-2 ml-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="siLien" name="lienHolder" value="si" />
                                <label htmlFor="siLien" className="text-gray-300 ml-2">Sí</label>
                            </div>
                            <div>
                                <input type="radio" id="noLien" className="my-1" name="lienHolder" value="no" />
                                <label htmlFor="noLien" className="text-gray-300 ml-2">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg">Tipo Título</h2>
                        <div className="grid grid-cols-2 mt-2 ml-3">
                            <div>
                                <input type="radio" className="ml-4 my-1" id="salvage" name="tipoTitulo" value="salvage" />
                                <label htmlFor="salvage" className="text-gray-300 ml-1">Salvage</label>
                            </div>
                            <div>
                                <input type="radio" id="clean" className="my-1" name="tipoTitulo" value="clean" />
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
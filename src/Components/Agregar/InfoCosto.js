import React from 'react'

export default function InfoCosto(props) {

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        props.siguienteStep(2)
    }

    const { precioFinal, valorCompra, valorInvertido } = props

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                <div className="grid grid-rows-3 place-items-center gap-6 my-2">
                    <div className="m-4">
                        <h2 className="text-white font-semibold text-lg text-center underline">Valor de Compra</h2>
                        <input type="number" value={valorCompra} className="bg-gray-900 text-gray-200 text-center w-11/12 px-2 my-2 mx-3 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" min={1} name="valorCompra" placeholder="Ej. 2300" onChange={handleInputChange} required />
                    </div>
                    <div className="m-4">
                        <h2 className="text-white font-semibold text-lg text-center underline">Valor Invertido</h2>
                        <input type="number" value={valorInvertido} className="bg-gray-900 text-gray-200 text-center w-11/12 px-2 my-2 mx-3 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" min={1} name="valorInvertido" placeholder="Ej. 500" onChange={handleInputChange} required />
                    </div>
                    <div className="m-4">
                        <h2 className="text-white font-semibold text-lg text-center underline">Precio Final</h2>
                        <input type="number" value={precioFinal} className="bg-gray-900 text-gray-200 text-center w-11/12 px-2 my-2 mx-3 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" min={1} name="precioFinal" placeholder="Ej. 4000" onChange={handleInputChange} required />
                    </div>
                </div>
                <div className="grid grid-cols-2 px-7 mt-5 py-0.5">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-8/12 items-center place-self-start shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => props.previoStep(2)}>
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

import React from 'react'

export default function InfoEstado() {
    return (
        <form >
            <div className="flex flex-col h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 p-3">

                    <div className="block px-8 pt-5">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg">VIN</h2>
                        <input type="text" value={20} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="vin" placeholder="Ej. P21CS" required />
                    </div>

                    
                </div>
                <div className="grid place-items-end pt-1 px-5">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-4/12 items-center shadow-lg cursor-pointer">
                        <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

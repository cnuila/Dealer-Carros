import React from 'react'

export default function InfoGeneral() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-72 bg-gray-900 max-w-3xl mx-2 lg:mx-auto rounded-b-lg shadow-2xl">

            <div className="flex flex-row bg-gray-900 mx-9 my-3 text-white focus-within:text-gray-400">
                <input className="block bg-gray-900 text-sm font-semibold border-b-2 placeholder-white focus:placeholder-gray-400 border-gray-900 focus:border-gray-400 py-1 pt-4 mr-3 mb-2 w-11/12 focus:outline-none" name="vin" type="text" placeholder="21PCS" required />
            </div>

            <label class="block p-5">
                <h2 className="text-gray-200">VIN</h2>
                <input type="text" class="block bg-gray-900 font-semibold border-b-2 placeholder-gray-200 focus:placeholder-gray-300 py-2 w-11/12 focus:outline-none" placeholder="P21CS"/>
            </label>

                <div className="px-10 py-3">
                    <h2 className="text-md font-semibold text-gray-200">VIN</h2>
                    <div className="flex border-b-2 border-gray-800">
                        <input className="bg-gray-900 text-white px-3 placeholder-gray-400 text-sm w-11/12 focus:outline-none" type="text" name="vin" placeholder="P21CS" required />
                    </div>
                </div>
                {/*Modelo*/}
                <div className="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
                    <h2 className="text-md font-bold p-0 ">Marca</h2>
                    <input type="text" name="Marca" placeholder="" className="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
                </div>
                {/*vin*/}
                <div className="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
                    <h2 className="text-md font-bold p-0 ">Modelo</h2>
                    <input type="text" name="Modelo" placeholder=" " className="block w-full text-center appearance-none focus:outline-none bg-transparent" />
                </div>
                {/*Millaje*/}
                <div className="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
                    <h2 className="text-md font-bold p-0 ">Millaje</h2>
                    <input type="text" name="Millaje" placeholder="" className="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
                </div>
                {/*Codigo*/}
                <div className="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
                    <h2 className="text-md font-bold p-0 ">Codigo</h2>
                    <input type="text" name="Codigo" placeholder="" className="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
                </div>
                {/*Proveedor*/}
                <div className="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
                    <h2 className="text-md font-bold p-0 ">Proveedor</h2>
                    <input type="text" name="Proveedor" placeholder="" className="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
                </div>
                {/*ano*/}

                <div className="relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
                    <h2 className="text-md font-bold p-0 ">Año</h2>
                    <input type="number" min="1990" max="2021" name="Ano" placeholder="" className="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
                </div>
                <div className=" relative max-w-sm mx-auto w-2/3 md:w-3/5 focus-within:border-blue-800 md:p-3">
                    <h2 className="text-lg font-bold p-0">Color</h2>

                </div>
        </div>
    )
}

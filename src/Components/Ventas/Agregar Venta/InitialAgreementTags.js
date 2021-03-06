import React from 'react'

export default function InitialAgreementTags(props) {

    const { costumer, address, phoneNumber, auto, year, vin, taxes, stickers, title, inspection, fee2, tagTotal, dealDescriptionTags } = props.datosInitialTags

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        props.siguienteStep(1)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col bg-gray-900 mx-auto lg:mx-28 rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 p-3">
                    <div className="flex flex-col">
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Costumer</h2>
                            <input type="text" value={costumer} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="costumer" placeholder="Ej. John Doe" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Address</h2>
                            <textarea rows={4} value={address} name="address" className="block bg-gray-900 text-gray-200 ml-4 px-2 py-3 mt-1 w-11/12 resize-none border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" placeholder="Ej. 10412 GUILFORD RD" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Cell</h2>
                            <input type="text" value={phoneNumber} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="phoneNumber" placeholder="Ej. (999)999-9999" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Auto</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{auto}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Year</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{year}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">VIN</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{vin}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Taxes</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{taxes}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Stickers</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{stickers}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Title</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{title}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Inspection</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{inspection}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Fee</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{fee2}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Tag Total</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{tagTotal}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="block col-span-4 px-3 mt-4 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Deal Description</h2>
                            <textarea rows={14} name="dealDescriptionPayments" value={dealDescriptionTags} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-3 mt-1 w-11/12 resize-none border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" placeholder="Ej. Garantía" onChange={handleInputChange} required />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end place-items-end space-x-4 py-4 px-7">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-2/12 items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => props.previoStep(1)}>
                            Anterior
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-2/12 items-center shadow-lg cursor-pointer">
                        <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

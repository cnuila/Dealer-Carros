import React from 'react'
import jsPDF from "jspdf"
import moment from 'moment'

export default function Docs(props) {

    const { costumer, address, phoneNumber } = props

    const imprimirFinancial = () => {
        let doc = new jsPDF();
        doc.setProperties({
            title: 'Financial Agreement',
            author: 'Santos Motors Group',
        });
        let width = doc.internal.pageSize.getWidth()

        //encabezado
        doc.setFontSize(25)
        doc.setFont("Times", "bold")
        doc.text("S.M.G. SANTOS MOTOR GROUP", width / 2, 20, "center")
        doc.setFontSize(13)
        doc.text("10412 GUILFORD RD", width / 2, 30, "center")
        doc.setFontSize(13)
        doc.text("MD 20794", width / 2, 37, "center")
        doc.setFontSize(19)
        doc.text("FINANCIAL AGREEMENT", width / 2, 50, "center")
        doc.setFontSize(14)
        doc.text(moment(new Date()).format("dddd, MMMM DD, YYYY"), 170, 65, "center")

        //datos cliente
        

        doc.output('dataurlnewwindow');
    }

    const handleOnSubmit = () => {

    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col bg-gray-900 mx-auto lg:mx-28 h-screen rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 p-5">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-10/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirFinancial()}>
                            Imprimir Financial Agreement
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-10/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" >
                            Imprimir Right of Repossession
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-10/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" >
                            Imprimir Credit Application
                        </button>
                    </div>
                    <div className="block col-span-3 px-3 mt-4 pt-3">
                        <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Observaciones</h2>
                        <textarea rows={7} name="observaciones" className="block bg-gray-900 text-lg text-gray-200 ml-4 px-2 py-3 mt-1 w-11/12 resize-none border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" placeholder="Ej. 10412 GUILFORD RD"/>
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
                            Vender
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

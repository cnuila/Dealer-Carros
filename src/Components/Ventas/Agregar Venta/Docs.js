import React from 'react'
import jsPDF from "jspdf"
import moment from 'moment'

export default function Docs(props) {

    const { costumer, address, phoneNumber, saldo, payments, fee, endDate, year, vin, auto, observaciones } = props.datosDoc

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
        doc.setFontSize(13)
        doc.text(moment(new Date()).format("dddd, MMMM DD, YYYY"), 170, 65, "center")

        //datos cliente
        doc.setFontSize(12)
        doc.text(15, 75, "Name:")
        doc.text(40, 75, costumer.toUpperCase())
        doc.text(15, 82, "Address:")
        doc.text(40, 82, address.toUpperCase())
        doc.text(15, 89, "Telephone:")
        doc.text(40, 89, phoneNumber)

        //contrato
        doc.setFontSize(12)
        doc.setFont("Times", "Roman")
        let text = "FOR VALUE RECEIVED, the undersigned jointly and severally promise to pay, order of Santos Motor\r"
            + "the sum of                                                   $" + props.coma(saldo) + ".00 (  Thousend  Houndred )\r"
            + "such amount shall be paid as follows:        $" + props.coma(payments - fee) + ".00 each 14 days with an additional Fee of\r"
            + "$" + props.coma(fee) + ".00  every two weeks and must be paid in full on " + endDate

        doc.text(15, 110, text)

        text = "If in the event that I miss one payment , my vehicle      " + year + "      " + auto.toUpperCase() + "\r"
            + "Vin#     " + vin + "     will be reposes and I will be responsible for all cost of reposition."

        doc.text(15, 140, text)

        text = "I will still be responsible for this loan in the event that I may declare personal bankruptcy. I am\r"
            + "aware that this loan cannot be included in any personal or business entity under my name. My \r"
            + "signature represents total agreement with the above reference and I am aware that this \r"
            + "document can be used in a court of law."

        doc.text(15, 160, text)

        //firmaa

        doc.setLineWidth(0.5)
        doc.line(30, 220, 90, 220)
        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text(costumer.toUpperCase(), 60, 225, "center")

        doc.setLineWidth(0.5)
        doc.line(115, 220, 175, 220)
        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text("S.M.G. SANTOS MOTOR GROUP", 145, 225, "center")

        doc.output('dataurlnewwindow');
    }

    const imprimirRepo = () => {
        let doc = new jsPDF();
        doc.setProperties({
            title: 'Right Of Repossession',
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
        doc.text("RIGHT OF REPOSSESSION", width / 2, 50, "center")
        doc.setFontSize(12)
        doc.text(moment(new Date()).format("dddd, MMMM DD, YYYY"), 55, 65, "center")

        //datos carro
        doc.setFontSize(12)
        doc.text(15, 80, "Make/Model")
        doc.setFont("Times", "Roman")
        doc.text(40, 80, auto.toUpperCase())
        doc.setFont("Times", "bold")
        doc.text(120, 80, "Year")
        doc.setFont("Times", "Roman")
        doc.text(132, 80, year + "")
        doc.setFont("Times", "bold")
        doc.text(150, 80, "Vin#")
        doc.setFont("Times", "Roman")
        doc.text(160, 80, vin)

        //contrato
        doc.setFontSize(11)
        doc.setFont("Times", "Roman")
        let text = "I hereby agree that if I fail to make any payment or any part of the payment on my loan from Santos Motor, \r"
            + "LLC, then you are authorized by me and have the right to take the above vehicle mentioned back from me \r"
            + "without the necessity of a court order or any judicial process. I further agree that if it becomes necessary for \r"
            + "Santos Motor, LLC to take the vehicle back, you are permitted to do so at any time of the day or night and may \r"
            + "enter and remove the vehicle from my property or any other property where I may have left the vehicle."

        doc.text(15, 95, text)

        text = "I also give you permission to use any reasonable means to open or gain entry into the vehicle without causing \r"
            + "any undue damage in the process of taking it back."

        doc.text(15, 123, text)

        text = "I understand that should it become necessary for Santos Motors, LLC to take back the vehicle, I will redeem the \r"
            + "same amount owed by making the full payment to you. This payment will also include the fee for taking back \r"
            + "the vehicle."

        doc.text(15, 140, text)

        text = "I agree that Santos Motor, LLC recommends not keeping any personal property of any great value in the vehicle \r"
            + "during the term of this loan. But if I decide to do so, I assume any and all responsibility for any personal \r"
            + "property left in the vehicle by me or by any other person should that property be lost or missing for any reason \r"
            + "from the vehicle after it has been taken back by Santos Motor LLC  and stored in a reasonably safe place."

        doc.text(15, 160, text)

        text = "I agree that it is not required for Santos Motor, LLC to give me any notice before the vehicle is repossessed. My \r"
            + "failure to make any payment/s on time according to my loan contract will be my notice and Santos Motor LLC \r"
            + "has the right to take back the vehicle."

        doc.text(15, 185, text)

        text = "I understand that I have the right to have this agreement examined by my attorney if I desire before I sign it."

        doc.text(15, 205, text)

        text = "Given under our/my hand and sealed on          " + moment(new Date()).format("dddd, MMMM DD, YYYY")

        doc.text(15, 215, text)

        //firmaa

        doc.setLineWidth(0.5)
        doc.line(30, 250, 90, 250)
        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text(costumer.toUpperCase(), 60, 255, "center")

        doc.setLineWidth(0.5)
        doc.line(115, 250, 175, 250)
        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text("S.M.G. SANTOS MOTOR GROUP", 145, 255, "center")

        doc.output('dataurlnewwindow');
    }

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const handleOnSubmit = () => {

    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col bg-gray-900 mx-auto lg:mx-28 rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 p-5">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-10/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirFinancial()}>
                            Imprimir Financial Agreement
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-10/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirRepo()}>
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
                        <textarea rows={7} name="observaciones" value={observaciones} className="block bg-gray-900 text-lg text-gray-200 ml-4 px-2 py-3 mt-1 w-11/12 resize-none border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" placeholder="Ej. 10412 GUILFORD RD" onChange={handleInputChange} />
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

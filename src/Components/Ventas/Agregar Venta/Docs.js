import React from 'react'
import jsPDF from "jspdf"
import moment from 'moment'
import SantosLogo from "../../../Imágenes/SantosMotorsLogo.jpg"

export default function Docs(props) {

    const { millaje, costumer, address, phoneNumber, auto, year, socialNumber, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones } = props.datosDoc

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

    const imprimirInitial = () => {
        let doc = new jsPDF();
        doc.setProperties({
            title: 'Initial Agreement And Schedule Of Payments',
            author: 'Santos Motors Group',
        });
        let width = doc.internal.pageSize.getWidth()

        //encabezado
        doc.addImage(SantosLogo, 'JPG', width / 2 - 45, 5, 90, 40)
        doc.setFontSize(20)
        doc.setFont("times", "bold")
        doc.text("S.M.G. SANTOS MOTOR GROUP", width / 2, 53, "center")
        doc.setFontSize(10)
        doc.text("EMAIL sandsllc8@gmail.com", width / 2, 58, "center")
        doc.setFontSize(13)
        doc.text("10412 GUILFORD RD", width / 2, 64, "center")
        doc.setFontSize(13)
        doc.text("MD 20794", width / 2, 70, "center")

        //cuerpo
        doc.setFontSize(17)
        doc.text("INITIAL  AGREEMENT AND SCHEDULE OF PAYMENTS", width / 2, 85, "center")

        //primer Columna
        let y = 97
        for (let i = 0; i < 7; i++) {
            let campo = "Cell"
            let text = phoneNumber
            let fontSizeText = 12
            if (i === 0) {
                campo = "Costumer"
                text = costumer
                fontSizeText = 8
            }
            if (i === 2) {
                campo = "Auto"
                text = auto.toUpperCase()
            }
            if (i === 3) {
                campo = "Year"
                text = year + ""
            }
            if (i === 4) {
                campo = "VIN"
                text = vin
            }
            if (i === 5) {
                campo = "Email"
                text = email
            }
            if (i === 6) {
                campo = "Address"
                let addressFormat = ""
                let cont = 0;
                for (let j = 0; j < address.length; j++) {
                    addressFormat += address[j]
                    cont++
                    if (cont > 15 && address[j] === " ") {
                        addressFormat += "\r"
                        cont = 0
                    }
                }
                text = addressFormat.toUpperCase()
            }
            doc.setFontSize(12)
            doc.setFont("times", "bold")
            doc.text(12, y, campo)
            doc.setFontSize(fontSizeText)
            doc.setFont("times", "normal")
            doc.text(32, y, text);
            y += 7
        }

        //segunda Columna
        y = 97
        for (let i = 0; i < 8; i++) {
            let campo = "Down"
            let text = "$" + props.coma(nuevoDown) + ".00"
            if (i === 0) {
                campo = "Precio"
                text = "$" + props.coma(nuevoPrecio) + ".00"
            }
            if (i === 2) {
                campo = "Saldo"
                text = "$" + props.coma(saldo) + ".00"
            }
            if (i === 3) {
                campo = "Payments"
                text = "$" + props.coma(payments) + ".00"
            }
            if (i === 4) {
                campo = "Fee"
                text = "$" + props.coma(fee) + ".00"
            }
            if (i === 5) {
                campo = "Frequency"
                text = frecuencia
            }
            if (i === 6) {
                campo = "Date"
                text = moment(new Date()).format("MM/DD/YYYY")
            }
            if (i === 7) {
                campo = "SS #"
                text = socialNumber
            }
            doc.setFontSize(12)
            doc.setFont("times", "bold")
            doc.text(100, y, campo)
            doc.setFontSize(12)
            doc.setFont("times", "normal")
            doc.text(122, y, text);
            y += 7
        }

        //tercera Columna
        y = 97
        for (let i = 0; i < 7; i++) {
            let campo = "Stickers"
            let text = "$" + props.coma(stickers) + ".00"
            if (i === 0) {
                campo = "Taxes"
                text = "$" + props.coma(taxes) + ".00"
            }
            if (i === 2) {
                campo = "Title"
                text = "$" + props.coma(title) + ".00"
            }
            if (i === 3) {
                campo = "Inspection"
                text = "$" + props.coma(inspection) + ".00"
            }
            if (i === 4) {
                campo = "Fee"
                text = "$" + props.coma(fee2) + ".00"
            }
            if (i === 5) {
                campo = "Tag Total"
                text = "$" + props.coma(tagTotal) + ".00"
            }
            if (i === 6) {
                campo = "End Date"
                text = endDate
            }
            doc.setFontSize(12)
            doc.setFont("times", "bold")
            doc.text(158, y, campo)
            doc.setFontSize(12)
            doc.setFont("times", "normal")
            doc.text(180, y, text);
            y += 7
        }

        let texto = ("Deal  Description : PLACAS NO INCLUIDAS EN EL TRATO. DEBERAN SER\r" +
            `CANCELADAS DENTRO DE  4 SEMANAS ${"$" + props.coma(tagTotal) + ".00"}\n\r` +
            "GARANTIA : MOTOR Y TRANSMISION UNICAMENTE 1 MES A PARTIR\r" +
            "DE LA VENTA.\n\r" +
            `Millaje actual: ${millaje}`)

        doc.setFontSize(10)
        doc.setFont("times", "bold")
        doc.text(12, 167, texto)

        //firma

        doc.setLineWidth(0.5)
        doc.line(140, 190, 200, 190)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text(costumer, 170, 195, "center")

        //pagos
        doc.addPage()
        let tamaño = width / 7
        doc.setFont("times", "bold")
        doc.setFontSize(12)
        doc.text(10, 12, "# Pago")
        doc.text("Saldo", tamaño + 10, 12, "center")
        doc.text("Fee", tamaño * 2 + 10, 12, "center")
        doc.text("Sub Total", tamaño * 3 + 10, 12, "center")
        doc.text("Pay Date", tamaño * 4 + 10, 12, "center")
        doc.text("Payments", tamaño * 5 + 10, 12, "center")
        doc.text("Total", tamaño * 6 + 10, 12, "center")
        doc.setFont("times", "normal")
        y = 19
        const pagos = props.calcularPagos()
        let cont = 0
        pagos.forEach((pago) => {
            if (cont === 39) {
                doc.addPage()
                doc.setFont("times", "bold")
                doc.setFontSize(12)
                doc.text(10, 12, "# Pago")
                doc.text("Saldo", tamaño + 10, 12, "center")
                doc.text("Fee", tamaño * 2 + 10, 12, "center")
                doc.text("Sub Total", tamaño * 3 + 10, 12, "center")
                doc.text("Pay Date", tamaño * 4 + 10, 12, "center")
                doc.text("Payments", tamaño * 5 + 10, 12, "center")
                doc.text("Total", tamaño * 6 + 10, 12, "center")
                y = 19
                doc.setFont("times", "normal")
                cont = 0
            }
            doc.text(10, y, pago.numPago + "")
            doc.text("$" + props.coma(pago.saldo) + ".00", tamaño + 10, y, "center")
            doc.text("$" + props.coma(pago.fee) + ".00", tamaño * 2 + 10, y, "center")
            doc.text("$" + props.coma(pago.subTotal) + ".00", tamaño * 3 + 10, y, "center")
            doc.text(moment(pago.fechaPago).format("MM/DD/YYYY"), tamaño * 4 + 10, y, "center")
            doc.text("$" + props.coma(pago.payment) + ".00", tamaño * 5 + 10, y, "center")
            doc.text("$" + props.coma(pago.total) + ".00", tamaño * 6 + 10, y, "center")
            y += 7
            cont++
        })
        //doc.autoPrint();
        doc.output('dataurlnewwindow');
        //guardar doc
        //doc.save('Test.pdf');
    }

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col bg-gray-900 mx-auto lg:mx-28 rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 p-5">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirInitial()}>
                            Imprimir Initial Agreement
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirFinancial()}>
                            Imprimir Financial Agreement
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirRepo()}>
                            Imprimir Right of Repossession
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" >
                            Imprimir Credit Application
                        </button>
                    </div>
                    <div className="block col-span-4 px-3 mt-4 pt-3">
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

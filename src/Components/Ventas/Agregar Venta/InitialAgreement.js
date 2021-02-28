import React from 'react'
import jsPDF from "jspdf";
import moment from 'moment'
import SantosLogo from "../../../Imágenes/SantosMotorsLogo.jpg"

export default function InitialAgreement(props) {

    const { millaje, costumer, address, phoneNumber, auto, year, socialNumber, vin, email, precio, nuevoPrecio, nuevoDown, down, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate } = props.datosInitial

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const coma = (cantidad) => {
        let cantidadS = cantidad.toString();
        let cont = 0;
        let nuevoS = "";
        if (cantidadS.length > 3) {
            for (let i = cantidadS.length - 1; i >= 0; i--) {
                cont++;
                nuevoS = cantidadS.charAt(i).concat(nuevoS);
                if (cont === 3) {
                    nuevoS = ",".concat(nuevoS);
                    cont = 0;
                }
            }
            if (cantidadS.length % 3 === 0) {
                return nuevoS.substring(1, nuevoS.length);
            }
            return nuevoS;
        }
        return cantidad.toString();
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
                text = addressFormat
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
            let text = "$" + coma(nuevoDown) + ".00"
            if (i === 0) {
                campo = "Precio"
                text = "$" + coma(nuevoPrecio) + ".00"
            }
            if (i === 2) {
                campo = "Saldo"
                text = "$" + coma(saldo) + ".00"
            }
            if (i === 3) {
                campo = "Payments"
                text = "$" + coma(payments) + ".00"
            }
            if (i === 4) {
                campo = "Fee"
                text = "$" + coma(fee) + ".00"
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
            let text = "$" + coma(stickers) + ".00"
            if (i === 0) {
                campo = "Taxes"
                text = "$" + coma(taxes) + ".00"
            }
            if (i === 2) {
                campo = "Title"
                text = "$" + coma(title) + ".00"
            }
            if (i === 3) {
                campo = "Inspection"
                text = "$" + coma(inspection) + ".00"
            }
            if (i === 4) {
                campo = "Fee"
                text = "$" + coma(fee2) + ".00"
            }
            if (i === 5) {
                campo = "Tag Total"
                text = "$" + coma(tagTotal) + ".00"
            }
            if (i === 6) {
                campo = "End Date"
                text = "End Date"
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
            `CANCELADAS DENTRO DE  4 SEMANAS ${"$" + coma(tagTotal) + ".00"}\n\r` +
            "GARANTIA : MOTOR Y TRANSMISION UNICAMENTE 1 MES A PARTIR\r" +
            "DE LA VENTA.\n\r" +
            `Millaje actual: ${millaje}`)

        doc.setFontSize(10)
        doc.setFont("times", "bold")
        doc.text(12, 167, texto)

        //firma

        doc.setLineWidth(0.5)
        doc.line(140, 190,200, 190)

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
            doc.text("$" + coma(pago.saldo) + ".00", tamaño + 10, y, "center")
            doc.text("$" + coma(pago.fee) + ".00", tamaño * 2 + 10, y, "center")
            doc.text("$" + coma(pago.subTotal) + ".00", tamaño * 3 + 10, y, "center")
            doc.text(moment(pago.fechaPago).format("MM/DD/YYYY"), tamaño * 4 + 10, y, "center")
            doc.text("$" + coma(pago.payment) + ".00", tamaño * 5 + 10, y, "center")
            doc.text("$" + coma(pago.total) + ".00", tamaño * 6 + 10, y, "center")
            y += 7
            cont++
        })
        //doc.autoPrint();
        doc.output('dataurlnewwindow');
        //guardar doc
        //doc.save('Test.pdf');

    }

    const handleOnSubmit = () => {

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
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Email</h2>
                            <input type="email" value={email} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="email" placeholder="Ej. sm@group.com" required onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Precio</h2>
                            <input type="number" min={precio} value={nuevoPrecio} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="nuevoPrecio" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Down</h2>
                            <input type="number" min={down - 500} value={nuevoDown} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="nuevoDown" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Saldo</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{saldo}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Payments</h2>
                            <input type="number" min={250} value={payments} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="payments" required onChange={handleInputChange} />
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Fee</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{fee}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Frecuency</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{frecuencia}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Date</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{moment(new Date()).format("MM/DD/YYYY")}</h3>
                        </div>
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">SS#</h2>
                            <input type="text" value={socialNumber} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-2 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="socialNumber" placeholder="Ej. 000000" required onChange={handleInputChange} />
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
                        <div className="block px-3 pt-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">End Date</h2>
                            <h3 className="text-gray-200 ml-4 px-2 py-2 w-11/12 capitalize border-b-2 border-gray-800 focus:border-gray-700 ">{endDate}</h3>
                        </div>
                        <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-3/4 place-self-center mt-8 items-center shadow-lg cursor-pointer">
                            <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => props.calcularFechaFinal()}>
                                Calcular Fecha Final de Pago
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end place-items-end space-x-4 py-4 px-7">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-2/12 items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirInitial()}>
                            Imprimir
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

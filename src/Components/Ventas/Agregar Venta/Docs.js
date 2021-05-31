import React from 'react'
import jsPDF from "jspdf"
import moment from 'moment'
import SantosLogo from "../../../Imágenes/SantosMotorsLogo.jpg"
import Checkbox from "../../Utilidades/Checkbox"
import Imagen from "../../Utilidades/Imagen"
import Swal from 'sweetalert2'

export default function Docs(props) {

    const { millaje, costumer, address, phoneNumber, auto, year, vin, email, nuevoPrecio, nuevoDown, saldo, payments, fee, frecuencia, taxes, stickers, title, inspection, fee2, tagTotal, endDate, observaciones, dealDescriptionPayments, dealDescriptionTags, codigo, clean, cobroComision, sticker1ano, sticker2ano, placaTemporal, imagenLicencia } = props.datosDoc
    const { loading } = props

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
        doc.text("9571 WASHIGTON BLV N LAUREL MD  20723", width / 2, 30, "center")
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

        text = "Notes:\r"
            + "In this deal will not be made refunds of down payment for non-conformities arising after having signed\r"
            + "the deal, physical or mechanical of the vehicle.\r"
            + "There is a surcharge (late fee) that will have to pay $ 50 per payment which is cumulative in case of late\r"
            + "payment of 10 days onwards."

        doc.text(15, 190, text)

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

    const imprimirInitialPayments = () => {
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
        doc.text("EMAIL info@santosmotorg.com", width / 2, 58, "center")
        doc.setFontSize(13)
        doc.text("9571 WASHIGTON BLV N LAUREL MD  20723", width / 2, 64, "center")
        doc.setFontSize(13)

        //cuerpo
        doc.setFontSize(17)
        doc.text("INITIAL  AGREEMENT AND SCHEDULE OF PAYMENTS", width / 2, 85, "center")

        //primer Columna
        let y = 97
        for (let i = 0; i < 9; i++) {
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
                fontSizeText = 11
            }
            if (i === 3) {
                campo = "Year"
                text = year + ""
            }
            if (i === 4) {
                campo = "Cod"
                text = codigo
            }
            if (i === 5) {
                campo = "VIN"
                text = vin
            }
            if (i === 6) {
                campo = "Title"
                let tipoTitulo = "Clean"
                if (!clean) {
                    tipoTitulo = "Salvage"
                }
                text = tipoTitulo.toUpperCase()
            }
            if (i === 7) {
                campo = "Email"
                text = email
                fontSizeText = 11
            }
            if (i === 8) {
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
                campo = "Millaje"
                text = props.coma(millaje)
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
        y = 139
        doc.setFontSize(12)
        doc.setFont("times", "bold")
        doc.text(152, y, "End Date")
        doc.setFontSize(12)
        doc.setFont("times", "normal")
        doc.text(174, y, endDate);

        let dealDescription = "Deal Description:\r"
        let contDeal = 0;
        for (let i = 0; i < dealDescriptionPayments.length; i++) {
            dealDescription += dealDescriptionPayments[i]
            contDeal++
            if (contDeal > 50 && dealDescriptionPayments[i] === " ") {
                dealDescription += "\r"
                contDeal = 0
            }
        }

        let texto = dealDescription.toUpperCase()

        doc.setFontSize(9)
        doc.setFont("times", "bold")
        doc.text(12, 180, texto)

        //firma

        doc.setLineWidth(0.5)
        doc.line(135, 200, 195, 200)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text(costumer, 165, 205, "center")

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

    const imprimirInitialTags = () => {
        let doc = new jsPDF();
        doc.setProperties({
            title: 'Initial Agreement Of Tags',
            author: 'Santos Motors Group',
        });
        let width = doc.internal.pageSize.getWidth()

        //encabezado
        doc.addImage(SantosLogo, 'JPG', width / 2 - 45, 5, 90, 40)
        doc.setFontSize(20)
        doc.setFont("times", "bold")
        doc.text("S.M.G. SANTOS MOTOR GROUP", width / 2, 53, "center")
        doc.setFontSize(10)
        doc.text("EMAIL info@santosmotorg.com", width / 2, 58, "center")
        doc.setFontSize(13)
        doc.text("9571 WASHIGTON BLV N LAUREL MD  20723", width / 2, 64, "center")
        doc.setFontSize(13)

        //cuerpo
        doc.setFontSize(17)
        doc.text("INITIAL  AGREEMENT OF TAGS", width / 2, 85, "center")

        //primer Columna
        let y = 97
        for (let i = 0; i < 6; i++) {
            let campo = "Cell"
            let text = phoneNumber
            let fontSizeText = 12
            if (i === 0) {
                campo = "Costumer"
                text = costumer
                fontSizeText = 10
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
                campo = "Cod"
                text = codigo
            }
            if (i === 5) {
                campo = "VIN"
                text = vin
            }

            doc.setFontSize(12)
            doc.setFont("times", "bold")
            doc.text(20, y, campo)
            doc.setFontSize(fontSizeText)
            doc.setFont("times", "normal")
            doc.text(42, y, text);
            y += 7
        }

        //segunda columna
        y = 97
        for (let i = 0; i < 6; i++) {
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
            doc.setFontSize(12)
            doc.setFont("times", "bold")
            doc.text(130, y, campo)
            doc.setFontSize(12)
            doc.setFont("times", "normal")
            doc.text(155, y, text)
            y += 7
        }

        let dealDescription = "Deal Description:\r"
        let contDeal = 0;
        for (let i = 0; i < dealDescriptionTags.length; i++) {
            dealDescription += dealDescriptionTags[i]
            contDeal++
            if (contDeal > 50 && dealDescriptionTags[i] === " ") {
                dealDescription += "\r"
                contDeal = 0
            }
        }

        let texto = dealDescription.toUpperCase()

        doc.setFontSize(9)
        doc.setFont("times", "bold")
        doc.text(15, 155, texto)

        //firma

        doc.setLineWidth(0.5)
        doc.line(140, 185, 200, 185)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text(costumer, 170, 190, "center")

        doc.output('dataurlnewwindow');
    }

    const imprimirAditionalInformation = () => {
        let doc = new jsPDF();
        doc.setProperties({
            title: 'Aditional Information',
            author: 'Santos Motors Group',
        });
        let width = doc.internal.pageSize.getWidth()

        //encabezado
        doc.setFontSize(20)
        doc.setFont("times", "bold")
        doc.text("S.M.G. SANTOS MOTOR GROUP", width / 2, 15, "center")
        doc.setFontSize(10)
        doc.text("9571 WASHIGTON BLV N LAUREL MD  20723", width / 2, 23, "center")
        doc.text("Phone (410) 921-9155 / (240) 490-6191 / (240) 636-5144", width / 2, 29, "center")
        doc.text("ADITIONAL INFORMATION", width / 2, 40, "center")

        doc.setLineWidth(0.5)
        doc.line(7, 50, 203, 50)

        doc.line(7, 50, 7, 259)

        doc.line(203, 50, 203, 259)

        doc.line(7, 58, 203, 58)

        //applicant information

        doc.setDrawColor(0);
        doc.setFillColor(210, 210, 210);
        doc.rect(7, 50, 196, 8, 'FD');

        doc.text("Applicant Information", width / 2, 55, "center")

        doc.line(40, 58, 40, 95)

        let y = 63
        for (let i = 0; i < 4; i++) {
            let campo = "Name:"
            let text = costumer

            if (i === 1) {
                campo = "Phone:"
                text = phoneNumber
            }
            if (i === 2) {
                campo = "Email:"
                text = email
            }
            if (i === 3) {
                campo = "Current address:"
                text = address
            }

            doc.line(7, y + 2, 203, y + 2)
            doc.setFontSize(11)
            doc.setFont("times", "bold")
            doc.text(9, y, campo)
            doc.setFont("times", "normal")
            doc.text(42, y, text)
            y += 7
        }

        doc.setFont("times", "bold")

        doc.line(7, 95, 203, 95)
        doc.text(9, 92, "Own / Rent")

        doc.line(72, 86, 72, 95)

        doc.text(74, 92, "Monthly Payment: $")
        doc.setLineWidth(0.5)
        doc.line(110, 86, 110, 95)

        doc.line(150, 86, 150, 95)
        doc.text(152, 92, "How long?")
        doc.line(171, 86, 171, 95)

        //employment information
        doc.setDrawColor(0);
        doc.setFillColor(210, 210, 210);
        doc.rect(7, 94, 196, 8, 'FD');

        doc.setFontSize(10)
        doc.text("Employment Information", width / 2, 99, "center")

        doc.line(40, 102, 40, 149)

        doc.text(9, 108, "Current employer:")
        doc.line(7, 112, 203, 112)

        doc.text(9, 118, "Employer address:")
        doc.line(7, 122, 203, 122)

        doc.setFontSize(11)
        doc.line(150, 112, 150, 122)
        doc.text(152, 118, "How long?")
        doc.line(171, 112, 171, 122)

        doc.text(9, 128, "Phone:")
        doc.setLineWidth(0.5)
        doc.line(7, 131, 203, 131)

        doc.setLineWidth(0.5)
        doc.line(72, 122, 72, 131)

        doc.text(74, 128, "E-mail:")
        doc.setLineWidth(0.5)
        doc.line(90, 122, 90, 131)

        doc.setFontSize(11)
        doc.line(150, 122, 150, 131)
        doc.text(152, 128, "Fax:")
        doc.line(171, 122, 171, 131)

        doc.text(9, 137, "City:")
        doc.line(7, 140, 203, 140)

        doc.line(72, 131, 72, 140)
        doc.text(74, 137, "State:")
        doc.line(90, 131, 90, 140)

        doc.line(130, 131, 130, 140)
        doc.text(131, 137, "ZIP Code:")
        doc.line(150, 131, 150, 140)

        doc.text(9, 146, "Position:")
        doc.line(7, 149, 203, 149)

        doc.line(90, 140, 90, 149)
        doc.text(92, 146, "Hourly Salary:")
        doc.line(118, 140, 118, 149)

        //co-applicant information
        doc.setDrawColor(0);
        doc.setFillColor(210, 210, 210);
        doc.rect(7, 149, 196, 8, 'FD');

        doc.setFontSize(10)
        doc.text("Co-Applicant Information, if joint account", width / 2, 154, "center")

        doc.setLineWidth(0.5)
        doc.line(40, 157, 40, 213)

        doc.setFontSize(11)
        doc.text(9, 163, "Name:")
        doc.line(7, 166, 203, 166)

        doc.text(9, 172, "Date of Birth:")
        doc.line(7, 175, 203, 175)

        doc.line(72, 166, 72, 175)
        doc.text(74, 172, "SSN:")
        doc.line(90, 166, 90, 175)

        doc.line(150, 166, 150, 175)
        doc.text(152, 172, "Phone:")
        doc.line(167, 166, 167, 175)

        doc.text(9, 181, "Email:")
        doc.line(7, 184, 203, 184)

        doc.text(9, 190, "Current address:")
        doc.line(7, 193, 203, 193)

        doc.text(9, 200, "City:")
        doc.line(7, 204, 203, 204)

        doc.line(72, 193, 72, 204)
        doc.text(74, 200, "State:")
        doc.line(90, 193, 90, 204)

        doc.line(130, 193, 130, 204)
        doc.text(131, 200, "ZIP Code:")
        doc.line(150, 193, 150, 204)

        doc.text(9, 210, "Own / Rent:")
        doc.line(7, 213, 203, 213)

        doc.line(72, 204, 72, 213)
        doc.text(74, 210, "Monthly Payment: $")
        doc.line(110, 204, 110, 213)

        doc.line(150, 204, 150, 213)
        doc.text(152, 210, "How long?")
        doc.line(171, 204, 171, 213)

        //co employment information
        doc.setDrawColor(0);
        doc.setFillColor(210, 210, 210);
        doc.rect(7, 213, 196, 8, 'FD');

        doc.setFontSize(10)
        doc.text("Employment Information", width / 2, 218, "center")

        doc.line(40, 221, 40, 259)

        doc.text(9, 227, "Current employer:")
        doc.line(7, 231, 203, 231)

        doc.text(9, 237, "Employer address:")
        doc.line(7, 241, 203, 241)

        doc.setFontSize(11)
        doc.line(150, 231, 150, 241)
        doc.text(152, 237, "How long?")
        doc.line(171, 231, 171, 241)

        doc.text(9, 247, "Phone:")
        doc.line(7, 250, 203, 250)

        doc.line(72, 241, 72, 250)
        doc.text(74, 247, "E-mail:")
        doc.line(90, 241, 90, 250)

        doc.line(150, 241, 150, 250)
        doc.text(152, 247, "Fax:")
        doc.line(171, 241, 171, 250)

        doc.text(9, 256, "City:")
        doc.line(7, 259, 203, 259)

        doc.line(72, 250, 72, 259)
        doc.text(74, 256, "State:")
        doc.line(90, 250, 90, 259)

        doc.line(130, 250, 130, 259)
        doc.text(131, 256, "ZIP Code:")
        doc.line(150, 250, 150, 259)

        //pagina 2
        doc.addPage()
        doc.setLineWidth(0.5)
        doc.line(7, 10, 203, 10)

        doc.line(7, 10, 7, 240)

        doc.line(203, 10, 203, 240)

        doc.line(7, 240, 203, 240)

        //references

        doc.setDrawColor(0);
        doc.setFillColor(210, 210, 210);
        doc.rect(7, 10, 196, 8, 'FD');

        doc.text("References", width / 2, 15, "center")

        y = 18

        for (let i = 0; i < 5; i++) {
            doc.text(9, y + 6, "Name of a relative not residing with you:")
            doc.line(85, y, 85, y + 9)
            doc.line(7, y + 9, 203, y + 9)

            y += 9

            doc.line(40, y, 40, y + 27)

            doc.text(9, y + 6, "Address:")
            doc.line(7, y + 9, 203, y + 9)

            doc.line(150, y, 150, y + 9)
            doc.text(152, y + 6, "Phone:")
            doc.line(171, y, 171, y + 9)

            y += 9

            doc.text(9, y + 6, "City:")
            doc.line(7, y + 9, 203, y + 9)

            doc.line(72, y, 72, y + 9)
            doc.text(74, y + 6, "State:")
            doc.line(85, y, 85, y + 9)

            doc.line(150, y, 150, y + 9)
            doc.text(152, y + 6, "Zip:")
            doc.line(171, y, 171, y + 9)

            y += 9

            doc.text(9, y + 6, "Relationship:")
            doc.line(7, y + 9, 203, y + 9)

            doc.line(120, y, 120, y + 9)
            doc.text(122, y + 6, "Email:")
            doc.line(135, y, 135, y + 9)

            y += 9
        }
        let texto = "Please read and sign below: By your signature below, you certify that you have completed this application to obtain credit, and that all information provided by you for this application is\r"
            + "true, correct and complete. You understand and agree that this application and related credit information will be forwarded to FBAS. You authorize the Seller and FBAS* (collectively “We”,\r"
            + "“Us” and “Our”) to make inquiries and obtain information about you as We deem appropriate for the purpose of evaluating this application, and for any update, renewal, or extension of the\r"
            + "credit received, including obtaining credit reports, contacting your credit references and/or your employer, and contacting any person or department about your driving record. You also\r"
            + "authorize Us to provide credit information about this transaction to others for the purpose of initiating, monitoring, and other purposes related to your account. You authorize Us to give a\r"
            + "copy of this application to anyone who has agreed to pay debts incurred on the basis of this application. If you provided your email address on this application, you agree that any\r"
            + "communications and correspondence to you from any of the parties to this transaction may be effected by email."

        doc.setFont("times", "normal")
        doc.setFontSize(7)
        doc.text(9, 202, texto)

        texto = "take these actions using the telephone number(s) that you provide Us in this credit application, that you provide to FBAS* in the future, or it obtains from another source, even if\r"
            + "the number is for a mobile telephone and/or our using the number results in charges to you.  I authorize FBAS to verify the information provided on this form."

        doc.text(9, 230, texto)

        //firmas

        doc.setLineWidth(0.5)
        doc.line(10, 270, 60, 270)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text("Signature of applicant", 35, 275, "center")

        doc.setLineWidth(0.5)
        doc.line(70, 270, 100, 270)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text("Date", 85, 275, "center")

        doc.setLineWidth(0.5)
        doc.line(110, 270, 160, 270)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text("Signature of co-applicant", 135, 275, "center")

        doc.setLineWidth(0.5)
        doc.line(170, 270, 200, 270)

        doc.setFontSize(8)
        doc.setFont("times", "bold")
        doc.text("Date", 185, 275, "center")

        doc.output('dataurlnewwindow');
    }

    const handleInputChange = ({ target }) => {
        props.mandarPadre(target)
    }

    const traerFoto = (foto) => {
        const objetoFoto = { name: "imagenLicencia", value: [...foto] }
        props.mandarPadre(objetoFoto)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (imagenLicencia[0] === null || imagenLicencia[0] === undefined){
            Swal.fire(
                '¡Ops!',
                'Debes subir la foto de la licencia del cliente',
                'warning'
            )
        } else {
            props.guardarVenta()
        }        
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col bg-gray-900 mx-auto lg:mx-28 rounded-b-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-4 p-5">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-xs font-semibold focus:outline-none text-gray-200" onClick={() => imprimirInitialPayments()}>
                            Imprimir Initial Agreement of Payments
                        </button>
                    </div>
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-xs font-semibold focus:outline-none text-gray-200" onClick={() => imprimirInitialTags()}>
                            Imprimir Initial Agreement of Tags
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
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-11/12 place-self-center items-center shadow-lg cursor-pointer mt-4">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => imprimirAditionalInformation()}>
                            Imprimir Aditional Information
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-4">
                    <div>
                        <div className="block px-3">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Observaciones</h2>
                            <textarea rows={3} name="observaciones" value={observaciones} className="block bg-gray-900 text-lg text-gray-200 ml-4 px-2 py-3 mt-1 w-11/12 resize-none border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" placeholder="Ej. Extras" onChange={handleInputChange} />
                        </div>
                        <div className="block px-2 mt-4">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Comisión cobrada por</h2>
                            <input type="text" value={cobroComision} className="block bg-gray-900 text-gray-200 ml-4 px-2 py-3 w-11/12 border-b-2 border-gray-800 focus:border-gray-700 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none" name="cobroComision" placeholder="Ej. Juan Perez" onChange={handleInputChange} />
                        </div>
                        <div className="ml-4 mt-6 px-2 text-gray-200 font-semibold text-lg underline">
                            <Checkbox nombre={"placaTemporal"} handleInputChange={handleInputChange} checked={placaTemporal} texto={"Placa Temporal"} />
                        </div>
                        <div className="ml-4 mt-4 px-2 text-gray-200 font-semibold text-lg underline">
                            <Checkbox nombre={"sticker1ano"} handleInputChange={handleInputChange} checked={sticker1ano} texto={"Sticker 1 Año"} />
                        </div>
                        <div className="ml-4 mt-4 px-2 text-gray-200 font-semibold text-lg underline">
                            <Checkbox nombre={"sticker2ano"} handleInputChange={handleInputChange} checked={sticker2ano} texto={"Sticker 2 Año"} />
                        </div>
                    </div>
                    <div>
                        <div className="block px-2">
                            <h2 className="text-gray-200 px-2 font-semibold text-lg underline">Licencia Cliente</h2>
                        </div>
                        <div className="grid mt-10 mx-4 place-items-center">
                            <Imagen imagenes={imagenLicencia} texto={"Agregar Foto de Licencia"} mandarFotos={traerFoto} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end place-items-end space-x-4 py-4 px-7">
                    <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-2/12 items-center shadow-lg cursor-pointer">
                        <button type="button" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200" onClick={() => props.previoStep(2)}>
                            Anterior
                        </button>
                    </div>
                    {loading
                        ? <div className="flex bg-green-600 hover:bg-green-700 cursor-not-allowed rounded-3xl h-9 w-2/12 items-center place-content-center shadow-lg">
                            <div className="ml-4 pt-px mr-2 text-center text-sm font-semibold focus:outline-none text-gray-200">
                                Guardando
                            </div>
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="stroke-current opacity-25" strokeWidth="4" cx="12" cy="12" r="10" />
                                <path className="fill-current opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        </div>
                        : <div className="flex bg-gray-800 hover:bg-gray-700 rounded-3xl h-9 w-2/12 items-center shadow-lg cursor-pointer">
                            <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                                Vender
                            </button>
                        </div>}
                </div>
            </div>
        </form>
    )
}

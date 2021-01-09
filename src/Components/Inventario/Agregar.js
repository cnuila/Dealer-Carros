import React from "react";
import Navbar from '../Navbar'
import Pasos from "./Agregar Carro/Pasos"
import InfoGeneral from './Agregar Carro/InfoGeneral'
import InfoEstado from './Agregar Carro/InfoEstado'
import InfoCosto from './Agregar Carro/InfoCosto'
import ImagenesCarro from './Agregar Carro/ImagenesCarro'
import { db, storage } from '../../firebase'
import { Link } from 'react-router-dom';

class Agregar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...this.estadoInicial,
    }

    this.traerDatos = this.traerDatos.bind(this)
    this.traerObjeto = this.traerObjeto.bind(this)
    this.siguienteStep = this.siguienteStep.bind(this)
    this.previoStep = this.previoStep.bind(this)
    this.guardarDB = this.guardarDB.bind(this)
  }

  estadoInicial = {
    pasos: [{ texto: "Información General", selected: true, terminado: false },
    { texto: "Estado", selected: false, terminado: false },
    { texto: "Valor", selected: false, terminado: false },
    { texto: "Imágenes", selected: false, terminado: false }],
    vin: "",
    marca: "",
    modelo: "",
    codigo: "",
    proveedor: "",
    millaje: "Cualquiera",
    ano: "Cualquiera",
    color: "transparent",
    estado: "Disponible",
    inspeccionado: false,
    titulo: false,
    linkHolder: false,
    salvage: true,
    clean: false,
    valorCompra: "",
    valorInvertido: "",
    precioFinal: "",
    imagenes: [],
    loading: false,
  }

  traerDatos = ({ name, value }) => {
    this.setState({
      [name]: value,
    })
  }

  traerObjeto = (objeto) => {
    this.setState({
      ...objeto,
    })
  }

  siguienteStep = indexActual => {
    const { pasos } = this.state
    let changeStep = [...pasos]
    changeStep[indexActual].terminado = true
    changeStep[indexActual].selected = false
    changeStep[indexActual + 1].selected = true
    this.setState({
      pasos: changeStep,
    })
  }

  previoStep = indexActual => {
    const { pasos } = this.state
    let changeStep = [...pasos]
    changeStep[indexActual].selected = false
    changeStep[indexActual].terminado = false
    changeStep[indexActual - 1].selected = true
    this.setState({
      pasos: changeStep,
    })
  }

  guardarDB = async () => {
    this.setState({ loading: true })
    const { vin, marca, modelo, codigo, proveedor, ano, millaje, color, estado, inspeccionado, titulo, linkHolder, salvage, clean, valorCompra, valorInvertido, precioFinal, imagenes } = this.state
    
    let carro = { marca, modelo, codigo, proveedor, ano, millaje, estado, valorCompra, valorInvertido, precioFinal }
    
    let colorCarro = "Rojo"
    if (color === "#0047cb") {
      colorCarro = "Azul"
    }
    if (color === "#fbff00") {
      colorCarro = "Amarillo"
    }
    if (color === "#ffffff") {
      colorCarro = "Blanco"
    }
    if (color === "#000000") {
      colorCarro = "Negro"
    }
    if (color === "#777777") {
      colorCarro = "Gris"
    }
    carro = { ...carro, color: colorCarro }

    if (inspeccionado) {
      carro = { ...carro, inspeccionado }
    }
    if (titulo) {
      carro = { ...carro, titulo }
    }
    if (linkHolder) {
      carro = { ...carro, linkHolder }
    }
    if (salvage) {
      carro = { ...carro, salvage }
    }
    if (clean) {
      carro = { ...carro, clean }
    }

    let dirFotos = []
    let storageRef = storage.ref();
    let i = 0
    while (i <= 4) {
      try {
        let carroRef = storageRef.child(`${vin}/${imagenes[i].name}`);
        await carroRef.put(imagenes[i])
        dirFotos.push(carroRef.toString())
        i++
      } catch (err) {
        alert(err)
      }
    }
    carro = { ...carro, fotos: dirFotos }

    db.collection("carros").doc(vin).set(carro).then(() => {
      this.setState({ 
        ...this.estadoInicial, 
        pasos: [{ texto: "Información General", selected: true, terminado: false },
        { texto: "Estado", selected: false, terminado: false },
        { texto: "Valor", selected: false, terminado: false },
        { texto: "Imágenes", selected: false, terminado: false }]
      })
    }).catch(err => {
      alert(err)
    })
  }

  render() {
    let { vin, marca, modelo, codigo, proveedor, ano, millaje, color, estado, inspeccionado, titulo, linkHolder, salvage, clean, valorCompra, valorInvertido, precioFinal, imagenes, pasos, loading } = this.state

    //controla los steps
    const mostrarPasos = pasos.map((paso, index) => {
      return <Pasos key={index + 1} index={index + 1} selected={paso.selected} terminado={paso.terminado} texto={paso.texto} />
    })

    let pasoAmostrar = (<></>)
    if (pasos[0].selected) {
      pasoAmostrar = <InfoGeneral vin={vin} marca={marca} modelo={modelo} codigo={codigo} proveedor={proveedor} ano={ano} millaje={millaje} color={color} mandarPadre={this.traerDatos} siguienteStep={this.siguienteStep} />
    }
    if (pasos[1].selected) {
      pasoAmostrar = <InfoEstado estado={estado} inspeccionado={inspeccionado} titulo={titulo} linkHolder={linkHolder} salvage={salvage} clean={clean} siguienteStep={this.siguienteStep} previoStep={this.previoStep} mandarObjeto={this.traerObjeto} />
    }
    if (pasos[2].selected) {
      pasoAmostrar = <InfoCosto precioFinal={precioFinal} valorCompra={valorCompra} valorInvertido={valorInvertido} mandarPadre={this.traerDatos} siguienteStep={this.siguienteStep} previoStep={this.previoStep} />
    }
    if (pasos[3].selected) {
      pasoAmostrar = <ImagenesCarro imagenes={imagenes} loading={loading} guardarDB={this.guardarDB} mandarPadre={this.traerDatos} previoStep={this.previoStep} />
    }

    return (
      <div className="bg-gray-200">
        <Navbar />

        {/*Inicio Formulario*/}
        <div className="shadow-2xl py-7">

          <div className="grid grid-cols-4 relative mx-auto px-3 py-4 max-w-3xl place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">

            <div className="flex absolute z-0 w-9/12 -mt-7 align-center items-center">
              <div className="flex-1 w-full rounded-full bg-gray-200 py-0.5"></div>
            </div>

            {mostrarPasos}

          </div>
          {pasoAmostrar}
        </div>
      </div>
    );
  }
}

export default Agregar;
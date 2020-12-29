import React from "react";
import ImagenesCarro from './Agregar/ImagenesCarro';
import InfoEstado from './Agregar/InfoEstado'
import InfoGeneral from './Agregar/InfoGeneral'
import Pasos from "./Agregar/Pasos"
import { db, storage } from '../firebase'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
class Agregar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pasos: [{ texto: "Información General", selected: false, terminado: true },
      { texto: "Estado", selected: true, terminado: false },
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
      estado: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.llenarArreglo = this.llenarArreglo.bind(this)

    this.traerDatos = this.traerDatos.bind(this)    
    this.traerObjeto = this.traerObjeto.bind(this)
    this.siguienteStep = this.siguienteStep.bind(this)
    this.previoStep = this.previoStep.bind(this)
  }

  estadoInicial = {
    valorCompra: "",
    valorInvertido: "",
    precioFinal: "",
    fotos: [],
  }

  traerDatos = ({ name, value}) => {
    console.log(name, value)
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
    changeStep[indexActual - 1].selected = true
    this.setState({
      pasos: changeStep,
    })
  }


  llenarArreglo = (arreglo) => {
    this.setState({
      fotos: arreglo,
    })
  }

  addLink = async () => {
    let { marca, modelo, VIN, millaje, codigo, proveedor, ano, color, estado, inspeccionado, titulo, lienHolder,
      valorCompra, valorInvertido, precioFinal, fotos } = this.state
    let direcciones = []
    fotos.map(url => {
      var blob = new Blob([url[0]], { type: "image/jpeg" });
      let prueba = storage.ref().child(`${VIN}/${url[0].name}`)

      direcciones.push(`gs://${prueba.bucket}/${prueba.fullPath}`)
      prueba.put(blob).then(d => {
        console.log("agrego foto exitosamente");
      }).catch(d => console.log("nada dog"));
    })
    await db.collection('Prueba').doc(this.state.VIN).set({
      VIN: VIN,
      marca: marca,
      modelo: modelo,
      millaje: millaje,
      codigo: codigo,
      proveedor: proveedor,
      ano: ano,
      color: color,
      estado: estado,
      inspeccionado: inspeccionado,
      titulo: titulo,
      lienHolder: lienHolder,
      valorCompra: valorCompra,
      valorInvertido: valorInvertido,
      precioFinal: precioFinal,
      fotos: direcciones,
    }).then(() => {
      console.log("agrego exitosamente");
    });
  }

  handleInputChange({ target }) {
    let { name, type } = target
    let valor
    if (type === "checkbox") {
      valor = target.checked
    } else {
      valor = target.value
      console.log(valor + " -- valor")
    }
    this.setState({
      [name]: valor,
    })
  }

  render() {
    let { vin, marca, modelo, codigo, proveedor, ano, millaje, color, pasos } = this.state
    
    const mostrarPasos = pasos.map((paso, index) => {
      return <Pasos key={index + 1} index={index + 1} selected={paso.selected} terminado={paso.terminado} texto={paso.texto} />
    })

    let pasoAmostrar = (<></>)
    if (pasos[0].selected) {
      pasoAmostrar = <InfoGeneral vin={vin} marca={marca} modelo={modelo} codigo={codigo} proveedor={proveedor} ano={ano} millaje={millaje} color={color} mandarPadre={this.traerDatos} siguienteStep={this.siguienteStep} />
    }
    if (pasos[1].selected) {
      pasoAmostrar = <InfoEstado siguienteStep={this.siguienteStep} previoStep={this.previoStep} mandarObjeto={this.traerObjeto}/>
    }
    if (pasos[3].selected) {
      pasoAmostrar = <ImagenesCarro />
    }


    return (
      <div className="bg-gray-100">
        {/*Inicio del navbar*/}
        <Navbar/>
        {/*fin del navbar  .bg-gray-400*/}

        {/*Inicio Formulario*/}
        <>

          <div className="grid grid-cols-4 relative mx-auto mt-5 px-3 py-4 max-w-3xl place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">

            <div className="flex absolute z-0 w-9/12 -mt-7 align-center items-center">
              <div className="flex-1 w-full rounded-full bg-gray-200 py-0.5"></div>
            </div>

            {mostrarPasos}

          </div>
          {pasoAmostrar}
        </>
        <body class="antialiased p-10">
          <form class=" bg-gray-200 max-w-2xl mx-auto rounded-lg  overflow-hidden py-6 space-y-10 shadow-2xl" >
            <h2 class="text-2xl font-bold text-center">Agregar Carro</h2>
            <h2 class="text-xl font-bold text-center ">Imágenes</h2>
            <h2 class="text-lg font-bold text-center ">Imagen principal</h2>
            <h2 class="text-lg font-bold text-center ">Otras imagenes</h2>

            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Valor Compra:</h2>
              <input type="number" min="0" name="Valor_compra" step="100" onChange={this.handleInputChange} placeholder="" class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />

            </div>
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Valor Invertido:</h2>
              <input type="number" min="0" name="Valor_invertido" step="100" onChange={this.handleInputChange} placeholder="" class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />

            </div>
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Valor Final</h2>
              <input type="number" min="0" name="Precio_final" step="100" onChange={this.handleInputChange} placeholder="" class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            <Link to="/">
              <div className='sm:mx-auto md:mx-56 p-8 my-3'>
                <button onClick={this.addLink} class=" bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full ">
                  Agregar Vehiculo
          </button>
              </div>
            </Link>

          </form>
        </body>
      </div>

    );
  }
}
export default Agregar;
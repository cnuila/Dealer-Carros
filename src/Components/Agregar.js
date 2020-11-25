import React from "react";
import ImagenPrincipal from './Agregar/ImagenPrincipal';
import ListaFotos from './Agregar/ListaFotos';
import { db, storage } from '../firebase'
import ColorPicker from './Filtros/ColorPicker';
import { Link } from 'react-router-dom';
import MultipleImageUploadComponent from './Agregar/UploadImages';

class Agregar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.estadoInicial,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.llenarArreglo = this.llenarArreglo.bind(this)
  }

  estadoInicial = {
    marca: "",
    modelo: "",
    VIN: "",
    millaje: "",
    codigo: "",
    proveedor: "",
    ano: "",
    color: "",
    estado: "",
    inspeccionado: "",
    titulo: "",
    lienHolder: "",
    Tipo_titulo: "",
    valorCompra: "",
    valorInvertido: "",
    precioFinal: "",
    fotos: [],
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
    let { ano, color, precioMax, precioMin, salvage, clean, proveedor, titulo, inspeccionado, lienHolder } = this.state
    return (
      <div className="bg-gray-100">
        {/*Inicio del navbar*/}
        <nav className="justify-between flex items-center flex-wrap bg-gray-900 p-3">
          <div className="flex items-center ml-2 mb-3 lg:ml-0 lg:mb-0 flex-shrink-0 text-white mr-6">
            <span className="font-bold text-4xl tracking-tight pl-10">
              Santos Motors
              </span>
          </div>
          <div className="flex items-center">
            <Link to="/">
              <button className="ml-8 focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-1 px-4 rounded inline-flex items-center">
                <svg className="w-6 h-6 mr-2 fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                  <path d="M503.402 228.885L273.684 19.567c-10.083-9.189-25.288-9.188-35.367-.001L8.598 228.886c-8.077 7.36-10.745 18.7-6.799 28.889 3.947 10.189 13.557 16.772 24.484 16.772h36.69v209.721c0 8.315 6.742 15.057 15.057 15.057h125.914c8.315 0 15.057-6.741 15.057-15.057V356.932h74.002v127.337c0 8.315 6.742 15.057 15.057 15.057h125.908c8.315 0 15.057-6.741 15.057-15.057V274.547h36.697c10.926 0 20.537-6.584 24.484-16.772 3.941-10.19 1.273-21.529-6.804-28.89zM445.092 42.73H343.973l116.176 105.636v-90.58c0-8.315-6.741-15.056-15.057-15.056z" />
                </svg>
                <span>Home</span>
              </button>
            </Link>
            <button className="focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="w-6 h-6 mr-2 fill-current text-gay-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M19 10l-6-5v3H6v4h7v3l6-5zM3 3h8V1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H3V3z" />
              </svg>
              <span>Log out</span>
            </button>
          </div>
        </nav>
        {/*fin del navbar  .bg-gray-400*/}

        {/*Inicio Formulario*/}
        <>
          <h1 class="text-2xl font-bold text-center">Agregar Carro</h1>
          <div className="grid grid-cols-3 bg-gray-800 rounded-lg">
            <div>step 1</div>
            <div>step 2</div>
            <div>step 3</div>
          </div>
          <div className="grid grid-cols-4 h-70 bg-red-800 max-w-3xl mx-auto rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 place-content-center m-4 col-span-2 bg-blue-400">
              <ImagenPrincipal/>
            </div>
            <div className="grid grid-cols-2 col-span-2 mt-4 mb-4 mr-4 bg-green-800">              
              <div className="h-40 w-11/12 my-1 ml-2 bg-blue-400">hi</div>
              
            </div>
          </div>
        </>
        <body class="antialiased p-10">
          <form class=" bg-gray-200 max-w-2xl mx-auto rounded-lg  overflow-hidden py-6 space-y-10 shadow-2xl" >
            <h2 class="text-2xl font-bold text-center">Agregar Carro</h2>
            <h2 class="text-xl font-bold text-center ">Imágenes</h2>
            <h2 class="text-lg font-bold text-center ">Imagen principal</h2>
            <ImagenPrincipal VIN={this.state.VIN} />
            <h2 class="text-lg font-bold text-center ">Otras imagenes</h2>
            <MultipleImageUploadComponent VIN={this.state.VIN} llenarArreglo={this.llenarArreglo} />
            <h2 class="text-2xl font-bold text-center underline">Información General</h2>
            {/*Marcas*/}
            <div class="  relative   max-w-sm mx-auto border-b-2 w-3/5  focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">VIN</h2>
              <input type="text" name="VIN" placeholder="" onChange={this.handleInputChange} class="block w-full text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            {/*Modelo*/}
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Marca</h2>
              <input type="text" name="Marca" placeholder="" onChange={this.handleInputChange} class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            {/*vin*/}
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Modelo</h2>
              <input type="text" name="Modelo" placeholder=" " onChange={this.handleInputChange} class="block w-full text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            {/*Millaje*/}
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Millaje</h2>
              <input type="text" name="Millaje" placeholder="" onChange={this.handleInputChange} class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            {/*Codigo*/}
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Codigo</h2>
              <input type="text" name="Codigo" placeholder="" onChange={this.handleInputChange} class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            {/*Proveedor*/}
            <div class="  relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Proveedor</h2>
              <input type="text" name="Proveedor" placeholder="" onChange={this.handleInputChange} class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            {/*ano*/}

            <div class="relative max-w-sm mx-auto border-b-2 w-3/5 focus-within:border-blue-800 p-3">
              <h2 class="text-md font-bold p-0 ">Año</h2>
              <input type="number" min="1990" max="2021" name="Ano" placeholder="" onChange={this.handleInputChange} class="block w-full  text-center appearance-none focus:outline-none bg-transparent" />
            </div>
            <div class=" relative max-w-sm mx-auto w-2/3 md:w-3/5 focus-within:border-blue-800 md:p-3">
              <h2 class="text-lg font-bold p-0">Color</h2>
              <ColorPicker width={230} circleSize={22} color={color} handleInputChange={this.handleInputChange} />
            </div>
            <h2 class="text-xl font-bold text-center -p-2">Estado del vehiculo</h2>
            <div className="my-2 w-full inline-block ">
              {/*Estado actual*/}
              <h2 class="text-lg font-bold text-center underline p-3">Estado actual:</h2>
              <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio1" type="radio" name="Estado_actual" onChange={this.handleInputChange} value="Disponible" classname=" border-black hidden bg-gray-900" />
                  <label for="radio1" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border "></span>
                Disponible
              </label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio2" type="radio" name="Estado_actual" onChange={this.handleInputChange} value="Apartado" classname=" border-black hidden bg-gray-900" />
                  <label for="radio2" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
                  Apartado
              </label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio3" type="radio" name="Estado_actual" onChange={this.handleInputChange} value="Trade" classname=" border-black hidden bg-gray-900" />
                  <label for="radio3" class="flex items-center cursor-pointer">
                    <span class="inline-block mr-1 rounded-full border border-black"></span>
                  Trade
                </label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio4" type="radio" name="Estado_actual" onChange={this.handleInputChange} value="Repo" classname=" border-black hidden bg-gray-900" />
                  <label for="radio4" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
                  Repo
              </label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio5" type="radio" name="Estado_actual" onChange={this.handleInputChange} value="Devuelto" classname=" border-black hidden bg-gray-900" />
                  <label for="radio5" class="flex items-center cursor-pointer">
                    <span class="inline-block mr-1 rounded-full border border-black"></span>
                  Devuelto
                </label>
                </div>
              </div>
            </div>
            {/*Inspeccionado*/}
            <div className=" w-full inline-block ">
              <h2 class="text-lg font-bold text-center underline p-3">Inspeccionado:</h2>
              <div class="mx-auto max-w-sm  -p-8 text-center flex flex-wrap justify-center">
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio6" type="radio" name="Inspeccionado" onChange={this.handleInputChange} value="Si" classname=" border-black hidden bg-gray-900" />
                  <label for="radio6" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
                Si</label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio7" type="radio" name="Inspeccionado" onChange={this.handleInputChange} value="No" classname=" border-black hidden bg-gray-900" />
                  <label for="radio7" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
                No</label>
                </div>
              </div>
            </div>
            <div className=" w-full inline-block ">
              <h2 class="text-lg font-bold text-center underline p-3">Titulo en propiedad:</h2>
              <div class="mx-auto max-w-sm  -p-8 text-center flex flex-wrap justify-center">
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio8" type="radio" name="Titulo_en_propiedad" onChange={this.handleInputChange} value="Si" classname=" border-black hidden bg-gray-900" />
                  <label for="radio8" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
               Si</label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio9" type="radio" name="Titulo_en_propiedad" onChange={this.handleInputChange} value="No" classname=" border-black hidden bg-gray-900" />
                  <label for="radio9" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
               No</label>
                </div>
              </div>
            </div>
            <div className=" w-full inline-block">
              <h2 class="text-lg font-bold text-center underline p-3">Lien Holder:</h2>
              <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio10" type="radio" name="Lien_holder" onChange={this.handleInputChange} value="Si" classname=" border-black hidden bg-gray-900" />
                  <label for="radio10" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
           Si</label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio11" type="radio" name="Lien_holder" onChange={this.handleInputChange} value="No" classname=" border-black hidden bg-gray-900" />
                  <label for="radio11" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
           No</label>
                </div>
              </div>
            </div>

            <div className=" w-full inline-block">
              <h2 class="text-lg font-bold text-center underline p-3">Tipo del Titulo:</h2>
              <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio12" type="radio" name="Tipo_titulo" onChange={this.handleInputChange} value="Salvage" classname=" border-black hidden bg-gray-900" />
                  <label for="radio12" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
           Salvage</label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio13" type="radio" name="Tipo_titulo" onChange={this.handleInputChange} value="Clean" classname=" border-black hidden bg-gray-900" />
                  <label for="radio13" class="flex items-center cursor-pointer">
                    <span class=" inline-block mr-1 rounded-full border border-black"></span>
           Clean</label>
                </div>
              </div>
            </div>
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
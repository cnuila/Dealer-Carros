import React from "react";
import ColorPicker from './Filtros/ColorPicker';
import { Link } from 'react-router-dom';

class Agregar extends React.Component {
  render() {
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
        

        {/*este primer div hacer el trabajo de un container*/}
        
        <link rel="stylesheet" href="build/tailwind.css" />
        <div class="antialiased p-10">
        <form>
          <div>
            <input type="text" name="username" placeholder=" " />
            <label for="username">Username</label>
          </div>
          <div class="border-b-33">
            <input type="text" name="username" placeholder=" " />
            <label for="username">Username</label>
          </div>
          <div class="my-4 border-b-2 focus-within:border-blue-500">
            <input type="text" name="username" placeholder=" " />
            <label for="username">Username</label>
          </div>
        </form>
        </div>











        <form className=" place-items-center  w-11/12   shadow-2xl  rounded  inline-block   ml-16 mr-16 mt-8  text-blue-900 bg-gray-100">     
        
          <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2  text-center text-2xl">Agregar Carro</label>
          <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2 my-8  text-center text-xl underline">Información General</label>
        
           {/*Foto*/}
        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2  text-center text-xl">Imagenes</label>
        <div className=" place-content-between my-3 w-full inline-block px-16">
        <input type="file" name="imgAdd" id="imagen" size="60"/>
        </div>
          {/*Marca*/}

          <div className="place-content-between  w-1/2 inline-block p-8 ">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2  text-center " for="Marca" >Marca</label>
            <input className="rounded-full w-1/2  bg-gray-300 text-gray-700 border text-center border-gray-200 py-3 px-4 mb-3 lg:mx-40 focus:outline-none focus:bg-white" id="Marca" type="text" />
          </div>

          {/*Modelo*/}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="  block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Modelo"> Modelo </label>
            <input className="rounded-full w-1/2   bg-gray-300 text-gray-700 border text-center border-gray-200 py-3 px-4 mb-3 lg:mx-40  focus:outline-none focus:bg-white focus:border-gray-500" id="Modelo" type="text" />
          </div>

          {/*VIN*/}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Vin">VIN</label>
            <input className="rounded-full block w-1/2 bg-gray-300 text-gray-700 border text-center border-gray-200  py-3 px-4 lg:mx-40  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Vin" type="text" />
          </div>

          {/*Millaje*/}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Millaje"> Millaje </label>
            <input className="rounded-full block w-1/2 bg-gray-300 text-gray-700 border  text-center  py-3 px-4 mb-3 leading-tight lg:mx-40  focus:outline-none focus:bg-white" id="Mijalle" type="text" />
          </div>

          {/*Codigo*/}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Codigo">Codigo</label>
            <input className="rounded-full block w-1/2 bg-gray-300 text-gray-700 border text-center py-3 px-4 mb-3 leading-tight lg:mx-40 focus:outline-none focus:bg-white" id="Codigo" type="text" />
          </div>

          {/*Proveedor*/}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Proveedor">Proveedor</label>
            <input className="rounded-full block w-1/2 bg-gray-300 text-gray-700 border text-center  py-3 px-4 mb-3 leading-tight lg:mx-40 focus:outline-none focus:bg-white" id="Proveedor" type="text" />
          </div>

          {/*Año */}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Ano">Año</label>
            <input className="rounded-full block w-1/2 bg-gray-300 text-gray-700 border text-center py-3 px-4 mb-3 leading-tight lg:mx-40 focus:outline-none focus:bg-white" id="Ano" type="text" />
          </div>

          {/*Color*/}

          <div className="my-3 md:w-2/4  inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Color">Color</label>
            <div>
              <ColorPicker />
            </div>
          </div>

          {/*Estado del vehiculo*/}

          <div>
            <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2  text-center text-xl underline my-8"> Estado Del vehiculo</label>
          </div>

          {/*Estado actual*/}

          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-4 text-center" for="Estado">Estado actual: </label>

            <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">

              <div class="flex items-center mr-4 mb-4">
                <input id="radio1" type="radio" name="radio" class="hidden" checked />
                <label for="radio1" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                  Disponible
                </label>
              </div>

              <div class="flex items-center mr-4 mb-4">
                <input id="radio2" type="radio" name="radio" class="hidden" />
                <label for="radio2" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    Apartado
                </label>
              </div>

              <div class="flex items-center mr-4 mb-4">
                <input id="radio3" type="radio" name="radio" class="hidden" />
                <label for="radio3" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    Trade
                  </label>
              </div>

              <div class="flex items-center mr-4 mb-4">
                <input id="radio4" type="radio" name="radio" class="hidden" />
                <label for="radio4" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    Repo
                </label>
              </div>
              <div class="flex items-center mr-4 mb-4">
                <input id="radio5" type="radio" name="radio" class="hidden" />
                <label for="radio5" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    Devuelto
                  </label>
              </div>
            </div>
          </div>

          {/*Inspeccionado*/}

            
          <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-4 text-center" for="Inspeccionado">Inspeccionado</label>
            
            <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div class="flex items-center mr-4 mb-4">
                  <input id="radio1" type="radio" name="radio" class="hidden" checked />
                  <label for="radio1" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    Si</label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio2" type="radio" name="radio" class="hidden" />
                  <label for="radio2" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    No</label>
                </div>
              </div>
            </div>



            <div className="my-3 md:w-1/2 inline-block p-8">
              <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Titulo">Titulo</label>
              <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio1" type="radio" name="radio" class="hidden" checked />
                  <label for="radio1" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    Si</label>
                </div>
                <div class="flex items-center mr-4 mb-4">
                  <input id="radio2" type="radio" name="radio" class="hidden" />
                  <label for="radio2" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                    No</label>
                </div>
               </div>
            </div>


            <div className="my-3 md:w-1/2 inline-block p-8">
              <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="LienHolder">Lien Holder</label>
              <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div class="flex items-center mr-4 mb-4">
                <input id="radio1" type="radio" name="radio" class="hidden" checked />
                <label for="radio1" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                  Si</label>
              </div>
              <div class="flex items-center mr-4 mb-4">
                <input id="radio2" type="radio" name="radio" class="hidden" />
                <label for="radio2" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                  No</label>
              </div>
              </div>
            </div>

            <div className="my-3 md:w-1/2 inline-block p-8">
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="Codigo"> Limpieza</label>
            <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
              <div class="items-center mr-4 mb-4">
                <input id="radio1" type="radio" name="radio" class="hidden" checked />
                <label for="radio1" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                  Salvage</label>
              </div>
              <div class="items-center mr-4 mb-4">
                <input id="radio2" type="radio" name="radio" class="hidden" />
                <label for="radio2" class="flex items-center cursor-pointer">
                  <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
                  Clean</label>
              </div>
            </div> 
            </div>


          
           
          
            <div class="mx-8 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="PrecioCompra">Valor Compra</label>
          <input className="  rounded-full  mx-24  bg-gray-300 text-gray-700  text-center  py-3 px-4 mb-3  focus:bg-white" id="PrecioCompra" type="text" />
          </div>
          <div class="md:w-1/2 px-3">
            
            <label className="block uppercase tracking-wide text-gray-700 text-m font-bold mb-2 text-center" for="ValorInvertido">Valor invertido</label>
            <input className="     rounded-full mx-20  bg-gray-300 text-gray-700  text-center  py-3 px-4 mb-3  focus:bg-white" id="ValorInvertido" type="text" />
            
            
          </div>
          <div class="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text- font-bold mb-2 text-center" for="Precio Final">Precio Final</label>
          <input className="   rounded-full mx-24 bg-gray-300 text-gray-700  text-center py-3 px-4   focus:bg-white" id="ValorInvertido" type="text" />
          
          </div>
        </div>
           
           

            


            <Link to="/">
            <div className='sm:mx-16 md:mx-72 lg:72p-8 my-3'>
            <button class="mx-40 bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full ">
            Agregar Vehiculo
          </button>
          </div>
            
            </Link>


        </form>
        /* 
        
        
        */      </div>

    );
  }
}
export default Agregar;
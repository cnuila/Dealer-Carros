import React from "react";
import ColorPicker from './Filtros/ColorPicker';

class Agregar extends React.Component{
    render() {
        return (
          <div className="bg-gray-100">
          {/*Inicio del navbar*/}
          <nav className="justify-center flex items-center justify-between flex-wrap bg-gray-900 p-3">
            <div className="flex items-center ml-2 mb-3 lg:ml-0 lg:mb-0 flex-shrink-0 text-white mr-6">
              <span className="font-bold text-4xl tracking-tight pl-10">
                Santos Motors
              </span>
            </div>
            <div className="flex items-center">
              <button className="ml-8 focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-1 px-4 rounded inline-flex items-center">
                <svg className="w-8 h-8 mr-3 fill-current text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.001 488.001">
                  <path
                    className="active-path"
                    d="M462.6 214.404l-39.2-17.9-34.6-55.2c-10-16-27.6-25.7-46.5-25.6H194.9c-17.1 0-33.3 7.9-43.7 21.5l-44.7 58.5-74.5 20.4c-18.9 5.2-32 22.5-32 42.1v28.5c0 24.1 19.2 44 43.3 44h6.4c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h168c7.7 29.7 38 47.5 67.7 39.8 19.5-5.1 34.8-20.3 39.8-39.8h12c24.1 0 43.3-19.9 43.3-44v-32.5c.1-17.1-9.9-32.7-25.4-39.8zm-359.2 137.7c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm275.5 0c-19.6 0-35.5-15.9-35.5-35.5s15.9-35.5 35.5-35.5 35.5 15.9 35.5 35.5c.1 19.5-15.8 35.4-35.5 35.5zm65.8-41.4h-10.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1H158.6c-3.3-30.5-30.8-52.5-61.3-49.1-25.9 2.8-46.3 23.3-49.1 49.1h-5c-13.1 0-23.3-10.9-23.3-24v-28.5c-.1-10.7 7-20 17.3-22.9l77.9-21.3c2.1-.6 4-1.8 5.3-3.6l46.6-61.1c6.7-8.6 17-13.6 27.9-13.6h147.4c12-.1 23.3 6 29.6 16.2l36.2 57.8c1 1.7 2.6 3 4.3 3.8l41.8 19.1c8.4 3.9 13.8 12.3 13.7 21.6v32.5h.1c0 13.1-10.2 24-23.3 24z"
                    data-original="#000000" data-old_color="#000000" />
                </svg>
                <span>Agregar</span>
              </button>
              <button className="focus:outline-none bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="w-6 h-6 mr-2 fill-current text-gay-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M19 10l-6-5v3H6v4h7v3l6-5zM3 3h8V1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H3V3z" />
                </svg>
                <span>Log out</span>
              </button>
            </div>
          </nav>
          {/*fin del navbar  .bg-gray-400*/ }
          
           {/*Inicio Formulario*/}
           
           
          {/*este primer div hacer el trabajo de un container*/}
           <div class=" w-full inline-block w-center">
             <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  text-center text-2xl">Agregar Carro</label>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  text-center text-xl">Informacion General</label>
           {/*Marca*/}
          <div class="flex content-start  -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  text-center "for="Marca" >Marca</label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border text-center rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Marca" type="text" >
      </input>
      
    </div>

 {/*fin Marca*/}

     {/*Modelo*/}
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Modelo">
             Modelo
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border text-center border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Modelo" type="text" >
          </input>
      </div>
  </div>

 {/*fin Modelo*/}

   {/*millaje*/}
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Millaje">
        Millaje
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border  text-center rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Mijalle" type="text" >
      </input>
      
    </div>

 {/*fin millaje*/}

     {/*El vin*/}
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Vin">
        Vin
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border text-center border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Vin" type="text" >
          </input>
      </div>
  </div>

 {/*fin vin*/}

   {/*codigo*/}
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Codigo">
        Codigo
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border text-center rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Codigo" type="text" >
      </input>
      
    </div>
 {/*fin Codigo*/}

     {/*Proveedor*/}
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Proveedor">
        proveedor
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border text-center border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Proveedor" type="text" >
          </input>
      </div>
      
  </div>
  
 {/*fin Proveedor*/}

 
 {/*Ano*/}
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Anio">
        Año
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 border text-center rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Anio" type="text" >
      </input>
      
    </div>
    
 {/*fin ano*/}

 
 {/*Color*/}
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="Color">
        Color
      </label>
      <ColorPicker/>
      </div>
      </div>
 {/*fin Color*/}
 
           {/*Inicia seccion de radio botones*/}
           
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2  text-center text-xl">Estado Del vehiculo</label>
   {/*Inicia todo lo de estado*/}
  
  <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
  
    <div class="flex items-center mr-4 mb-4">
      <input id="radio1" type="radio" name="radio" class="hidden" checked />
      <label for="radio1" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
       Disponible</label>
     </div>
  
     <div class="flex items-center mr-4 mb-4">
      <input id="radio2" type="radio" name="radio" class="hidden" />
      <label for="radio2" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
       Apartado</label>
     </div>
    
      <div class="flex items-center mr-4 mb-4">
      <input id="radio3" type="radio" name="radio" class="hidden" />
      <label for="radio3" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
       Trade</label>
     </div>
   
   <div class="flex items-center mr-4 mb-4">
      <input id="radio4" type="radio" name="radio" class="hidden" />
      <label for="radio4" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
       Repo</label>
     </div>
   
   <div class="flex items-center mr-4 mb-4">
      <input id="radio5" type="radio" name="radio" class="hidden" />
      <label for="radio5" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
      Devuelto</label>
     </div>
   </div>
    {/*fin todo lo del estado*/}

    {/*Inicia Inspeccionado*/}
   <h1 class="mb-6 pt-6 mx-auto text-center"> Inspeccionado:</h1>
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
      {/*fin inspeccionado*/}

        <h1 class="mb-6 pt-6 mx-auto text-center"> Titulo:</h1>
         {/*Inicio titulo*/}
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
     {/*fin titulo*/}

      {/*Inicia Lien*/}
     <h1 class="mb-6 pt-6 mx-auto text-center"> Lien Holder:</h1>
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
        {/*fin lien*/}
    {/*Inicio salvage o clean*/}
  <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
  
    <div class="flex items-center mr-4 mb-4">
      <input id="radio1" type="radio" name="radio" class="hidden" checked />
      <label for="radio1" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
       Salvage</label>
     </div>
  
     <div class="flex items-center mr-4 mb-4">
      <input id="radio2" type="radio" name="radio" class="hidden" />
      <label for="radio2" class="flex items-center cursor-pointer">
       <span class="w-4 h-4 inline-block mr-1 rounded-full border border-black"></span>
       Clean</label>
     </div>
      {/*fin salvage o clean*/}
     {/*fin de los radio botones*/}

     
     </div>
          {/*Incia costos*/}
  
     <h1 class="mb-6 pt-6 mx-auto text-center"> Costos de vehiculo:</h1>

         
          <div class="w-full md:4 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs text-center font-bold mb-2 text-center" for="PrecioCompra">
        Valor Compra
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 text-center border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="PrecioCompra" type="text">
          </input>
      </div>
      <div class="w-full md:4 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="PrecioInvest">
        Valor invertido
      </label>
      <input class=" rounded-full block w-full bg-gray-300 text-gray-700 text-center border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="PrecioInvest" type="text" >
          </input>
      </div>
      <div class="w-full md:4  px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center" for="PrecioFinal">
        Precio Final
      </label>
      <input class="rounded-full block w-full bg-gray-300 text-gray-700 text-center border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="PrecioFinal" type="text" >
          </input>
      </div>
        <button class="bg-black w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
        Agregar Vehiculo
        </button>
   {/*fin costos*/}     
          </div>
          </div>
          );
      }
}
export default Agregar;
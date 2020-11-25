import React, { useState } from 'react';
//import { storage } from "src/firebase"

export default function ImagenPrincipal(props) {

    const [foto, setFoto] = useState(null)

    const subirFoto = e => {
        setFoto(URL.createObjectURL(e.target.files[0]))
        //storage.ref(this.VIN/this.file);
    }

    const borrarFoto = () => {
        setFoto(null)
    }

    const fotoLista = (
        <div className="relative bg-gray-400 rounded-lg h-64">
            <div className="grid grid-cols-1 absolute z-10 h-10 w-full rounded-t-lg bg-black bg-opacity-50">                
                <svg className="fill-current text-gray-400 hover:text-gray-600 mb-3 mr-3 inline-block h-4 w-4 place-self-end" onClick={borrarFoto} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 00-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 00-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"/>
                </svg>
            </div>                          
            <img
                className="z-0 h-full w-full animate__animated animate__zoomIn animate__faster rounded-lg object-cover shadow-md"
                alt="Foto Carro"
                src={foto}
            />                             
        </div>);

    const sinFoto = (
        <div className="relative h-64">
            <input type="file" className="absolute z-10 opacity-0 cursor-pointer w-full h-full" accept="image/jpeg,image/jpg" onChange={subirFoto} />
            <div className="z-0 grid grid-cols-1 rounded-lg place-content-center bg-gray-400 hover:bg-gray-500 h-full">                
                <svg className="fill-current text-gray-800 place-self-center inline-block h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124">
                    <path d="M18.1 54.5H0v51.4c0 3.1 2.5 5.6 5.6 5.6h112c3.5 0 6.4-2.9 6.4-6.4V35.6c0-3.4-2.7-6.1-6.1-6.1H89.1c-3 0-5.5-2.2-5.899-5.1l-1-6.6c-.5-2.9-3-5.3-5.9-5.3H47.5c-3 0-5.5 2.3-5.9 5.3l-1 6.6c-.4 2.9-3 5.1-5.9 5.1H6c-3.3 0-6 2.7-6 6v5h18.1c3.8 0 6.9 3.1 6.9 6.9v.1c0 3.9-3.1 7-6.9 7zM108 40.7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.1-7 7-7zm-45.7 2.5c16.601 0 30 13.4 30 30s-13.399 30-30 30c-16.6 0-30-13.4-30-30s13.5-30 30-30z" />
                    <circle cx="62" cy="73.2" r="15" />
                </svg>
            <h1 className="font-semibold text-center text-gray-800">Agregar Foto</h1>
            </div>            
        </div>        
    );

    return (
        <>
            {foto ? fotoLista : sinFoto}
        </>
    );
}
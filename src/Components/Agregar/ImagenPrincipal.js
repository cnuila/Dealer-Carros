import React, { useState } from 'react';
//import { storage } from "src/firebase"

export default function ImagenPrincipal(props) {

    const [foto, setFoto] = useState(null)

    const subirFoto = e => {
        setFoto(URL.createObjectURL(e.target.files[0]))
        //storage.ref(this.VIN/this.file);
    }

    const fotoLista = (
        <div className="h-48 m-3">
            <img
                className="transition duration-700 h-full w-full rounded-lg object-cover shadow-md"
                alt="Foto Carro"
                src={foto}
            />
        </div>);

    const sinFoto = (
        <div className="grid grid-cols-1 rounded-lg place-items-center bg-gray-400 hover:bg-gray-500 h-48 m-3">
            <input type="file" className="z-40 opacity-0 cursor-pointer bg-red-200 w-full h-48" accept="image/jpeg,image/jpg" onChange={subirFoto} />
            <div className="z-0 transform -translate-y-32 grid grid-cols-1 place-items-center">
                <svg className="fill-current text-gray-800 inline-block h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124">
                    <path d="M18.1 54.5H0v51.4c0 3.1 2.5 5.6 5.6 5.6h112c3.5 0 6.4-2.9 6.4-6.4V35.6c0-3.4-2.7-6.1-6.1-6.1H89.1c-3 0-5.5-2.2-5.899-5.1l-1-6.6c-.5-2.9-3-5.3-5.9-5.3H47.5c-3 0-5.5 2.3-5.9 5.3l-1 6.6c-.4 2.9-3 5.1-5.9 5.1H6c-3.3 0-6 2.7-6 6v5h18.1c3.8 0 6.9 3.1 6.9 6.9v.1c0 3.9-3.1 7-6.9 7zM108 40.7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.1-7 7-7zm-45.7 2.5c16.601 0 30 13.4 30 30s-13.399 30-30 30c-16.6 0-30-13.4-30-30s13.5-30 30-30z" />
                    <circle cx="62" cy="73.2" r="15" />
                </svg>
                <h1 className="font-semibold text-gray-800">Agregar Foto</h1>
            </div>
        </div>
    );

    return (
        <>
            {foto ? fotoLista : sinFoto}
        </>
    );
}
import React, { useState, useEffect } from "react";
import CarroSinFoto from "../../Imágenes/CarroSinFoto.jpg"
import { storage } from "../../firebase"

function Carro(props) {

  //definicion de hooks
  let [foto, setFoto] = useState(null)
  let [loading, setLoading] = useState(true)

  //traer props
  const { id, ano, marca, modelo, fotos, estado } = props.info;

  useEffect(() => {
    //obtener foto del storage
    if (fotos === undefined) {
      function noHayFoto() {
        setFoto(CarroSinFoto)
        setLoading(false)
      }
      noHayFoto()
    } else {
      let gsReference = storage.refFromURL(fotos[0])
      async function descargarFoto() {
        gsReference.getDownloadURL().then(direc => {
          setFoto(direc)
          setLoading(false)
        }).catch((err) => {
          console.log(err)
        })
      }
      descargarFoto()
    }
  })

  //mandar a principal el estado 
  const handleClick = (vin, estado) => {
    props.mostrarInfo(vin, estado)
  }

  //funcion que agrega coma al precio
  const coma = () => {
    let { precioFinal } = props.info;
    let precioS = precioFinal.toString();
    let cont = 0;
    let nuevoS = "";
    if (precioS.length > 3) {
      for (let i = precioS.length - 1; i >= 0; i--) {
        cont++;
        nuevoS = precioS.charAt(i).concat(nuevoS);
        if (cont === 3) {
          nuevoS = ",".concat(nuevoS);
          cont = 0;
        }
      }
      if (precioS.length % 3 === 0) {
        return nuevoS.substring(1, nuevoS.length);
      }
      return nuevoS;
    }
    return precioFinal.toString();
  }

  //definir el caracter de tipoTitulo
  let tipoTitulo
  if (typeof (props.info.salvage) !== "undefined") {
    if (props.info.salvage !== false) {
      tipoTitulo = "S"
    }
  }
  if (typeof (props.info.clean) !== "undefined") {
    if (props.info.clean !== false) {
      tipoTitulo = "C"
    }
  }

  let colorEstado = "text-green-500"
  if (estado === "Repo") {
    colorEstado = "text-red-600"
  } else if (estado === "Apartado") {
    colorEstado = "text-blue-600"
  } else if (estado === "Vendido") {
    colorEstado = "text-yellow-400"
  } else if (estado === "Reparacion") {
    colorEstado = "text-gray-400"
  }

  let fotoCargando = (<div className="relative pb-48 bg-gray-400 h-full w-full rounded-lg shadow-md"></div>)
  let fotoCargada = (
    <div className="relative pb-48">
      <img
        className="absolute h-full w-full object-cover rounded-lg shadow-md"
        alt="Carro"
        src={foto}
      />
    </div>)

  return (
    <div className=" w-full px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer" onClick={() => handleClick(id, true)}>
      {loading ? fotoCargando : fotoCargada}
      <div className="relative px-4 -mt-10">
        <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
          <div className="font-semibold text-md text-gray-100 mb-2 capitalize md:truncate">
            {ano + " " + marca + " " + modelo}
          </div>

          <div className="text-gray-500 text-sm font-medium mb-2">
            ${coma()}
          </div>

          <div className="grid grid-cols-3">
            <div className={`${colorEstado} text-sm mb-2 font-semibold`}>
              {estado}
            </div>
            <div className="col-start-3 flex justify-end text-gray-500 text-sm font-semibold">
              {tipoTitulo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carro;
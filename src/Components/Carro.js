import React from "react";
import { storage } from "../firebase"
import InfoCarro from "./InfoCarro";

function Carro(props) {
  /*funcion que agrega coma al precio*/
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

  const { id, ano, marca, modelo, fotos, estado } = props.info;

  let colorEstado = "text-green-500"
  if (estado === "Repo") {
    colorEstado = "text-red-600"
  } else if (estado === "Apartado") {
    colorEstado = "text-blue-600"
  } else if (estado === "Vendido") {
    colorEstado = "text-yellow-400"
  }

  let gsReference = storage.refFromURL(fotos[0])
  gsReference.getDownloadURL().then(direc => {
    document.getElementById("foto" + id).src = direc
  }).catch((err) => {
    console.log(err)
  })
  
  return (
    <div className="max-w-xs px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="relative pb-48">
        <img id={"foto" + id}
          className="absolute h-full w-full object-cover rounded-lg shadow-md"
          alt="Carro"
        />
      </div>
      <div className="relative px-4 -mt-10">
        <div className="px-6 py-4 bg-gray-900 rounded-lg shadow-xl">
          <div className="font-semibold text-md text-gray-100 mb-2 md:truncate">
            {ano + " " + marca + " " + modelo}
          </div>

          <div className="text-gray-500 text-sm font-medium mb-2">
            ${coma()}
          </div>

          <div className="grid grid-cols-4">
            <div className={colorEstado + " text-sm mb-2 font-semibold"}>
              {estado}
            </div>
            <div className="col-start-4 flex justify-end text-gray-500 text-sm font-semibold">
              {tipoTitulo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carro;

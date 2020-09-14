import React from "react";
import foto from "../modelx.jpg";

function Carro(props) {
  //funcion que agrega coma al precio
  function coma() {
    let { precio } = props;
    let precioS = precio.toString();
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
    return precio.toString();
  }

  let { ano, marca, modelo, estado, tipoTitulo } = props;
  return (
    <div className="max-w-xs px-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="relative pb-48">
        <img
          className="absolute h-full w-full object-cover rounded-lg shadow-md"
          src={foto}
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
            <div className="text-green-500 text-sm mb-2 font-semibold">
              {estado}
            </div>
            <div></div>
            <div></div>
            <div className="flex justify-end text-gray-500 text-sm font-semibold">
              {tipoTitulo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carro;

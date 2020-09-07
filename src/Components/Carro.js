import React from 'react';
import foto from '../modelx.jpg'
import foto2 from '../hola.jpg'


function Carro(props){
    //funcion que agrega coma al precio
    function coma() {
        let { precio } = props
        let precioS = precio.toString()
        let cont = 0
        let nuevoS = ""
        if (precioS.length > 3){
            for (let i = precioS.length - 1;i>=0;i--){
                cont++
                nuevoS = precioS.charAt(i).concat(nuevoS)
                if (cont === 3){
                    nuevoS = ",".concat(nuevoS)
                    cont = 0
                }
            }
            if (precioS.length % 3 === 0){
                return nuevoS.substring(1,nuevoS.length)
            }
            return nuevoS
        }
        return precio.toString()
    }

    let { ano, marca, modelo, estado, tipoTitulo } = props
    return(
        <div class="max-w-sm rounded-lg overflow-hidden shadow-2xl m-5 bg-gray-900">
            <img class="w-full h-56" src={foto} alt="Carro"/>
            <div class="px-6 py-4">
                <div class="font-extrabold text-xl text-gray-100 mb-2 md:truncate">{ano +" " +marca+" "+modelo}</div>
                <div class="text-gray-500 text-lg font-semibold mb-2">${coma()}</div>
                <div className="grid grid-cols-4">
                    <div className="text-green-400 text-lg mb-2 font-semibold">{estado}</div>
                    <div></div>
                    <div></div>
                    <div className="flex justify-end text-gray-500 text-lg font-semibold">{tipoTitulo}</div>
                </div>
            </div>
        </div>);
}

export default Carro;

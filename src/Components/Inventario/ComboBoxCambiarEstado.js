import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { db } from '../../firebase'

export default function ComboBox(props) {
    let { id, modelo, marca } = props.carro
    const [selected, setSelected] = useState(props.estados[0])

    const cambiarEstadoCarro = ({ target }) => {
        const { value } = target 
        const { estados } = props       
        //let seleccionado = estados.filter(estado => estado === value)        
        Swal.fire({
            title: '¿Estás Seguro?',
            text: "Se cambiará el estado del " + marca + " " + modelo + " a " + value ,
            icon: 'warning',

            background: '#F3F4F6',

            showCancelButton: true,

            confirmButtonColor: '#DB6600',
            confirmButtonText: 'Cambiar',

            cancelButtonColor: '#395494',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                let carroACambiar = db.collection("carros").doc(id)

                carroACambiar.update({
                    estado: value
                }).then(function () {
                    Swal.fire({ title: "Cambio exitoso!", icon: "success", text: "El estado del " + marca + " " + modelo + " se cambio a " + value})
                    props.estadoModal(false)
                }).catch(function (error) {
                    console.error("Error updating document: ", error);
                });
            } else {
                setSelected(estados[0])
            }            
        })
    }

    return (
        <select className="px-3 bg-gray-200 text-gray-900 ml-4 rounded-lg h-3/4 focus:outline-none cursor-pointer" name="estadoCarro" value={selected} onChange={cambiarEstadoCarro}>
            {props.estados.map((estado, index) => {
                let valor = estado
                if (index === 0) {
                    return (<option key={index} value={valor} disabled hidden>
                        {valor}
                    </option>)
                }
                return (<option key={index} value={valor}>
                    {valor}
                </option>)
            })}
        </select>
    )
    /*else if (estado === "Reparacion") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Reparacion">
                    Reparacion
                </option>
                <option value="Disponible">
                    Disponible
                </option>
            </select>
        )
    } else if (estado === "Repo") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Repo">
                    Repo
                </option>
                <option value="Disponible">
                    Disponible
                </option>
                <option value="Reparacion">
                    Reparacion
                </option>
                <option value="Apartado">
                    Apartados
                </option>
            </select>
        )
    } else if (estado === "Apartado") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Apartado">
                    Apartados
                </option>
                <option value="Disponible">
                    Disponible
                </option>
            </select>
        )
    } else if (estado === "Vendido") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Vendido">
                    Vendido
                    </option>
                <option value="Disponible">
                    Disponible
                    </option>
                <option value="Reparacion">
                    Reparacion
                    </option>
                <option value="Repo">
                    Repo
                    </option>
            </select>
        )
    }*/
}

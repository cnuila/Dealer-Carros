import React from 'react'
import Swal from 'sweetalert2';
import { db } from '../../firebase'

export default function ComboBox(props) {
    let { estado, id, modelo, marca} = props.carro

    const cambiarEstadoCarro = () => {
        let estadoSeleccionado = document.getElementById("estadoCarro").value
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Se cambiara el estado del " + marca + " " + modelo + " a " + estadoSeleccionado ,
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
                    estado: estadoSeleccionado
                }).then(function () {
                    Swal.fire({ title: "Cambio exitoso!", icon: "success", text: "El estado del " + marca + " " + modelo + " se cambio a " + estadoSeleccionado})
                }).catch(function (error) {
                    console.error("Error updating document: ", error);
                });
            }
        })
    }

    if (estado === "Disponible") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Disponible">
                    Disponible
                </option>
                <option value="Reparacion">
                    Reparacion
                </option>
                <option value="Repo">
                    Repo
                </option>
                <option value="Apartado">
                    Apartados
                </option>
            </select>
        )
    } else if (estado === "Reparacion") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Reparacion">
                    Reparacion
                </option>
                <option value="Disponible">
                    Disponible
                </option>
                <option value="Repo">
                    Repo
                </option>
                <option value="Apartado">
                    Apartados
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
                <option value="Reparacion">
                    Reparacion
                </option>
                <option value="Repo">
                    Repo
                </option>
            </select>
        )
    } else if (estado === "Vendido") {
        return (
            <select className="px-3 bg-gray-200 ml-4 rounded-lg h-3/4" id="estadoCarro" onChange={cambiarEstadoCarro}>
                <option value="Vendido">
                    Vendido
                    </option>
                <option value="Apartados">
                    Apartados
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
    }
}

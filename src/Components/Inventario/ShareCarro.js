import React from 'react'
import Swal from 'sweetalert2'

export default function ShareCarro() {

    const opciones = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-500 rounded-lg focus:outline-none mx-2 px-4 py-3',
                cancelButton: 'bg-gray-500 rounded-lg focus:outline-none mx-2 px-4 py-3'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: '¿Por dónde lo quieres compartir?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '<svg class="mt-1 h-3/4 w-4 fill-current text-gray-200 " viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg"><path d="M512 233.82L299.223.5v139.203h-45.239C113.711 139.703 0 253.414 0 393.687v73.77l20.094-22.02a360.573 360.573 0 01266.324-117.5h12.805v139.204zm0 0" /></svg> Whatsapp',
            cancelButtonText: 'Correo',
        })
    }

    return (
        <div className="w-8 h-3/4 grid justify-items-center" onClick={opciones}>
            <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200 " viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 233.82L299.223.5v139.203h-45.239C113.711 139.703 0 253.414 0 393.687v73.77l20.094-22.02a360.573 360.573 0 01266.324-117.5h12.805v139.204zm0 0" />
            </svg>
        </div>
    )
}


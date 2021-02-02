import React from 'react'
import Swal from 'sweetalert2'

export default function ShareCarro() {
    const clickShareCarro = () => (
        Swal.fire({ title: "Oops!", icon: "warning", text: "Lo sentimos pero esta funcion sigue en desarrollo." })
    )
    const opciones = () => {
        const alertModificada = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-500 rounded-lg focus:outline-none mx-2 px-4 py-3',
                cancelButton: 'bg-gray-500 rounded-lg focus:outline-none mx-2 px-4 py-3'
            },
            buttonsStyling: false
        })
        alertModificada.fire({
            title: '¿Por dónde lo quieres compartir?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '<div class="grid place-items-center"><svg class="mt-1 h-6 w-6 fill-current text-gray-200 " viewBox="-23 -21 682 682.667" xmlns="http://www.w3.org/2000/svg"><path d="M544.387 93.008C484.512 33.063 404.883.035 320.05 0 145.246 0 2.98 142.262 2.91 317.113c-.024 55.895 14.577 110.457 42.331 158.551L.25 640l168.121-44.102c46.324 25.27 98.477 38.586 151.55 38.602h.134c174.785 0 317.066-142.273 317.132-317.133.036-84.742-32.921-164.418-92.8-224.36zM320.05 580.94h-.11c-47.296-.02-93.683-12.73-134.16-36.742l-9.62-5.715-99.766 26.172 26.628-97.27-6.27-9.972c-26.386-41.969-40.32-90.476-40.296-140.281.055-145.332 118.305-263.57 263.7-263.57 70.406.023 136.59 27.476 186.355 77.3s77.156 116.051 77.133 186.485C583.582 462.69 465.34 580.94 320.05 580.94zm144.586-197.418c-7.922-3.968-46.883-23.132-54.149-25.78-7.258-2.645-12.547-3.962-17.824 3.968-5.285 7.93-20.469 25.781-25.094 31.066-4.625 5.29-9.242 5.953-17.168 1.985-7.925-3.965-33.457-12.336-63.726-39.332-23.555-21.012-39.457-46.961-44.082-54.89-4.617-7.938-.04-11.813 3.476-16.173 8.578-10.652 17.168-21.82 19.809-27.105 2.644-5.29 1.32-9.918-.664-13.883-1.977-3.965-17.824-42.969-24.426-58.84-6.437-15.445-12.965-13.36-17.832-13.601-4.617-.231-9.902-.278-15.187-.278-5.282 0-13.868 1.98-21.133 9.918-7.262 7.934-27.73 27.102-27.73 66.106s28.394 76.683 32.355 81.972c3.96 5.29 55.879 85.328 135.367 119.649 18.906 8.172 33.664 13.043 45.176 16.695 18.984 6.031 36.254 5.18 49.91 3.14 15.226-2.277 46.879-19.171 53.488-37.68 6.602-18.51 6.602-34.374 4.617-37.683-1.976-3.304-7.261-5.285-15.183-9.254zm0 0" fill-rule="evenodd" /></svg> <h1 class="text-gray-200 font-semibold">Whatsapp</h1></div>',
            cancelButtonText: '<div class="grid place-items-center"><svg class="mt-1 h-6 w-6 fill-current text-gray-200 " viewBox="0 0 511.996 511.996" xmlns="http://www.w3.org/2000/svg"><path d="M511.996 127.512v-8.079c0-30.419-24.748-55.166-55.166-55.166H55.166C24.747 64.267 0 89.014 0 119.433v273.133c0 30.417 24.747 55.163 55.166 55.163h401.667c30.417 0 55.163-24.746 55.163-55.163V127.571v-.059zM55.166 94.267H456.83c13.876 0 25.166 11.289 25.166 25.166v.007L281.1 253.37c-13.372 8.915-36.83 8.914-50.2.001L30 119.439v-.007c0-13.876 11.289-25.165 25.166-25.165zm401.667 323.462H55.166C41.289 417.729 30 406.441 30 392.566V155.494l184.259 122.838c11.704 7.803 26.719 11.703 41.74 11.703 15.017 0 30.039-3.901 41.742-11.703l184.256-122.838v237.072c-.001 13.875-11.289 25.163-25.164 25.163z"/></svg> <h1 class="text-gray-200 font-semibold">Correo</h1></div>',
        }).then(async (result) => {
            console.log(result)
            if (result.isConfirmed) {
                const { value: numeroWhatsapp } = await Swal.fire({
                    title: 'Ingresa el número de Whatsapp',
                    input: 'text',
                    inputPlaceholder: "99999999",
                    showCancelButton: true,
                    inputValidator: (valor) => {
                        if (!valor) {
                            return 'Debes ingresar un número de celular'
                        }
                        if (valor.match(/[a-z]/i)) {
                            return 'Solo puedes ingresar números'
                        }
                        if (valor.match(/\s/i)) {
                            return 'No pueden haber espacios entre los números'
                        }
                    }
                })
                if (numeroWhatsapp) {
                    console.log("wha", numeroWhatsapp)
                }
            } else {
                const { value: email } = await Swal.fire({
                    title: 'Ingresa el correo',
                    input: 'email',
                    inputPlaceholder: 'john@va.com'
                })
                if (email) {

                }
            }
        })
    }

    return (
        <button type="button" className="w-8 h-3/4 grid justify-items-center focus:outline-none" onClick={clickShareCarro}>
            <svg className="mt-1 h-3/4 w-4 fill-current text-gray-200 " viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 233.82L299.223.5v139.203h-45.239C113.711 139.703 0 253.414 0 393.687v73.77l20.094-22.02a360.573 360.573 0 01266.324-117.5h12.805v139.204zm0 0" />
            </svg>
        </button>
    )
}


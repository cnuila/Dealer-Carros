import React from 'react'
import Swal from 'sweetalert2'

export default function OtrasImagenes(props) {

    const handleFiles = ({ target }) => {
        const { files } = target
        const { imagenes } = props
        let arrayFotos = [...imagenes]
        if (arrayFotos.length <= 4) {
            if ((arrayFotos.length + files.length) <= 5) {
                for (let i = 0; i < files.length; i++) {

                    arrayFotos.push(files[i])
                }
                props.mandarFotos(arrayFotos)
            } else {
                Swal.fire(
                    '¡Ops!',
                    'La cantidad de fotos que elegiste excede el máximo que es 5',
                    'warning'
                )
            }
        } else {
            Swal.fire(
                '¡Ops!',
                'El máximo de fotos que puedes escoger es 5',
                'warning'
            )
        }
    }

    const activo = props.imagenes[0] === null || props.imagenes.length === 0
        ? (<div className="flex relative bg-gray-900 hover:bg-gray-700 rounded-3xl disabled:opacity-50 mx-8 mt-6 h-11 items-center shadow-lg cursor-pointer" onClick={() => Swal.fire('¡Ops!', 'Debes seleccionar la foto principal primero', 'error')}>
            <div className="z-0 mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                Agregar más fotos
                </div>
        </div>)
        : props.imagenes.length >= 2
            ?
            (<div className="flex relative bg-gray-900 hover:bg-gray-700 rounded-3xl mx-8 mt-6 h-11 items-center shadow-lg cursor-pointer">
                <input type="file" className="absolute z-10 opacity-0 cursor-pointer w-full h-full" accept="image/jpeg,image/jpg" multiple onChange={handleFiles} />
                <div className="z-0 mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                    Agregar más fotos
                </div>
            </div>)
            : (<div className="flex relative bg-gray-900 hover:bg-gray-700 rounded-3xl mx-8 mt-6 h-11 items-center shadow-lg cursor-pointer">
                <input type="file" className="absolute z-10 opacity-0 cursor-pointer w-full h-full" accept="image/jpeg,image/jpg" multiple required onChange={handleFiles} />
                <div className="z-0 mx-1 text-center w-full text-sm font-semibold focus:outline-none text-gray-200">
                    Agregar más fotos
                    </div>
            </div>)

    return (
        activo
    )
}

import React from 'react'

export default function OtrasImagenes(props) {

    const handleFiles = ({ target }) => {
        const { files } = target
        const { imagenes } = props
        let arrayFotos = [...imagenes]
        if (arrayFotos.length <= 4){
            if ((arrayFotos.length + files.length) <= 5){
                for (let i = 0; i < files.length; i++) {
    
                    arrayFotos.push(files[i])
                }
                props.mandarFotos(arrayFotos)
            } else {
                alert("La cantidad de fotos que elegiste excede el máximo que es 5")
            }
        } else {
            alert("El máximo de fotos es 5")
        }        
    }

    const activo = props.imagenes[0] === null || props.imagenes.length === 0
        ? (<div className="flex relative bg-gray-900 hover:bg-gray-800 rounded-3xl disabled:opacity-50 mx-8 mt-6 h-11 items-center shadow-lg cursor-pointer" onClick={() => alert("Debes seleccionar la foto principal primero")}>                
                <div className="z-0 mx-1 text-center w-full text-sm font-semibold focus:outline-none text-white">
                    Agregar más fotos
                </div>
            </div>)
        : (
            <div className="flex relative bg-gray-900 hover:bg-gray-800 rounded-3xl mx-8 mt-6 h-11 items-center shadow-lg cursor-pointer">
                <input type="file" className="absolute z-10 opacity-0 cursor-pointer w-full h-full" accept="image/jpeg,image/jpg" multiple required onChange={handleFiles} />
                <div className="z-0 mx-1 text-center w-full text-sm font-semibold focus:outline-none text-white">
                    Agregar más fotos
                </div>
            </div>)

    return (
       activo 
    )
}

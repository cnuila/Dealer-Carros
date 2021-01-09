import React from 'react'

export default function Pasos(props) {

    const {index, texto, selected, terminado } = props

    const agregar = index !== 1 ? "mx-9" : ""

    const seleccionado = ( 
        <div className={`flex z-10 flex-col ${agregar} items-center`}>
            <div className="bg-gray-200 rounded-full px-3 py-1 text-gray-900 font-bold ring-2 ring-gray-200 ring-offset-gray-900 ring-offset-4">
                {index}
            </div>
            <div className="mt-3">
                <h1 className="text-gray-200 text-xs">{texto}</h1>
            </div>
        </div>)

    const noSeleccionado = (
        <div className={`flex z-10 flex-col ${agregar} items-center`}>
            <div className="bg-gray-200 rounded-full px-3 py-1 text-gray-900 font-bold">{props.index}</div>
            <div className="mt-3">
                <h1 className="text-gray-200 text-xs">{props.texto}</h1>
            </div>
        </div>
    )

    const listo = (
        <div className={`flex z-10 flex-col ${agregar} items-center`}>
            <div className="flex relative items-center">
                <div className="absolute z-0 h-5 w-5 ml-2 bg-gray-800"></div>
                <svg className="z-10 fill-current rounded-full h-8 w-8 text-gray-200" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm129.75 201.75L247.082 340.414c-4.16 4.16-9.621 6.254-15.082 6.254s-10.922-2.094-15.082-6.254l-69.332-69.332c-8.344-8.34-8.344-21.824 0-30.164 8.34-8.344 21.82-8.344 30.164 0l54.25 54.25 123.586-123.582c8.34-8.344 21.82-8.344 30.164 0 8.34 8.34 8.34 21.82 0 30.164zm0 0" />
                </svg>
            </div>
            <div className="mt-3">
                <h1 className="text-gray-200 text-xs">{props.texto}</h1>
            </div>
        </div>
    )

    let mostrar = (<></>)
    if(selected){
        mostrar = seleccionado
    } else {
        if (terminado){
            mostrar = listo
        } else {
            mostrar = noSeleccionado
        }
    }

    return (
        mostrar
    )
}

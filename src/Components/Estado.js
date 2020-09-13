import React from 'react'

function Estado(props) {
    let salida
    let icono = "w-4 h-4 fill-current " + props.color
    if (props.selected === true) {
        salida = (
            <button className="my-2 focus:outline-none bg-gray-900 text-gray-400 text-sm py-2 px-4 rounded-lg inline-flex items-center w-32"
                onClick={() => { props.clicEstadoCarro(props.estado) }}>
                <svg className={icono} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.107 29.107">
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z" />
                </svg>
                <span className="flex-1">{props.estado}</span>
            </button>)
    } else {
        salida = (
            <button className="my-2 focus:outline-none bg-gray-300 hover:bg-gray-200 text-gray-900 text-sm py-2 px-4 rounded-lg inline-flex items-center w-32"
                onClick={() => { props.clicEstadoCarro(props.estado) }}>
                <svg className={icono} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.107 29.107">
                    <path d="M14.554 0C6.561 0 0 6.562 0 14.552c0 7.996 6.561 14.555 14.554 14.555 7.996 0 14.553-6.559 14.553-14.555C29.106 6.562 22.55 0 14.554 0z" />
                </svg>
                <span className="flex-1">{props.estado}</span>
            </button>)
    }
    return (
        <div>{salida}</div>
    );
}

export default Estado
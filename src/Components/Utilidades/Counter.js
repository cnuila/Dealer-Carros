import React from 'react'

function Counter(props) {

    //mandar como props funcion handleInputChange y hacer {target} en ella en el padre
    const mandarPadre = (valor) => {
        let target = {
            name: props.nombre,
            type: "text",
            value: valor,
        }
        let evento = {
            target
        }
        props.handleInputChange(evento)
    }

    //Cuando se escribe en el input
    const handleChange = ({ target }) => {
        let { value } = target
        let { valor } = props
        let nuevoValor
        if ((value - 0) === 0) {
            nuevoValor = "Cualquiera"
        } else {
            nuevoValor = value
            if (valor === "Cualquiera") {
                nuevoValor = nuevoValor.substring(nuevoValor.length - 1)
            }
            if (!isNaN(nuevoValor - 0)) {
                nuevoValor = nuevoValor - 0
            } else {
                nuevoValor = valor
            }
        }
        mandarPadre(nuevoValor)
    }

    //Cuando se usa el boton de menos
    const decrement = () => {
        let { minimo, step, valor } = props
        let nuevoValor = valor
        if (nuevoValor !== "Cualquiera") {
            nuevoValor -= step
            let valorGuardar = nuevoValor
            if (nuevoValor === 0) {
                valorGuardar = "Cualquiera"
            } else {
                if (nuevoValor < minimo) {
                    valorGuardar = "Cualquiera"
                }
            }
            mandarPadre(valorGuardar)
        }
    }

    //Cuando se usa el boton de mas
    const increment = () => {
        let { minimo, step, valor } = props
        let nuevoValor = valor
        if (nuevoValor === "Cualquiera") {
            if (minimo === 0) {
                nuevoValor = 0
            } else {
                nuevoValor = minimo - 1
            }
        }
        nuevoValor += step
        mandarPadre(nuevoValor)
    }

    return (
        <div className="h-10 w-48 transform scale-75">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button type="button" className="bg-gray-800 text-gray-100 hover:text-gray-200 hover:bg-gray-700 h-full w-20 rounded-l cursor-pointer focus:outline-none"
                    onClick={decrement}>
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                {props.required 
                    ? (<input className="flex items-center bg-gray-800 w-full border-none focus:ring-0 text-center font-semibold text-md text-gray-100 hover:text-gray-500 focus:text-gray-500 focus:outline-none  md:text-basecursor-default"
                       type="text" value={props.valor} onChange={handleChange} />)
                    : (<input className="flex items-center bg-gray-800 w-full border-none focus:ring-0 text-center font-semibold text-md text-gray-100 hover:text-gray-500 focus:text-gray-500 focus:outline-none  md:text-basecursor-default"
                        type="text" value={props.valor} onChange={handleChange}/>)}                

                <button type="button" className="bg-gray-800 text-gray-100 hover:text-gray-200 hover:bg-gray-700 h-full w-20 rounded-r cursor-pointer focus:outline-none"
                    onClick={increment}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    );
}

Counter.defaultProps = {
    valor: 0,
    minimo: 0,
    step: 1,
    required:false,
};

export default Counter;
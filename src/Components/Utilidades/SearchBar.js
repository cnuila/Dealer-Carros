import React, { useState } from 'react'
import { db } from "../../firebase"

/*const sugerencias = [{ tipo: "Proveedor", valor: "Trade" }, { tipo: "Marca", valor: "Honda" },
{ tipo: "Modelo", valor: "Civic" }, { tipo: "Marca", valor: "Tesla" },
{ tipo: "Modelo", valor: "Model X" }, { tipo: "Proveedor", valor: "Frank" },
{ tipo: "Proveedor", valor: "Grupo Q" }, { tipo: "Marca", valor: "Aston Martin" },
{ tipo: "Modelo", valor: "Corolla" }, { tipo: "Marca", valor: "Toyota" },
{ tipo: "Marca", valor: "Kia" }, { tipo: "Modelo", valor: "Sportage" },
{ tipo: "Marca", valor: "Ford" }, { tipo: "Modelo", valor: "CR-V" },
{ tipo: "Modelo", valor: "Focus" }]*/

export default function SearchBar(props) {

    const sugerencias = props.sugerencias
    const [sugerenciaActual, setSugerenciaActual] = useState(-1)
    const [sugerenciasFiltradas, setSugerenciasFiltradas] = useState([])
    const [mostrarSugerencias, setMostrarSugerencias] = useState(false)
    const [palabra, setPalabra] = useState("")

    const handleOnChange = ({ target }) => {
        const input = target.value
        const sugerenciasTemp = sugerencias.filter(sugerencia => sugerencia.valor.toLowerCase().indexOf(input.toLowerCase()) > -1)
        setSugerenciaActual(-1)
        setSugerenciasFiltradas(sugerenciasTemp)
        if (sugerenciasTemp.length === 0) {
            setMostrarSugerencias(false)
        } else {
            setMostrarSugerencias(true)
        }
        setPalabra(input)
    }

    const handleOnKeyDown = ({ keyCode }) => {
        if (keyCode === 13) {
            //reiniciar state y buscar
            if (sugerenciaActual !== -1 || palabra !== "") {

                let query = db.collection("carros")

                if (sugerenciaActual !== -1) {
                    query = query.where(sugerenciasFiltradas[sugerenciaActual].tipo.toLowerCase(), "==", sugerenciasFiltradas[sugerenciaActual].valor.toLowerCase())
                    setPalabra(sugerenciasFiltradas[sugerenciaActual].valor)
                }
                if (sugerenciaActual === -1 && palabra !== "") {
                    console.log("va")
                    let existe = sugerencias.filter(sugerencia => {
                        return sugerencia.valor === palabra
                    })
                    if (existe.length === 1) {
                        query = query.where(existe[0].tipo.toLowerCase(), "==", existe[0].valor.toLowerCase())
                    } else {
                        query = query.where("marca", "==", "no")
                    }
                }
                props.mostrarConsulta(query)
                setSugerenciaActual(-1)
                setMostrarSugerencias(false)
                setSugerenciasFiltradas([])
            }
        } else if (keyCode === 8) {
            //delete
            if (palabra.length === 1) {
                setSugerenciaActual(-1)
                setMostrarSugerencias(false)
                setSugerenciasFiltradas([])
                setPalabra("")
            }
        } else if (keyCode === 38 && mostrarSugerencias === true) {
            //flecha arriba 
            if (sugerenciaActual !== -1) {
                if (sugerenciaActual === 0) {
                    setPalabra(sugerenciasFiltradas[sugerenciasFiltradas.length - 1].valor)
                    setSugerenciaActual(sugerenciasFiltradas.length - 1)
                } else {
                    setPalabra(sugerenciasFiltradas[sugerenciaActual - 1].valor)
                    setSugerenciaActual(prevValor => prevValor - 1)
                }
            }
        } else if (keyCode === 40 && mostrarSugerencias === true) {
            //flecha abajo
            if (sugerenciaActual === sugerenciasFiltradas.length - 1) {
                setPalabra(sugerenciasFiltradas[0].valor)
                setSugerenciaActual(0)
            } else {
                setPalabra(sugerenciasFiltradas[sugerenciaActual + 1].valor)
                setSugerenciaActual(prevValor => prevValor + 1)
            }
        }
    }

    const handleOnClick = sugerencia => {
        setSugerenciaActual(-1)
        setSugerenciasFiltradas([])
        setMostrarSugerencias(false)
        setPalabra(sugerencia.valor)
        //buscar
        let query = db.collection("carros").where(sugerencia.tipo.toLowerCase(), "==", sugerencia.valor.toLowerCase())
        props.mostrarConsulta(query)
    }

    const handleOnBlur = () => {
        setTimeout(() => {
            setMostrarSugerencias(false)
            setSugerenciaActual(-1)
            setSugerenciasFiltradas([])
        }, 100)
    }

    const handleOnFocus = () => {
        if (mostrarSugerencias === false && sugerenciasFiltradas.length !== 0) {
            setMostrarSugerencias(true)
        }
    }

    let roundedSearch = "rounded-3xl"
    if (mostrarSugerencias) {
        roundedSearch = "rounded-t-3xl"
    }

    return (
        <div className="flex flex-col relative w-full md:w-2/5" onBlur={handleOnBlur} onFocus={handleOnFocus}>
            <div className={`group flex flex-row bg-gray-200 ${roundedSearch}`}>
                <svg className="ml-5 mr-4 h-5 w-5 fill-current text-gray-500 group-hover:text-gray-600 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612.01 612.01">
                    <path d="M606.209 578.714L448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 00.018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z" />
                </svg>
                <input type="text" value={palabra} className="rounded-3xl bg-gray-200 w-10/12 text-gray-900 pl-1 pr-4 py-2  focus:outline-none" name="searchBar" placeholder="Buscar Marca, Modelo, o Proveedor" onKeyDown={handleOnKeyDown} onChange={handleOnChange} />
            </div>
            {mostrarSugerencias
                ? (
                    <ul className="w-full absolute z-50 transform translate-y-10">
                        {sugerenciasFiltradas.map((sugerencia, index) => {
                            if (index <= 7) {
                                let ultimo = ""
                                let seleccionado = "bg-gray-200 hover:bg-gray-300"
                                if (index === 7 || index === sugerenciasFiltradas.length - 1) {
                                    ultimo = "rounded-b-3xl"
                                }
                                if (index === sugerenciaActual) {
                                    seleccionado = "bg-gray-400"
                                }
                                return (
                                    <li key={index} className={`flex flex-row py-1 px-4 cursor-pointer capitalize ${seleccionado} ${ultimo}`} onClick={() => handleOnClick(sugerencia)}>
                                        <h3 className="pl-10 text-gray-900">{sugerencia.valor}</h3>
                                        <h3 className="pl-1 text-gray-700">- {sugerencia.tipo}</h3>
                                    </li>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </ul>)
                : (<></>)
            }
        </div>
    )
}

import React from 'react'

function Filtros(props) {
    if (props.mostrarFiltros === true) {
        return (
            <div className="transition ease-in-out duration-700">
                Hola mundo
                <div>
                    Hola mundo
                </div>
                <div>
                    Hola mundo
                </div>
                <div>
                    Hola mundo
                </div>
                <div>
                    Hola mundo
                </div>
            </div>
        );
    }
    return null
}

export default Filtros;

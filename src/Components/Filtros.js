import React from 'react'

function Filtros(props) {
    return (
        <div className={"grid grid-cols-2 bg-green-400 mx-12 transform scale-75 sm:scale-100 translate-y-" + props.moverFiltros}>
            <div>
                Proveedor
            </div>
            <div>
                Año
            </div>
            <div>
                Color
            </div>
            <div>
                Inspecionado
            </div>
            <div>
                Titulo
            </div>
            <div>
                Lien Holder
            </div>
            <div>
                Salvage
            </div>
        </div>
    );
}

export default Filtros;

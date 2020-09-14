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
            <label class="block">
                <span class="text-gray-700">Multiselect</span>
                <select class="form-multiselect block w-full mt-1" multiple>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
            </label>
        </div>
    );
}

export default Filtros;

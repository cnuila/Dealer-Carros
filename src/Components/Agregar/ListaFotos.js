import React, {useState} from 'react'

function ListaFotos() {

    const [listFotos, setListFotos] = useState([{mostrar:true},{mostrar:false},{mostrar:false},{mostrar:false}])

    return (
        <>
          {listFotos[0].mostrar ? <div className="m-3 bg-blue-400">hi</div> : null}
          {listFotos[1].mostrar ? <div className="m-3 bg-blue-400">hi</div> : null}
          {listFotos[2].mostrar ? <div className="m-3 bg-blue-400">hi</div> : null}
          {listFotos[3].mostrar ? <div className="m-3 bg-blue-400">hi</div> : null}
        </>
    )
}

export default ListaFotos;

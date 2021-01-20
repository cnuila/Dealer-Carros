import React, { useState } from 'react'
import CarroSinFoto from "../../Imágenes/CarroSinFoto.jpg"

export default function FotoInfoCarro(props) {
    
    //definicion de hooks
    let [foto, setFoto] = useState(null)
    let [loading, setLoading] = useState(true)


    useEffect(() => {
        //obtener foto del storage
        if (fotos === undefined) {
            function noHayFoto() {
                setFoto(CarroSinFoto)
                setLoading(false)
            }
            noHayFoto()
        } else {
            let gsReference = storage.refFromURL(props.foto)
            async function descargarFoto() {
                gsReference.getDownloadURL().then(direc => {
                    setFoto(direc)
                    setLoading(false)
                }).catch((err) => {
                    console.log(err)
                })
            }
            descargarFoto()
        }
    },[])

    return (
        <div>
            
        </div>
    )
}

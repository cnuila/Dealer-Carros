import React from 'react'
import Navbar from '../Navbar'
function NuevoPago() {
    return (
        <div>
            <Navbar componente="nuevo pago"/>
            <div className="bg-gray-200">
                
                <div className="shadow-2xl py-7 min-h-screen flex justify-center">
                    <div className="grid grid-cols-3 h-80 w-4/5 relative py-4 place-items-center bg-gray-900 rounded-t-lg cursor-default border-b-2 border-gray-800">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoPago

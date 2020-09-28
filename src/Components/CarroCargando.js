import React from 'react'

export default function CarroCargando() {
    return (
        <div className="px-4 w-full">
            <div className="animate-pulse">
                <div className="relative pb-48 bg-gray-400 h-full w-full rounded-lg shadow-md"></div>
                <div className="relative px-4 -mt-10">
                    <div className="px-6 py-4 bg-gray-500 rounded-lg shadow-xl">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-400 rounded"></div>
                                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

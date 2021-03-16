import React, { createContext } from 'react'


const DarkContextProvider = createContext()

export default function DarkContext() {
    return (
        <DarkContextProvider.Provider value={{}}  >
            
        </DarkContextProvider.Provider>
    )
}

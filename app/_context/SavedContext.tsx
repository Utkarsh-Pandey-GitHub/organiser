"use client"

import React, { useState } from "react"

const SavedContext = React.createContext({})


export const useSavedContext = () => {
    return React.useContext(SavedContext)
}

export  function SavedContextProvider({
    children
}:{
    children: React.ReactNode
}){
    const [saved, setSaved] = useState<React.ReactNode[]>([])

    return (
        <SavedContext.Provider value={{saved, setSaved}}>
            {children}
        </SavedContext.Provider>
    )
}

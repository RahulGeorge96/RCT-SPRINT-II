// C=Create P=Provide C=consume

import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({children})=>{

    let [data , setData] = useState([])

    function handleDataUpdates(nData){
        setData(nData)
    }

    return(
        <DataContext.Provider value={{data , handleDataUpdates}}>
            {children}
        </DataContext.Provider>
    )
}
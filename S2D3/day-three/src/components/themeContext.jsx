import { createContext, useState } from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children})=>{
    const [ theme , setTheme ] = useState(false)

    function handleTheme(){
        setTheme((ele)=> ele ? false : true)
    }

    return(
        < ThemeContext.Provider value={{theme , handleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

// <houseContext>=> <grandparent> => <parent> => <child>
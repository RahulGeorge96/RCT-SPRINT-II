//CPC

import { useState } from "react";
import { createContext } from "react";

export const MovieContext = createContext()

export const MovieContextProvider = ({children})=>{

    let [movieData , setMovieData] = useState([])

    function UpdateMovieData(data){
        setMovieData(data)
    }

    return(
        < MovieContext.Provider value={{movieData , UpdateMovieData}} >
          {children}
        </ MovieContext.Provider>
    )

}
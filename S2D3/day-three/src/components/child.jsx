import { useState , useContext } from "react"
import { houseContext } from "./houseContext"
import { ThemeContext } from "./themeContext"

export const Child = ()=>{

    const {house , updateHouse} = useContext(houseContext)

    const {theme , handleTheme} = useContext(ThemeContext)

    return(
        <div className={theme ? "dark" : "light"}>
        <h3>child :{house} </h3>
        <button onClick={updateHouse}>update House</button>
        <button onClick={handleTheme}>Theme</button>
        </div>
    )
}


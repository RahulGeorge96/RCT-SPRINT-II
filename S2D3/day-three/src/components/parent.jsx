import { useContext, useState } from "react"
import { Child } from "./child"
import { houseContext } from "./houseContext"
import { ThemeContext } from "./themeContext"

export const Parent = ()=>{

   const {house , updateHouse} = useContext(houseContext)

   const {theme , handleTheme} = useContext(ThemeContext)

    return(
        <div className={theme ? "light" : "dark"}>
            <h2>Parent : {house}</h2>
            <button onClick={updateHouse}>update House</button>
            <button onClick={handleTheme}>Theme</button>
            <Child/>
        </div>
    )
}
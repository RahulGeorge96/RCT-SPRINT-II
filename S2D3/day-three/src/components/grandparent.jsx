import { useState , useContext } from "react"
import { Parent } from "./parent"
import { houseContext } from "./houseContext"
import { ThemeContext } from "./themeContext"


export const Grandparent = ()=>{
    const {house , updateHouse} = useContext(houseContext)

    const {theme , handleTheme} = useContext(ThemeContext)

    // console.log("grandparent " , theme , handleTheme)

    return(
        <div className={theme ? "dark" : "light"}>

            <h1>GrandParent : {house} </h1>
            <button onClick={updateHouse}>update House</button>
            <button onClick={handleTheme}>Theme</button>
            <Parent />
           
        </div>
    )
}

// create provide consume


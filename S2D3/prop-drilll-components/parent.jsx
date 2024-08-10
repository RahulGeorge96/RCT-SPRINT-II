import { useState } from "react"
import { Child } from "./child"

export const Parent = ({house , updateHouse})=>{

    return(
        <div>
            <h2>Parent : {house}</h2>
            <button onClick={updateHouse}>update House</button>
            <Child house={house} updateHouse={updateHouse} />
        </div>
    )
}
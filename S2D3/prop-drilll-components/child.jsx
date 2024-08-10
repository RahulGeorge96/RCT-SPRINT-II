import { useState } from "react"

export const Child = ({house , updateHouse})=>{

    return(
        <div>
        <h3>child :{house} </h3>
        <button onClick={updateHouse}>update House</button>
        </div>
    )
}
import { useState } from "react"
import { Parent } from "./parent"

export const Grandparent = ()=>{
    let [house , setHouse] = useState(3)

    function updateHouse(){
        setHouse((house)=>house+1)
    }

    return(
        <div>

            <h1>GrandParent : {house} </h1>
            <button onClick={updateHouse}>update House</button>
            <Parent house={house} updateHouse={updateHouse} />
           
        </div>
    )
}
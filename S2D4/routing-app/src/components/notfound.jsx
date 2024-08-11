import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const NotFound = ()=>{

    let [count , setCount] = useState(5)
    let navigate = useNavigate()
    let timeoutId ;

    useEffect(()=>{

       if(count == 0){
         clearInterval(timeoutId)
         navigate("/")

       } 

       timeoutId =  setTimeout(()=>{
            setCount(count-1)
        } , 1000)


        return ()=>clearInterval(timeoutId)

    } , [count])

    return(
        <div>
            <h2>404 Not Found</h2>
            <h3>we'll redirect you to homepage in {count} secs.</h3>
        </div>
    )
}
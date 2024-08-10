import { useEffect, useRef, useState } from "react"

export const RenderRef = ()=>{
    let refCount = useRef(0)
    let [count , setCount] = useState(0)
    let [toggle , setToggle] = useState(false)

    function handleClick (value){
      if(value){
        refCount.current += 1
        // setCount(refCount.current)
      }else{
        refCount.current -= 1
        // setCount(refCount.current)
      }
      console.log(refCount)
    }
    



    return(
        <>
          <button onClick={()=>handleClick("")}>Dec</button>
          <h2>{count}</h2>
          <button onClick={()=>handleClick("+")}>Inc</button>
          <button onClick={()=>setToggle(!toggle)} >{toggle  ? "light" : "dark"}</button>
        </>
    )
}



// useRef => if we change this particular value , don't wanna re-render

// useState => re-renders  
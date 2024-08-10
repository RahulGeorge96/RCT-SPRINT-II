import {useRef , useEffect} from "react"

export const RefEx = ()=>{
    const inputReference = useRef(null);

    const handleClick = ()=>{
     
    }
  
    useEffect(()=>{
      inputReference.current.focus()
    } , [])
  
    return (
      <>
       <input ref={inputReference} />
       <button onClick={handleClick}>Go</button>
      </>
    )
}
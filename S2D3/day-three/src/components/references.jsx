import { useEffect, useRef, useState } from "react"

const References = ()=>{
 
    let [count , setCount] = useState(0)
    let [flag , setFlag] = useState(false)
    let ref = useRef(0)

    function handleClick(val){
        // console.log(ref)
        if(val){
            // setCount(count+1)
            ref.current = ref.current+1
        }else{
            // setCount(count-1)
            ref.current = ref.current-1
        }
        console.log(ref)
    }

    useEffect(()=>{
        console.log("component just rendered")
    }  )

    return (
       <div>
            <button onClick={()=>handleClick("")}>-</button>
            <h2>{count}</h2>
            <button onClick={ ()=>handleClick("+")}>+</button>
            <button onClick={()=>setFlag(!flag)} >Toggle</button>
       </div>
    )
}

export default References

// useState => this is changed the component re-renders


// useState(()=>{} )  // this will run for each and every re-renders .

// useState(()=>{} , []) // irrespective of any state , it will only run when the 
//                          component mounts . 

// useState(()=>{} , [state1 , state2]) // this will run for each state mentioned
//                                           in the depe. array . 


// if a variable is updated => you don't wanna re-render the component. 


// ref => we can reference a specific element
//        it can be used as varible which can be mutated without triggering any re-renders
import { useEffect, useState } from "react"

export const Counter = ()=>{
    let [count , setCount] = useState(0)

    useEffect(()=>{
      let intervalID =  setInterval(()=>{
        console.log(count)
       } , 1000)

       return ()=> clearInterval(intervalID); // cleanup function
    } , [count])

    return (
        <div>
        <button onClick={()=>setCount((count)=>count-1)}>Dec</button>
        <input value={count} />
        <button onClick={()=>setCount(count+1)}>Inc</button>
        </div>
    )
}

export const Display = ()=>{}

// export => default , named


// 1. component is mounted => useEffect => setInterval starts => count = 0

// 2. dependancy array has [count] as a dependent , that means whenever count is updated 
// state will get updated (re-render => component will get unmounted and then mounted again) . 

// 3. return in useEffect will basically cleanup whatever was left in the last component


// useEffect => dependency array => re-renders the component and run the useEffect code whenever a dependent state is updated . 
//           => cleanup function => cleans up the component with a return statement once the component is unmounted . 
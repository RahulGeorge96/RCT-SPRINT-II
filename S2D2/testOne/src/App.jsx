import { useState , useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RenderRef } from './components/RenderRef'
import { RefEx } from './components/refEx'

function App() {

  let [flag , setFlag] = useState(false)

return(<>
   <button onClick={()=>setFlag(!flag)}>Change Component</button>

   <div>
    {
     flag ? 
      <RefEx/>
      :
      <RenderRef/>
    }
   </div>
   
</>)
}

export default App

// 


// focus

// document.getElementById("input").focus()

// // document => ("click" , ()=>{
//   document.getElementById("input").focus()
// })

// useRef => can be used to refer a specific element 
//        => it can be used to persist data under multiple re-renders        
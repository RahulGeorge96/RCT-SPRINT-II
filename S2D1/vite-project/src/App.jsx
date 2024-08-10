import {useState} from 'react'
import {Counter , Display} from './components/counter'
import { ShowData } from './components/ShowData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/>
    </>
  )
}

export default App


// default export => export one fn or variable only

// parent => let arr = [{a:1} , {b:2} , {c:3} , {d:4} , {e:5}]

// Key => a  and  Value => 1

// app.jsx 

// ---

// Display.jsx


//---

// name export => {Counter ,   Display  ,  ShowData}

// obj
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormData } from './components/form'
import { ShowData } from './components/showdata'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [data , setData] = useState({})
  const [dataFlag , setDataFlag] = useState(false)
  const URL = 'https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/Todos.json'

  
  useEffect(()=>{
    axios.get(URL)
    .then((res)=>{
        // console.log(res.data)
        setData(res.data)
    })
  } , [dataFlag])

  return (
    <>

      <FormData dataFlag={dataFlag} setDataFlag={setDataFlag} />
      <ShowData dataFlag={dataFlag} setDataFlag={setDataFlag} data={data} />
      </>
  )
}

export default App

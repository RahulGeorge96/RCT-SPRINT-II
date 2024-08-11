import { useEffect, useState , useContext } from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import axios from 'axios'
import { DataContext } from './components/dataContext'
import { RouteData } from './utils/routes'
import { PrivateRoute } from './components/privateroute'

function App() {
  const {data , handleDataUpdates} = useContext(DataContext)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      handleDataUpdates(res.data)
    })
  } , [])

  let loggedIn = true; 

  return (
    <div>
     <Navbar/> 
     <div className='routes-container'> 
     <Routes>
        {
          RouteData.map((ele)=>{
             return (

              <Route path={ele.path} element={ele.element} />
              
             )
          })
        }
     </Routes>
     </div>

    </div>
  )
}

export default App

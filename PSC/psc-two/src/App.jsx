import { useState , useContext } from 'react'
import {Routes , Route} from "react-router-dom"
import './App.css'
import { Home } from './components/home'
import { Login } from './components/login'
import { Signup } from './components/signup'
import { Wishlist } from './components/wishlist'
import { Navbar } from './components/navbar'
import { MovieContext } from './context/movieContext'
import { useEffect } from 'react'
import axios from "axios"
import { PrivateRoute } from './components/privateroute'
import { Cards } from './components/cards'


function App() {

  let {movieData , UpdateMovieData} = useContext(MovieContext)
  let KEY = import.meta.env.VITE_OMDB_API

  useEffect(()=>{

    axios.get(`https://www.omdbapi.com/?apikey=${KEY}&s=avenger`)
    .then((res)=>{
      UpdateMovieData(res.data.Search)
    })
    .catch((err)=>console.log(err))

  } , [])


  return (
    <div>

      <Navbar/>

      <div className='container'>
      <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/wishlist' element={<PrivateRoute><Wishlist/></PrivateRoute>} />
          <Route path='/cards' element={<PrivateRoute><Cards/></PrivateRoute>} />
      </Routes>
     
      </div>

    </div>
  )
}

export default App


// CRA => REACT_APP    => process.env

// Vite => VITE_       => import.meta.env


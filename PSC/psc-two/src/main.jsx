import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import { MovieContextProvider } from './context/movieContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthContextProvider>
  <MovieContextProvider>
    <Router>
        <App />
      </Router>
  </MovieContextProvider> 
  </AuthContextProvider> 
  </StrictMode>,
)

import "../styles/navbar.css"
import {Link , NavLink, useNavigate} from "react-router-dom"

export const Navbar = ()=>{
    let navigate = useNavigate()
    return (
        <div className="nav-container">
          <NavLink to="/" style={({isActive})=>({color : isActive ? "green" : "blue"})}>Home</NavLink>
          <NavLink to="/posts" style={({isActive})=>({color : isActive ? "green" : "blue"})} >Posts</NavLink>
          <NavLink to="/about" style={({isActive})=>({color : isActive ? "green" : "blue"})} >About</NavLink>
          <NavLink to="/login" style={({isActive})=>({color : isActive ? "green" : "blue"})} >Login</NavLink>
          <NavLink to="/signup" style={({isActive})=>({color : isActive ? "green" : "blue"})} >SignUp</NavLink>
        </div>
        
    )
}
 
// Navlink => customized css

// style={{color : "red"}}

// style={()=>{}} => {{color : red : blue}}

// onClick={handleCLick} 


// handleClick(){
//      fetch()
     
//      sending => next page
// }


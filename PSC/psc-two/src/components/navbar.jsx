import {useNavigate} from "react-router-dom"
import "../styles/navbar.css"

export const Navbar = ()=>{

    const navigate = useNavigate()

    function handleClick(path){
            navigate(path)
    }
    return(
        <div className="navbar-container">
            <button onClick={()=>handleClick("/")}>Home</button>
            <button onClick={()=>handleClick("/login")}>Login</button>
            <button onClick={()=>handleClick("/signup")}>Signup</button>
            <button onClick={()=>handleClick("/wishlist")}>Wishlist</button>
            <button onClick={()=>handleClick("/cards")} >Cards</button>
        </div>
    )
}
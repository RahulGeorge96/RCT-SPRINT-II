import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Wishlist } from "./wishlist"
import {Navigate} from "react-router-dom"

export const PrivateRoute = ({children})=>{

    let {isAuth} = useContext(AuthContext)

    // {auth : bool , email : string}
    console.log(isAuth)

    return(
        <>
         {
            isAuth.auth ? children  : <Navigate to="/login" />
         }
        </>
    )


}



{/* <PrivateRoute>
    <app/>
</PrivateRoute> */}
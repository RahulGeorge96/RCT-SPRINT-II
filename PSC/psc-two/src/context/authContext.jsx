import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    let [isAuth , setIsAuth] = useState({
        auth : false , 
        user : ""
    })
     
    function UpdateIsAuth(flag , email){
        setIsAuth(
            {
             auth : flag, 
             user : email
            }
        )
    }

    return (
        <AuthContext.Provider value={{isAuth , UpdateIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

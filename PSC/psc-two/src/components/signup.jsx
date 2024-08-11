import { useEffect } from "react"
import { useRef } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

export const Signup = ()=>{
    const URL = `https://rct-practice-1-default-rtdb.asia-southeast1.firebasedatabase.app/credentials.json`;
    let emailRef = useRef()
    let passwordRef = useRef()
    let navigate = useNavigate()

    useEffect(()=>{
        emailRef.current.focus()
    } , [])

    let handleSubmit = (e)=>{
       e.preventDefault()  
       let obj = {email : emailRef.current.value ,
        password : passwordRef.current.value
      }

        axios.post(URL , obj)
        .then((res)=>{
            alert("Registration succesfull !!")
            navigate("/login")
        })
    }

    return(
        <div>

            <form onSubmit={handleSubmit}>

                <input ref={emailRef} placeholder="email" />
                <input ref={passwordRef} type="password" placeholder="password" />
                <input type="submit" />

            </form>

        </div>
    )
}
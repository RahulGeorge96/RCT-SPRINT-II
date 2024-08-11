import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = ()=>{

    let emailRef = useRef("")
    let passwordRef = useRef("")

    let navigate = useNavigate()

    const handleSubmit = (e)=>{
         e.preventDefault()

        let obj = {email : emailRef.current.value ,
                   password : passwordRef.current.value}

        axios.post(`https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/credentials.json` , obj) 
        .then(()=>{
            navigate('/login')
        })   
        .catch((err)=>console.log(err))       
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <input ref={emailRef} placeholder="email"/>
            <input ref={passwordRef} placeholder="password" />
            <input type="submit"/>
        </form>
    )
}
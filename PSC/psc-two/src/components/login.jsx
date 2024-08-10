import { useEffect , useContext } from "react"
import { useRef } from "react"
import axios from "axios"
import { AuthContext } from "../context/authContext"
import {useNavigate} from "react-router-dom"

export const Login = ()=>{

    const URL = `https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/credentials.json`
    let emailRef = useRef()
    let passwordRef = useRef()
    let {isAuth , UpdateIsAuth} = useContext(AuthContext)
    let navigate = useNavigate()

    useEffect(()=>{
        emailRef.current.focus()
    } , [])

    let handleSubmit = (e)=>{
       e.preventDefault()

       let obj = {email : emailRef.current.value ,
                  password : passwordRef.current.value
                }

       axios.get(URL)
       .then((res)=>{
          let flag = false ; 
          Object.entries(res.data).map(([id , ele])=>{
                if(ele.email == obj.email  && ele.password == obj.password){
                      UpdateIsAuth(true , ele.email)
                      alert("login succesfull")
                      navigate('/')
                      flag = true

                }
                return ele
          })

          if(!flag){
            alert("Invalid credential")
            navigate("/signup")
          }
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
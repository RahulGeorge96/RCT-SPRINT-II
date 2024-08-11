import { useRef } from "react"

export const Login = ()=>{
    let emailRef = useRef("")
    let passwordRef = useRef("")

    const handleSubmit = (e)=>{
         e.preventDefault()

        let obj = {email : emailRef.current.value ,
                   password : passwordRef.current.value}

        console.log(obj)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input ref={emailRef} placeholder="email"/>
            <input ref={passwordRef} placeholder="password" />
            <input type="submit"/>
        </form>
    )
}
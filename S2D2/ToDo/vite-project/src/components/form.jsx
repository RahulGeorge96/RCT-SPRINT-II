import "../styles/form.css"
import axios from "axios"

export const FormData = ({dataFlag , setDataFlag})=>{

    let URL = 'https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/Todos.json'

    const handleSubmit =  (e) =>{
         e.preventDefault()

         let obj = {
            title : e.target[0].value , 
            priority : e.target[1].value
         }

         axios.post(URL , obj)
         .then(()=>{
            alert("data saved in firebase")
            e.target[0].value = ""
            e.target[1].value = ""
            setDataFlag(!dataFlag)

         })
         .catch((err)=>console.log(err))
         
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="ToDo Title"/>
            <select>
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="submit" />
        </form>
        </>
    )
}
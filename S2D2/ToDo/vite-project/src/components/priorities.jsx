import { useState } from "react"
import axios from "axios"

export const Priority = ({id,ele , dataFlag , setDataFlag})=>{
    let [toggle , setToggle] = useState(true)

    const handleClick =  ()=>{
        setToggle(!toggle)
        console.log(id)
    }

    const handleUpdateClick = (e)=>{
        setToggle(!toggle)
        console.log(e.target.value)
        if(e.target.value){
            // ele.priority = e.target.value
            axios.patch(`https://fir-mk-1-default-rtdb.asia-southeast1.firebasedatabase.app/Todos/${id}.json` , {...ele , priority : e.target.value})
            .then(()=>{
                alert("data updated successfully")
                setDataFlag(!dataFlag)
            })
            .catch((err)=>console.log(err))
        }else{
            alert('you have to pick values from High , Med or Low only')
        }
    
    }

    return (
        <div key={id}>
        <p><b>Title : </b> {ele.title} </p>
        <p><b>Priority : </b> {ele.priority}</p>
        {
            toggle ? 
            <button onClick={handleClick}>Update Priority</button>
            :
            <div>
                 <select onChange={handleUpdateClick}>
                    <option value="">Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option> 
                </select>
            </div>
        }
        </div>
    )
}
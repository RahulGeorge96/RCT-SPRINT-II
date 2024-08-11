import { useParams } from "react-router-dom"

export const Posts = ()=>{

    let {id} = useParams();

    // data.filter((id))

    return (
        <div>
            <h2>Posts : {id}</h2>
        </div>
    )
}
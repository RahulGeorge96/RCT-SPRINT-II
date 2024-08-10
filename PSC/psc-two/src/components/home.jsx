import { useContext } from "react"
import { MovieContext } from "../context/movieContext"
import "../styles/homegrid.css"

export const Home = ()=>{

    let {movieData} = useContext(MovieContext)
   
    let handleClick = (id)=>{
        
    }

    return(
        <div className="home-grid">
            {
                movieData.map((ele)=>{
                    return(
                        <div>
                            <img src={ele.Poster} alt={ele.imdbID} />
                            <h3>{ele.Title}</h3>
                            <button onClick={()=>handleClick(ele.imdbID)}>Add to wishlist</button>
                        </div>    
                    )
                })
            }
        </div>
    )
}
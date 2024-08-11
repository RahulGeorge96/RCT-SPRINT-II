import axios from "axios"
import { useContext, useState } from "react"
import { DataContext } from "./dataContext"

export const Product = ()=>{

    const {data , handleDataUpdates} = useContext(DataContext)

  
    return(
        <div>
            <h1>Product Page</h1>
            <div>
               {
                data.map((ele)=>{
                    return(
                        <div>
                            <p><b>Title : </b> {ele.title} </p>
                        </div>
                    )
                })
               }
            </div>
        </div>
    )
}

// window.location.href => replace
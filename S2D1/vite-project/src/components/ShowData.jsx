import axios from "axios"
import { useState , useEffect } from "react"

export const ShowData = ()=>{

    let URL = `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`
    let [data , setData] = useState([])
    let [page , setPage] = useState(1)


    const getData = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then((res)=>{
             setData(res.data)
            })
        .catch((err)=>console.log(err))
    }

    // useEffect(cb func  , dependency array) || useEffect(()=>{} , [])

    useEffect(()=>{
        getData()
    } , [page ]) 

    return(
        <>
        <div>
            <button onClick={()=>setPage(page-1)} disabled={page == 1}>prev</button>
            <h2>{page}</h2>
            <button onClick={()=>setPage(page+1)} >next</button>
        </div>
         <div>
            {
                data.map((ele)=>{
                    return(
                        <div key={ele.id}>
                            <p><b>{ele.id}. Title : </b> {ele.title}</p>
                        </div>
                    )
                })
            }
         </div>
        </>
    )
}

// 1) useEffect => [] => once => Mounted

// 2) useEffect => [para] => whenever para state changes this useEffect will run again

// name export => multiple

// default export => 1

// useEffect is also used to handle side-effects


// function greet({
//     console.log(a+b)

//     fetch(URL)
//     setInterval("hello" , 2000)
// }

// greet()
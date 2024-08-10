// // controlled and uncontrolled

// import { useRef, useState } from "react"

// // wrt REACT

// // 

// const Controlled = ()=>{

//     let [value , setValue] = useState("")

//     function handleSubmit(){
//      console.log(value)
//     }

//     return (
//         <>
//          <input value={value} onChange={()=>setValue(value)} />
//          <button onSubmit={handleSubmit}>submit</button>
//         </>
//     )

// }

// "avengers".length



// const uncontrolled = ()=>{

//     let refInput = useRef("")
//     let [value , setValue] = useState("")
//    // {current : ""}

//     function handleSubmit(){
//       setValue(refInput.current.value)
//     }

//     return (
//         <>
//          <input ref={refInput} />
//          <button onSubmit={handleSubmit}>submit</button>
//         </>
//     )


// }

// 1
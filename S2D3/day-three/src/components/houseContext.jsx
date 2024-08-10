import { createContext , useState } from "react"

export let houseContext = createContext();

export const HouseProvider = ({children})=>{
    let [house , setHouse] = useState(3)

    function updateHouse(){
        setHouse((house)=>house+1)
    }

    return(

        <houseContext.Provider value={{house , updateHouse}} >
              {children}
        </houseContext.Provider>

    )
}



// CPC => create => provide => consume

// <component>
//     <childCOmponent></childCOmponent>
// </component>


// const component = ({childre})



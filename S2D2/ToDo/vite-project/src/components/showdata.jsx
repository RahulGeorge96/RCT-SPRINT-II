import "../styles/showdata.css"
import { Priority } from "./priorities"

export const ShowData = ({data , dataFlag , setDataFlag})=>{

   let nData = Object.entries(data) 

   let lowPriority = nData.filter(([id , ele])=>{
      return ele.priority == "Low"
   })

   let medPriority = nData.filter(([id , ele])=>{
    return ele.priority == "Medium"
 })

   let highPriority = nData.filter(([id , ele])=>{
    return ele.priority == "High"
 })

  return (
    <div className="showdata-container">
        <div className="low">
              {
                lowPriority.map(([id , ele])=>{
                    return (
                       <Priority dataFlag={dataFlag} setDataFlag={setDataFlag} id={id} ele={ele} />
                    )
                })
              }
        </div>
        
        <div className="med">
        {
                medPriority.map(([id , ele])=>{
                    return (
                        <Priority dataFlag={dataFlag} setDataFlag={setDataFlag} id={id} ele={ele} />
                    )
                })
              }
        </div>

        <div className="high">
        {
                highPriority.map(([id , ele])=>{
                    return (
                        <Priority dataFlag={dataFlag} setDataFlag={setDataFlag} id={id} ele={ele} />
                    )
                })
              }
        </div>
    </div>
  )
}
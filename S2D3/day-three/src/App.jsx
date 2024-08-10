import { useState } from 'react'
import References from './components/references'
import './App.css'
import { Grandparent } from './components/grandparent'
import { HouseProvider } from './components/houseContext'
import { ThemeContext, ThemeProvider } from './components/themeContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <ThemeProvider>
      <HouseProvider>
          <Grandparent/>
      </HouseProvider>
    </ThemeProvider>
    
    
   
    
    </>
  )
}

export default App



// components == function

// ShowData(value)

// <ShowData value={value} />

// <ShowData value={value}>
//          <Component>
// </ShowData>

 
//  <ShowData value={value}  children={<Component>} />


// const ShowData = ({value , chidren}) => console.log(value , children)




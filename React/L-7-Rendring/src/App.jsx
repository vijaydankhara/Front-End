import { useState } from 'react'
import './App.css'
import Conditional from './Components/ConditionalRendring'
import 'bootstrap/dist/css/bootstrap.min.css';  // bootstrap
import Dropdowns from './Components/Dropdowns'
import Recips from './Components/Recipi';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Conditional/> */}
     {/* <Dropdowns/> */}
<Recips/>
    </>
  )
}

export default App

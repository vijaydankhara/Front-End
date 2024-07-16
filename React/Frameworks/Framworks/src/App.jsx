import { useState } from 'react'
import './App.css'
import Dropdowns from './Components/Dropdowns'
import 'bootstrap/dist/css/bootstrap.min.css';  // bootstrap
import SignInOnes from './Components/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dropdowns/>
      <SignInOnes/>
     
      
    </>
  )
}

export default App

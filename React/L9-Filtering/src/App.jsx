import { useState } from 'react'
import './App.css'
import List_Rendering from './Components/Filtering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List_Rendering/>
    </>
  )
}

export default App

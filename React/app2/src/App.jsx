import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <h1 className='h-screen w-full text-center text-2xl text-yellow-500 bg-green-200 font-bold'>Hello World</h1>
      </div>
    </>
  )
}

export default App

import React from 'react'
import CakeContainer from './Components/CakeContainer'
import CoffeeContainer from './Components/CoffeeContainer'


const App = () => {
  return (
    <div>
    <h1 className="bg-black text-white text-6xl text-center py-5 font-serif">Redux Logger</h1>
    <div className="flex flex-row items-center justy">
    <CakeContainer />
    <CoffeeContainer />
</div>
</div>
  )
}

export default App
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake } from '../rudux/Index'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)


    console.log(numOfCakes);
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1 className='my-10 text-4xl'>NumOfCakes: <span className='text-green-700 text-5xl'>{numOfCakes}</span></h1>
      <button className=' text-6xl rounded-full py-3 px-6 text-center bg-[#ff0000] text-[#000] hover:bg-indigo-800 hover:text-[#fff]' onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
    </div>
  )
}

export default CakeContainer
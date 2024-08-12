import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake , buy_choco } from '../rudux/Action'

const CakeContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)
    const numOfChocos = useSelector(state => state.numOfChoco)

    console.log('numOfCake' , numOfCakes);
    console.log('numOfChoco' , numOfChocos);
    


    console.log(numOfCakes);
    
    const dispatch = useDispatch()

  return (
    <div className='  gap-x-9 bg-indigo-500'>
      <h1>NumOfCakes:{numOfCakes}</h1>
      <h1>NumOfChocos:{numOfChocos}</h1>
     <div className='flex '>
     <button className='bg-pink-400 ' onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
      <button className='bg-pink-400 ' onClick={() => dispatch(buy_choco())}>Choco Decrement</button>
     </div>
    </div>
  )
}

export default CakeContainer
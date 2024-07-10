// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       <h1 style={{color: 'red'}}>Card Name is {props.name}</h1>
//       <h2>Card Price is {props.price}</h2>
//     </div>
//   )
// }

// export default Card


// Responsive Cards
import React from 'react'


function Card(props) {
  return (
    <div className='w-80 rounded-xl border-2 border-gray-100 hover:scale-105 transition duration-700 '>
      <img src={props.images} alt="" className='w-80 h-80 rounded-t-xl' />
      <div className='px-4 py-3 w-80'>
        <p className='text-xs text-gray-800 mr-3 uppercase'>Coffee</p>
        <p className='text-lg font-bold truncate'>{props.product}</p>
        <div className='flex items-center'>
        <p className='my-3 text-lg font-semibold'>{props.curPrice}</p>
        <del className='text-sm ml-2 font-semibold text-gray-700 '>{props.delPrice}</del>
        <i class="fa-solid fa-bag-shopping ml-auto"></i>

        </div>
      </div>
    </div>
  )
}

export default Card



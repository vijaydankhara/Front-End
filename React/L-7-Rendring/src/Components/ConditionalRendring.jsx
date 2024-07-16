import React from 'react'

/* Conditional Rendering */

export function Item({check , name}){
    // if(check){
    //     return <li className='bg-yellow-300 text-white text-4xl text-center my-5 py-2 ml-52 rounded-b-full'>{name}</li>
    // }
    // return <li className='bg-pink-400 text-black text-4xl text-center py-2 rounded-t-full ml-52'><del>{name}</del></li>

    return check ? <li className='bg-pink-400 text-black te my-2 text-center py-2 rounded-full ml-52'>{name}</li> : null
}

const Conditional = () => {
  return (
    <div>
      <h1 className='p-4 bg-green-400 text-white text-center text-4xl py-2 ml-52 rounded-full'>React Conditional Rendering</h1>
      <ul className='mt-6'>
        <Item check={false} name='Vivo'></Item>
        <Item check={true} name='Oppo'></Item>
        <Item check={false} name='Nokia'></Item>
        <Item check={true} name='Apple'></Item>
        <Item check={false} name='Redmi'></Item>
        <Item check={true} name='Tecno'></Item>
      </ul>
    </div>
  )
}

export default Conditional
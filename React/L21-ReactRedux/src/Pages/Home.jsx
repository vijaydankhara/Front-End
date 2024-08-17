import React from 'react'
import { useSelector  , useDispatch } from 'react-redux'
import { add_cart , remove_cart  , empty_cart } from '../redux/reduxCart/CartAction'

const Home = () => {

  const productData = useSelector((state => state.cart))

  console.log('HomeData' , productData);

  const dispatch = useDispatch()

  const product = {
    name:'iphone',
    color:'black',
    price:'60000',
  }

  return (
    <div className=''>
      <h1>This is Home Page</h1>
      
<div className="flex flex-col gap-y-5">
  
<div className='flex '>
    <button className='btn1' onClick={() => dispatch(add_cart(product))}>Add To Cart</button>
      <button className='btn1' onClick={() => dispatch(remove_cart(product))}>Remove To Cart</button>
      <button className='btn1' onClick={() => dispatch(empty_cart())}>Empty Cart</button>
    </div>

    <div className='flex '>
    <button className='btn2' onClick={() => dispatch(add_cart(product))}>Add To Wishlist</button>
      <button className='btn2' onClick={() => dispatch(remove_cart(product))}>Remove To Wishlist</button>
      <button className='btn2' onClick={() => dispatch(empty_cart())}>Empty Wishlist</button>
    </div>

  
</div>

    </div>
  )
}

export default Home

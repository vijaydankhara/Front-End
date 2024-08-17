import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_cart, remove_cart, empty_cart } from '../redux/reduxCart/CartAction';

const Home = () => {
  const [products, setProducts] = useState([]);

  //  USING TRY CATCH
  // const data = async() => {
  //   try{   
  //     let ecodata = await fetch('http://localhost:3000/ecomall')
  //     .then(ecodata => ecodata.json())
  //     .then(ecodata => console.log(ecodata))
  //     console.log(ecodata);
      
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  // data()

  // console.log('Home Data' , data);



  
  // Fetch data using Promises
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/ecomall')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse JSON from response
        })
        .then(data => {
          resolve(data); // Resolve the promise with the parsed data
        })
        .catch(error => {
          reject(error); // Reject the promise if there's an error
        
        });
    });
  };

  // // Use the promise and set the data to state
  useEffect(() => {
    fetchData()
      .then(ecodata => {
        setProducts(ecodata); // Save the fetched data to state
        // console.log('Fetched Data:', ecodata);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  console.log('Home Data:', products);

  const productData = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const product = {
    name: 'iphone',
    color: 'black',
    price: '60000',
  };

  return (
    <div>
      <h1>This is Home Page</h1>
      
      <div className="flex flex-col gap-y-5">
        <div className='flex'>
          <button className='btn1' onClick={() => dispatch(add_cart(product))}>Add To Cart</button>
          <button className='btn1' onClick={() => dispatch(remove_cart(product))}>Remove From Cart</button>
          <button className='btn1' onClick={() => dispatch(empty_cart())}>Empty Cart</button>
        </div>

        <div className='flex'>
          <button className='btn2' onClick={() => dispatch(add_cart(product))}>Add To Wishlist</button>
          <button className='btn2' onClick={() => dispatch(remove_cart(product))}>Remove From Wishlist</button>
          <button className='btn2' onClick={() => dispatch(empty_cart())}>Empty Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

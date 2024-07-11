import React from "react";
import styles from './Navbar.module.css'
import { useState } from "react";

const Navbar = () => {

    let initialState = 0

    const [count , setCount] = useState(initialState)

    const box =
        [
            {
                height: "100px",
                width: "200px"
            },
            {
                height: "100px",
                width: "200px"
            },
            {
                height: "100px",
                width: "200px"
            }
        ]
    return (
        <div>
            <h1 className={box[0]}>This is React Css Module Structure</h1>
           <span> Count No Is:-{count}</span><br />
           <div className="flex ">
           <button className="bg-green-500 text-white m-2 p-2 rounded-full
           " onClick={() => setCount('Vijay Dankhara')}>Increment</button> <br />
           <button className="bg-red-500 text-white m-2 p-2 rounded-full
           " onClick={() => setCount('Web Dewlopment')}>Decrement</button><br />
           <button className="bg-purple-500 text-white m-2 p-2 rounded-full
           " onClick={() => setCount(initialState)}>Reset</button>
           </div>
           <div className="flex ">
           <button className="bg-green-500 text-white m-2 p-2 rounded-full
           " onClick={() => setCount(count +1)}>Increment</button> <br />
           <button className="bg-red-500 text-white m-2 p-2 rounded-full
           " onClick={() => setCount(count -1)}>Decrement</button><br />
           <button className="bg-purple-500 text-white m-2 p-2 rounded-full
           " onClick={() => setCount(initialState)}>Reset</button>
           </div>
        </div>



    )
}

export default Navbar

// Object Style get Method [style module ]

// https://stackoverflow.com/questions/51498816/how-to-conditionally-apply-styles-in-a-react-component-with-css-modules

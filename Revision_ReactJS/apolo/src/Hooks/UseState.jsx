import React from 'react'
import { useState } from 'react'
import Counter from './Counter'

const UseState = () => {

    const [count, setCount] = useState(0)

    console.log(count);


    // let count = 0

    // function couter(){
    //     return console.log(count+=1);
    // }

    // console.log(count);

    function couter() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className='p-2 bg-purple-600 text-white text-center'>This is React useState Hook</h1>
            <Counter count={count}/>
            <button onClick={couter}>Click Me</button>
        </div>
    )
}

export default UseState

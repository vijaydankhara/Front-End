import React from 'react'
import { useState , useEffect } from 'react'


const List_Rendering = () => {

    const [postData , setPostData] = useState([])
    const [count , setCount] = useState(0)




    useEffect(function data(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPostData(json))
    })

    useEffect(() => console.log('UseEffect'))

    

    console.log('postdata' , postData);

 

  return (
    <div>
        <h1 className='text-center bg-purple-600 p-2'>This is List-Rendering in React</h1>
      <ul>
        {
            postData.map((item) => {
                return(
                    <li>
                        {item.title}
                    </li>
                )
            })
        }
      </ul>
      {/* <button onClick={data()}>Click For Data</button> */}
      <button onClick={() => setCount(count + 1)}>Click For Data</button>
    </div>
  )
}

export default List_Rendering
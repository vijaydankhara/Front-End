import React from 'react'
import { useState } from 'react'

const UseState2 = () => {

    // const[fullName , setFullName] = useState('')
    // const[email , setEmail] = useState('')
    // const[password , setPassword] = useState('')

    const [formData , setFormData] = useState({
        fullName:'',
        email:'',
        password:''
    })

    // console.log('formData' , formData);
    

    // console.log(fullName);
    // console.log(email);
    // console.log(password);
    
    
    // const handleFormData = (e) => {
    //     e.preventDefault()
    //     const formData = {
    //         fullName: e.target.value,
    //         email: e.target.value,
    //         password: e.target.value
    //     }

    //     console.log(formData);
    // }

    // const handleFormData = (e) => {
    //     e.preventDefault()
    //     setFullName('')
    //     setEmail('')
    //     setPassword('')
    // }

    return (
        <div>
            <h1 className='p-2 bg-purple-600 text-white text-center'>This is React useState Hook</h1>
            {/* <form action="">
                <label htmlFor="fullName">FullName</label>
                <input type="text" name="fullName" id="fullName" onChange={(e) => console.log({...formData , [e.target.name]:e.target.value})
                } /><br/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => console.log({...formData , [e.target.name]:e.target.value})} /><br/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => console.log({...formData , [e.target.name]:e.target.value})} /><br/>
                <button type="submit" onClick={handleFormData}>submit</button>
            </form> */}


            <form action="">
                <label htmlFor="fullName">FullName</label>
                <input type="text" name="fullName" id="fullName" onChange={(e) => setFormData({...formData , [e.target.name]:e.target.value})} /><br/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setFormData({...formData , [e.target.name]:e.target.value})} /><br/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setFormData({...formData , [e.target.name]:e.target.value})} /><br/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default UseState2

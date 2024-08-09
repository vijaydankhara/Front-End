// AnimatedLogin.js
import React from 'react';
import './AnimatedLogin.css'; 
import { useFormik } from 'formik';

const initialValues = {
  fullname: '',
  email: '',
  password: ''
}

const onSubmit = values => {
  console.log('formData', values);
}

const validate = values => {
  let error = {}

  if (!values.fullname) {
    error.fullname = 'Required'
  }
  if (!values.email) {
    error.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid Email Address'
  }
  if (!values.password) {
    error.password = 'Required'
  }

  return error
}



const AnimatedLogin = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log('formik Data', formik.values);
  console.log('formik error', formik.errors);


  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-700">
      <div className="relative w-96 h-96 flex items-center justify-center" onSubmit={formik.handleSubmit}>
        <i className="absolute inset-0 border-2 border-white transition-all duration-500 ring-hover ring1"></i>
        <i className="absolute inset-0 border-2 border-white transition-all duration-500 ring-hover ring2"></i>
        <i className="absolute inset-0 border-2 border-white transition-all duration-500 ring-hover ring3"></i>
        <div className="absolute w-72 h-full flex flex-col items-center justify-center gap-5 m-60 " onSubmit={formik.handleSubmit}>
          <h2 className="text-2xl text-white">Login</h2>
          <div className="relative w-full">

            <input type="text" htmlFor="Full Name" value={formik.values.fullname} onChange={formik.handleChange}  className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-lg text-white focus:outline-none placeholder-white" />
            {
              formik.errors.fullname ? <div className='bg-white'>{formik.errors.fullname}</div> : null
            }
          </div>


          <div className="relative w-full">
            <input type="email" htmlFor="Email" name="" id="email" value={formik.values.email} onChange={formik.handleChange} className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-lg text-white focus:outline-none placeholder-white" />
            {
              formik.errors.email ? <div className='bg-white' >{formik.errors.email}</div> : null
            }
            
          </div>


          <div className="relative w-full">
            <input type="password" htmlFor="Password"  name="" id="password" value={formik.values.password} onChange={formik.handleChange}  className="w-full px-5 py-3 bg-transparent border-2 border-white rounded-full text-lg text-white focus:outline-none placeholder-white" />
            {
              formik.errors.password ? <div className='bg-red-500'>{formik.errors.password}</div> : null
            }
          </div>

          <div className="relative w-full">
            <input type="submit" value="Sign in" className="w-full py-3 bg-gradient-to-r from-pink-500 via-yellow-300 to-yellow-300 text-white rounded-full cursor-pointer" />
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogin;

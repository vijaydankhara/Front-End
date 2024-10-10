import React, { useState } from 'react';

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const [submittedData, setSubmittedData] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    

    console.log('Form Data', userInfo);
    
    setSubmittedData(userInfo);

    setUserInfo({ 
      firstName: '', 
      lastName: '', 
      email: '',
      password: ''
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border-2 border-green-700 mb-4">
        <h1 className='text-2xl font-bold text-center text-sky-600 mb-4'>User Information Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name:</label>
            <input 
              type="text" 
              name="firstName" 
              value={userInfo.firstName} 
              onChange={handleChange} 
              className="mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name:</label>
            <input 
              type="text" 
              name="lastName" 
              value={userInfo.lastName} 
              onChange={handleChange} 
              className="mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={userInfo.email} 
              onChange={handleChange} 
              className="mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={userInfo.password} 
              onChange={handleChange} 
              className="mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <button 
            type="submit" 
            className="mt-4 w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      

      {submittedData && (
        <div className="bg-white p-4 rounded-lg shadow-md w-96 border-2 border-green-700">
          <h2 className='text-xl font-bold text-center text-sky-600 mb-2'>Submitted Data</h2>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Form;

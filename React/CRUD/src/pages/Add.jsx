import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ADD = () => {
  const navigate = useNavigate();

  const [student, setStudents] = useState({
    fullname: '',
    email: '',
    phone: '',
    age: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudents({
      ...student,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudents({ ...student, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitStudent = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", student)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error adding the student!", error);
      });
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border-2 border-blue-700 rounded-3xl p-3 bg-white">
          <div className="mb-2 flex justify-center">
            <svg
              width="50"
              height="56"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
              <path
                d="..." // The path data is omitted for brevity
                fill="black"
              />
            </svg>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            ADD Students
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Login In
            </Link>
          </p>
          <form onSubmit={onSubmitStudent} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="fullname" className="text-base font-medium text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    name="fullname"
                    value={student.fullname}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="fullname"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    value={student.email}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="phone" className="text-base font-medium text-gray-900">
                    PhoneNo
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="phone"
                    value={student.phone}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="PhoneNo"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="age" className="text-base font-medium text-gray-900">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    name="age"
                    value={student.age}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Age"
                    id="age"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="image" className="text-base font-medium text-gray-900">
                  Image
                </label>
                <div className="mt-2">
                  <input
                    name="image"
                    onChange={handleImageChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    id="image"
                  />
                </div>
              </div>
              <div className='flex space-x-12'>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Go Back <ArrowLeft className="ml-2" size={16} />
                </button>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  ADD Students
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ADD;

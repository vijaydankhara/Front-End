import React from 'react'
import Img1 from '../assets/coffee.png'


const Content = () => {

    return (
      <div className="p-8 mt-32 ml-12">
        <h1 className="text-6xl text-center font-bold text-gray-800 mb-4">
      
      <span className="text-vijay-0">I'm Vijay Dankhara.</span><br />
      Web Designer
    </h1>
    <p className="text-gray-600 mb-6">
      I'm a Tunisian based web designer & front-end developer focused on crafting clean & user-friendly experiences. I
      am passionate about building excellent software that improves the lives of those around me.
    </p>
    <div className="inline-flex items-center border hover:text-white border-blue-400  hover:bg-pink-300  font-bold rounded-full">
      <a href="#" className="inline-block text-gray-700  py-2  px-4 rounded-full hover:text-white ">More About Me</a>
      <div className="flex items-center justify-center w-14 h-14 bg-pink-300 rounded-full ">
        <i className="fa-solid fa-right-long text-black  text-2xl"></i>
    </div>
    </div>
      </div>
    );
  };

export default Content

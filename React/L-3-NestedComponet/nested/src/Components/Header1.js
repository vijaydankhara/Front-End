import React from 'react';

const Header1 = () => {
  return (
    <div className=' w-full h-screen'>
      <nav className=" bg-black flex justify-between items-center p-2">
        <div className="text-2xl font-bold  bg-pink-300 rounded-full p-5 hover:bg-yellow-200">FACEBOOK</div>
        <div className="space-x-6 text-lg">
          <a href="#" className="hover:text-blue-700 text-white text-lg">HOME</a>
          <a href="#" className="hover:text-blue-700 text-white text-lg">ABOUT</a>
          <a href="#" className="hover:text-blue-700 text-white text-lg">PRODUCT</a>
          <a href="#" className="hover:text-blue-700 text-white text-lg">CONTACT</a>
          <a href="#" className="hover:text-blue-700 text-white text-lg">SERVICE</a>
        </div>
      </nav>
    </div>
  );
}


export default Header1;

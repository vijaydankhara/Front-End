import React, { useState } from 'react';
import Weblogo from '../assets/bcciLogo.webp';
import {  Link, NavLink,Outlet } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className='bg-[#ff6822]'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-6'>
          <div>
            <NavLink to="/">
              <img src={Weblogo} alt="Logo" className='h-8 ml-5' />
            </NavLink>
          </div>
          <ul className='hidden md:flex text-white text-xl font-bold space-x-10'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
          </ul>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white'>
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <ul className='md:hidden bg-[#ff6828] text-white text-xl font-bold space-y-4 py-4 px-4'>
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink></li>
            <li><NavLink to="/shop" onClick={toggleMenu}>Shop</NavLink></li>
          </ul>
        )}
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Navbar;

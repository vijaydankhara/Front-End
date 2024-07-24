import React, { useState } from 'react';
import Weblogo from '../assets/bcciLogo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-[#ff6822]'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-6'>
          <div>
            <Link to="/">
              <img src={Weblogo} alt="Logo" className='h-8 ml-5' />
            </Link>
          </div>
          <ul className='hidden md:flex text-white text-xl font-bold space-x-10'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white'>
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <ul className='md:hidden bg-[#ff6828] text-white text-xl font-bold space-y-4 py-4 px-4'>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/vd.png";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const result = useSelector((state) => state.cart);
  const resultWish = useSelector((state) => state.wishlist);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="w-full p-6 flex justify-around items-center z-50 sticky top-0 bg-[#fff] border-b-4 border-[#4229ff]">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <NavLink
                to="/"
                className="font-bold text-[#000] hover:text-[#ff0000]"
              >
                <img src={logo} alt="" className="size-12" />
              </NavLink>
            </div>
            <div className="flex items-center justify-between ml-5">
              <div className="space-x-12">
                <NavLink to="/" className="page">
                  Home
                </NavLink>
                <NavLink to="/contact" className="page">
                  Contact
                </NavLink>

                <NavLink to="/aboutUs" className="page">
                  About Us
                </NavLink>
                <NavLink to="/product" className="product">
                  Product
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4 mr-1">
              <div className="relative">
                <NavLink to="/cart">
                  <FaShoppingCart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1 text-[#fff] bg-[#ff0000] text-xs">
                    {result.length}
                  </span>
                </NavLink>
              </div>
              <div className="relative">
                <NavLink to="/wishlist">
                  <FaHeart className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  <span className="absolute top-0 right-5 transform translate-x-1/2 -translate-y-1/2 border-2 rounded-full px-1 text-[#fff] bg-[#ff0000] text-xs">
                    {resultWish.length}
                  </span>
                </NavLink>
              </div>

              {isAuthenticated ? (
                <div className="relative">
                  <NavLink to="/profile">
                    <CgProfile className="text-3xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  </NavLink>
                </div>
              ) : (
                <div className="relative">
                  <button onClick={() => loginWithRedirect()}>
                    <IoIosLogIn className="text-2xl text-gray-950 hover:text-[#ff0000] mr-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

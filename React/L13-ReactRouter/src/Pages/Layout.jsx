import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Shop from './Shop'
import Navbar from '../Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout

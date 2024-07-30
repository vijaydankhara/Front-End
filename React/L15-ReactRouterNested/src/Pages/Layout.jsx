import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Shop from './Shop'
import Navbar from '../Components/Navbar'
import NewProduct from './WomenProduct'
import OldProduct from './ManProduct'
import Page404 from './Page404'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Outlet
// const PageRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<Navbar/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/About',
//         element:<AboutUs/>
//       },
//       {
//         path:'/Contact',
//         element:<Contact/>
//       },
//       {
//         path:'/Shop',
//         element:<Shop/>
//       },
//     ]
//   }
// ])

const Layout = () => {
  return (
    <div>
      {/* <RouterProvider router={PageRouter}>
     </RouterProvider> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<AboutUs/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Shop' element={<Shop/>}>
            <Route path='newproduct' element={<NewProduct/>}></Route>
            <Route path='oldproduct' element={<OldProduct/>}></Route>
          </Route>
          <Route path='/*' element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Layout

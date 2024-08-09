import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Shop from './Shop'
import Navbar from '../Components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// Outlet
const PageRouter = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<AboutUs/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      },
      {
        path:'/Shop',
        element:<Shop/>
      },
    ]
  }
])

const Layout = () => {
  return(
    <div>
      <RouterProvider router={PageRouter}>
      </RouterProvider>
    </div>
  )
}

export default Layout

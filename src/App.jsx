import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './pages/Homepage'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  }
])


function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App

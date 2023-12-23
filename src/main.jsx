import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import './Components/index.js'
import { About, Contact, Home, Work } from './Components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Profile/' element={<Layout />}>
      <Route path='/Profile/' element={<Home />} />
      <Route path='/Profile/about' element={<About />} />
      <Route path='/Profile/work' element={<Work />} />
      <Route path='/Profile/contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

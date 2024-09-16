import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AdminPage from '../Pages/AdminPage'
import Analytics from '../Pages/Analytics'
import About from '../Pages/About'
import Purchase from '../Pages/Purchase'
import Notfound from '../Pages/Notfound'
import Sidebar from '../Admin/Sidebar'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/admin' element={<Sidebar><AdminPage/></Sidebar>} />
        <Route path='/analytics' element={<Sidebar><Analytics/></Sidebar>} />
        <Route path='/about' element={<Sidebar><About/></Sidebar>} />
        <Route path='/purchase' element={<Sidebar><Purchase/></Sidebar>} />
        <Route path='*' element={<Notfound/>} />
    </Routes>
  )
}

export default AllRoutes
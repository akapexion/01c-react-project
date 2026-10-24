import React from 'react'
import Navbar from '../base/Navbar'
import Footer from '../base/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Navbar/>

            <Outlet/>  {/* To Call Child Routes  */}

        <Footer/>
    </>
  )
}

export default AppLayout
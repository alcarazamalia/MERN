import React from 'react'
import NavbarMain from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function MainLayout() {
  return (
    <>
      <NavbarMain/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout

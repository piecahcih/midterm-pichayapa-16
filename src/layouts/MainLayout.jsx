import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

function MainLayout() {
  return (
    <div className='bg-amber-100 min-h-screen'>
        <Header/>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
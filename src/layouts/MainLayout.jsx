import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

function MainLayout() {
  return (
    <>
        <Header/>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default MainLayout
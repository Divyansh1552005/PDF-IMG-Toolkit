import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />  
    </>
  )
}

export default Layout
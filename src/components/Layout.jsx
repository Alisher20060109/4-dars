import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <>
      <Sidebar/>
      <main className='  lg:ml-77 pt-5 px-4'>
       <Outlet/>
      </main>
    </>
  )
}

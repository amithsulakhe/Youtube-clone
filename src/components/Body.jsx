import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
    const sidebar=useSelector(store=>store.sidebarname.isMenu)
  return (
    <div className='flex  pt-[5rem]'>
       {
        sidebar && 
        <Sidebar/>
       }
<Outlet/>
    </div>
  )
}

export default Body
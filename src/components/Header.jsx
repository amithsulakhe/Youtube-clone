import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglesidebar } from '../utils/sidebarSlice'
import { Link } from 'react-router-dom'

const Header = () => {
    const dispatch=useDispatch()
    const sidebarstore=useSelector(store=>store.sidebarname.isMenu)
    const handletogglesidebar=()=>{
        dispatch(togglesidebar(sidebarstore))
    }
  return (
    <div className= 'p-4 m-2 flex  items-center shadow-lg'>
        <div className='flex items-center w-1/4'>
            <img className='h-10 cursor-pointer' onClick={handletogglesidebar} src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"  alt="Menu" />
         <a href='/'>  <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0joG-qM5mvn1XZ-udwSlceKM8eVlj68x0A&usqp=CAU" alt="Youtube" /></a> 
        </div>
        <div  className='w-9/12 flex justify-center'>
            <input type="text" placeholder='Search' className='w-8/12 h-10 px-4 rounded-tl-full rounded-bl-full border border-2 outline-none border-gray-400'  />
            <button className='w-[10%] bg-gray-900 text-white h-10 rounded-tr-full rounded-br-full'>Search</button>
        </div>
        <div className='w-1/4 flex justify-center'>
            <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv5SRkqgXKiDxk5z4WySyBqhlwGem5gsohjEjs1o&s" alt="useicon" />
        </div>
    </div>
  )
}

export default Header
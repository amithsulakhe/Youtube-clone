import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closesidebar } from '../utils/sidebarSlice'
import { useSearchParams } from 'react-router-dom'

const Watchlist = () => {
    const [params]=useSearchParams()
    console.log(params.get("v"));
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(closesidebar())
    },[])
  return (
    <div className='px-4'>
        <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+params.get("v")+"?si=HSVS0qf4pQcD5jpz"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default Watchlist
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closesidebar } from '../utils/sidebarSlice'
import { useSearchParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import LiveSection from './LiveSection'

const Watchlist = () => {
  const darkmoder = useSelector(store => store.enabledarkmod.isMode)

    const [params]=useSearchParams()
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(closesidebar())
    },[])
  return (
    <div className='py-2 w-full'>
      <div className={`flex w-full ${!darkmoder?"bg-black text-white":"bg-white text-black"}`}>

      <div>

        <iframe width="900" height="500" allowFullScreen="1" src={"https://www.youtube.com/embed/"+params.get("v")+"?si=HSVS0qf4pQcD5jpz"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
<div className='  w-full h-[500px] flex flex-col overflow-y-scroll border border-black'>
  <LiveSection/>
</div>
</div >
        <CommentSection/>
    </div>
  )
}

export default Watchlist
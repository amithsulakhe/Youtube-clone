import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const darkmoder=useSelector(store=>store.enabledarkmod.isMode)

  const sidebarDisplay=useSelector(store=>store.sidebarname.isMenu)
  return (
    <div className='w-full '>
    <div className={`pt-14  ${darkmoder?"bg-white text-black":"bg-black text-white"} ${sidebarDisplay?"ml-[15%] w-[85%]":"ml-[0%] w-full"} `}>
        <Buttonlist/>
        <VideoContainer/>
    </div>
    </div>
  )
}

export default MainContainer
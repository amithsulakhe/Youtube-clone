import React from 'react'
import Buttonlist from './Buttonlist'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const darkmoder=useSelector(store=>store.enabledarkmod.isMode)

  const sidebarDisplay=useSelector(store=>store.sidebarname.isMenu)
  return (
    <div className='w-full '>
    <div className={`${darkmoder?"bg-white ml-0 w-full pt-14 text-black":"bg-black ml-0 w-full pt-14 text-white"}  ${darkmoder?"md:bg-white md:text-black":"md:bg-black md:text-white"} ${sidebarDisplay?"md:ml-[15%] md:w-[85%]":"md:ml-[0%] md:w-full"} `}>
        <Buttonlist/>
        <VideoContainer/>
    </div>
    </div>
  )
}

export default MainContainer
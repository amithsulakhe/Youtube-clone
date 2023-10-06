import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchitem } from '../utils/particularitemSearchSlice'

const Sidebar = () => {
  const dispatch=useDispatch()
  const darkmoder=useSelector(store=>store.enabledarkmod.isMode)

  return (
    <div className={` fixed  ${darkmoder?"bg-white text-black":"bg-black text-white"}  shadow-lg w-[15%] h-[88vh] overflow-y-scroll sidebar-parent pt-8 px-4'`}>
        <ul className='pt-3 leading-10 '>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={()=>dispatch(addSearchitem("kannada contents songs"))}><i className="fa-solid fa-house"></i>Home</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Shorts</li>
        </ul>
        <ul className='pt-3 leading-10 '>
        <h1>Subscription</h1>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Asian Tv</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Sat Max</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Namaste Javascript</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Code with harry</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>News First</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Tv 9 Kannada</li>
        </ul>
        <ul className='pt-3 leading-10 '>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Trending</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Shopping</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Music</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Films</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>News</li>
            <li className={`${darkmoder?"bg-white text-black hover:bg-gray-200":" text-white hover:bg-[#272727]"}  rounded-lg pl-4 mb-2 font-bold cursor-pointer  `} onClick={(e)=>dispatch(addSearchitem(e.target.innerHTML))}>Sport</li>
        </ul>
    </div>
  )
}

export default Sidebar
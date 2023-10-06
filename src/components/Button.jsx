import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchitem, addfounditems } from '../utils/particularitemSearchSlice'

const Button = ({name}) => {
  const darkmoder=useSelector(store=>store.enabledarkmod.isMode)
  const dispatch=useDispatch()
const searchParticularitem=(e)=>{
  dispatch(addfounditems([]))

  dispatch(addSearchitem(e.target.innerHTML))
}
  return (
    <div className=''>
        <button onClick={(e)=>searchParticularitem(e)} className={darkmoder?"bg-gray-200  w-32 h-10  rounded-lg  text-black hover:bg-gray-400":" text-white bg-gray-700 w-32 h-10  rounded-lg  hover:bg-[#272727]"}>{name}</button>
    </div>
  )
}

export default Button
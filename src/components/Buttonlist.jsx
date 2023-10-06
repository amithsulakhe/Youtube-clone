import React from 'react'
import Button from './Button'
import { databtn } from '../utils/constant'
import { useSelector } from 'react-redux'

const Buttonlist = () => {

  return (
    <div className='w-full'>
    <div className='flex justify-between gap-2 w-[90%] overflow-x-scroll my-0 mx-auto btns '>
      {
        databtn.map((ele,i)=><Button key={i} name={ele}/> )
      }
    
    </div>
    </div>
  )
}

export default Buttonlist
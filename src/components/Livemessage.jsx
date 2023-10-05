import React from 'react'

const Livemessage = ({name,comment}) => {
  return (
    <div className='p-2'>

        <div className='p-2 flex items-center border border-black border-b-2 border-0'>
            <img className='w-8 h-8 ml-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv5SRkqgXKiDxk5z4WySyBqhlwGem5gsohjEjs1o&s" alt="" />
            <span className='mx-2 font-bold'>{name}</span>
            <span>{comment}</span>
        </div>
    </div>
  )
}

export default Livemessage
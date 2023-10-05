import React from 'react'

const Shimmer = () => {
  return (
    <div className='pt-16 flex flex-wrap justify-around'>

{
    Array(25).fill("").map((ele,i)=>

<div key={i} className='animate-pulse flex flex-col  my-3'>

        <div  className='bg-gray-300 w-72 h-44 shadow-lg rounded-lg' >

        </div>
        <div className='my-2 flex items-center '>
            <div className='w-12 h-12 bg-gray-300 rounded-full shadow-lg'>

            </div>
            <div>
                <div className='w-60 h-6 bg-gray-300 rounded-lg mb-2 shadow-lg'>

                </div>
                <div className='w-60 h-6 bg-gray-300 rounded-lg shadow-lg'>

</div>
            </div>
        </div>
</div>
        
    
    )
}


       
    </div>
  )
}

export default Shimmer
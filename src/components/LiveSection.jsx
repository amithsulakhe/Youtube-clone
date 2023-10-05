import React, { useEffect,useState } from 'react'
import Livemessage from './Livemessage'
import { generate } from '../utils/randomName';
import { useDispatch, useSelector } from 'react-redux';
import { addUserSection } from '../utils/commentuserslice';
const LiveSection = () => {
const dispatch=useDispatch()
const mssguser=useSelector(store=>store.commentslicer.users)
const [msg, setmsg] = useState("")

    useEffect(()=>{
        const i=setInterval(() => {
                   dispatch(addUserSection({
                        name:generate(),
                        msg:"hello good night"
                }))
             
        }, 500);
        return ()=>clearInterval(i)
            },[])
            const submitdata=(e)=>{
                e.preventDefault()
                dispatch(addUserSection({
                        name:"amith Sulakhe",
                        msg:msg
                }))
            }
        
  return (
   <>

  <div className='w-full h-[90%] border border-2 border-black flex flex-col-reverse'>
{
        mssguser?.map((msguser,i)=><Livemessage key={i} name={msguser.name} comment={msguser.msg} /> )
}
</div>
<form className='m-1 flex' onSubmit={submitdata}>
        <input value={msg} onChange={(e)=>setmsg(e.target.value)} className='bg-gray-300 w-full h-10 pl-2 outline-none' placeholder='Enter message' type="text" />
        <button className='bg-blue-400 p-2'>Submit</button>
</form>
        </>
  )
}

export default LiveSection
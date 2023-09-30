import React, { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constant.jsx'
import Videocard from './Videocard.jsx'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const [video, setvideo] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=async ()=>{
        const data=await fetch(YOUTUBE_API_KEY)
        const json=await data.json()
        console.log(json.items);
        setvideo(json.items)
    }
  return (
    <div className='flex flex-wrap justify-around'>
        {
            video?.map((video)=> <Link to={"/watch?v="+video.id}>  <Videocard key={video.id} info={video}/></Link>)
        }
     
    </div>
  )
}

export default VideoContainer
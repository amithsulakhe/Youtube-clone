import React, { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constant.jsx'
import Videocard from './Videocard.jsx'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer.jsx'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
    const storevideo=useSelector(store=>store.searchedparticularitem.founditem)
    console.log(storevideo);
    const searchitem=useSelector(store=>store.searchedparticularitem.searchitem)

    const [video, setvideo] = useState([])
    // useEffect(()=>{
    //     getData()
    // },[])
    // const getData=async ()=>{
    //     const data=await fetch(YOUTUBE_API_KEY)
    //     const json=await data.json()
    //     console.log(json.items);
    //     setvideo(json.items)
        
    // }
  return (
    <>
    {
        storevideo?.length?<div className={searchitem=="shorts"?"flex flex-col items-center h-[85vh]  overflow-y-scroll":"flex flex-wrap justify-around"}>
        {
            storevideo?.map((video,i)=> <Link key={i} to={"/watch?v="+video.id.videoId}>  <Videocard vi={video.id.videoId}  info={video}/></Link>)
        }
     
    </div>:<Shimmer/>
    }
    </>

  )
}

export default VideoContainer
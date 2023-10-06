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

  return (
    <>
    {
        storevideo?.length?<div className={"flex flex-wrap justify-around"}>
        {
            storevideo?.map((video,i)=> <Link key={i} to={"/watch?v="+video.id.videoId}>  <Videocard vi={video.id.videoId}  info={video}/></Link>)
        }
     
    </div>:<Shimmer/>
    }
    </>

  )
}

export default VideoContainer
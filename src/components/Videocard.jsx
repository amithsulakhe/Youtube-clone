import React from 'react'

const Videocard = ({info}) => {
    console.log(info);
    const {snippet,statistics,}=info
    const {thumbnails,channelTitle,title}=snippet
  return (
    <div className='py-2 m-4 w-60 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails" />
        <ul>
            <li className='font-bold'>{title}</li>
            <li className='py-2'>{channelTitle}</li>
            <li>{statistics.viewCount}Views</li>
        </ul>
    </div>
  )
}

export default Videocard
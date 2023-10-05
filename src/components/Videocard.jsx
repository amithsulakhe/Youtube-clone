import React from 'react'
import { useSelector } from 'react-redux'

const Videocard = ({info,vi}) => {
    // console.log(info);
    const searchitem=useSelector(store=>store.searchedparticularitem.searchitem)
// console.log(searchitem.includes("shorts"));
    const {snippet}=info
    const {thumbnails,channelTitle,title,liveBroadcastContent}=snippet
    console.log(liveBroadcastContent);
    // console.log(typeof(+statistics.viewCount));
  return (
    <div className='py-2 m-4  w-72 h-80 flex flex-col gap-1 items-center hover:shadow-lg '>
      {searchitem=="shorts" ? (<iframe width="288" height="460"  src={`https://www.youtube.com/embed/${vi}?si=HSVS0qf4pQcD5jpz?&autoplay=1&mute=1`}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>):
<img className={`rounded-lg `}
  // className={`rounded-lg ${liveBroadcastContent === "live" ? "w-[180px] h-[180px]" : "w-[720px] h-[180px]"}`}
  src={thumbnails.medium.url}
  alt="thumbnails"
/>
}

        <ul>
            <li className='font-bold'>{title}</li>
            <li className='py-2 flex items-center'><div className='w-4 h-4 text-xs font-bold bg-gray-500 flex items-center justify-center rounded-full '>✓</div><div>{channelTitle}</div></li>
        
        </ul>
    </div>
  )
}

export default Videocard
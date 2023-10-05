import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglesidebar } from '../utils/sidebarSlice'
import { Link } from 'react-router-dom'
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API_KEY, searchapi } from '../utils/constant'
import { addSearchitem, addfounditems } from '../utils/particularitemSearchSlice'
import commentuserslice from '../utils/commentuserslice'
import { adddarkmodetheme } from '../utils/darkmodeenable'

const Header = () => {
    const [searchBar, setsearchBar] = useState("")
    const [btn, setbtn] = useState(false)
    const searchitem=useSelector(store=>store.searchedparticularitem.searchitem)
    const darkmoder=useSelector(store=>store.enabledarkmod.isMode)
    console.log(searchitem);
    const [showsuggestion, setshowsuggestion] = useState(false)
    const ref=useRef()
    const [arr, setarr] = useState([])
    const searchbarsugestion=async ()=>{
        let data=await fetch(GOOGLE_API_KEY + searchBar)
        let json=await data.json()
        // console.log(json[1]);
        setarr(json[1])
        console.log(arr);
    }
    useEffect(()=>{
    dispatch(addfounditems([]))

        particularSearcheditem()
    },[searchitem])
const particularSearcheditem=async ()=>{
    console.log(YOUTUBE_SEARCH_API_KEY+searchitem +searchapi);
    let data=await fetch(YOUTUBE_SEARCH_API_KEY+searchitem +searchapi)
    let json=await data.json()
    console.log(json);
    dispatch(addfounditems(json.items))

}
    useEffect(()=>{
        console.log(searchBar);
       const timer= setTimeout(() => searchbarsugestion(), 200);
       return ()=>{
        clearTimeout(timer)
       }
    },[searchBar])

    const dispatch=useDispatch()
    const sidebarstore=useSelector(store=>store.sidebarname.isMenu)
    const handletogglesidebar=()=>{
        dispatch(togglesidebar(sidebarstore))
    }
    const getsercheditem=(e)=>{
        dispatch(addSearchitem(e.target.innerHTML))

        setshowsuggestion(false)
    }
    console.log(searchitem);
    const sendthedata=(e)=>{
        console.log("clicked");
        dispatch(addSearchitem(ref.current.value))

        setshowsuggestion(false)

    }
    const handlechangedarkmode=()=>{
        setbtn(!btn)
        dispatch(adddarkmodetheme())
    }
  return (

    <div className= {`p-4 flex fixed w-[100%]  ${darkmoder?"bg-white text-black":"bg-black text-white"}   items-center shadow-lg`}>
        <div className='flex items-center gap-5 w-1/4'>
            <img className='h-10 cursor-pointer' onClick={handletogglesidebar} src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"  alt="Menu" />
         <a href='/' className='flex items-center  gap-1 font-bold  font-serif'>  <img className='h-8' src="https://em-content.zobj.net/content/2020/04/05/yt.png" alt="Youtube" />YouTube</a> 
        </div>
        <div  className='w-9/12 flex flex-col justify-center'>
            <form onSubmit={(e)=>e.preventDefault()}>

            <input onFocus={()=>setshowsuggestion(true)}  ref={ref} onChange={(e)=>setsearchBar(e.target.value)}  value={searchBar} type="text" placeholder='Search' className='w-8/12 h-10 px-4 rounded-tl-full rounded-bl-full border border-2 outline-none border-gray-400'  />
            <button  onClick={sendthedata} className='w-[10%] bg-gray-900 text-white h-10 rounded-tr-full rounded-br-full'>Search</button>
            </form>

<div className='relative px-5 py-2 '>
   {
    showsuggestion && 
     <ul className='absolute w-8/12 bg-gray-50 leading-10 rounded-2xl '>
   
        { arr.length ?
            arr?.map(suggestion=>
        <li key={suggestion} className='hover:bg-gray-200 cursor-pointer px-5 ' onClick={getsercheditem}>{suggestion}</li>):
        ref?.current?.value &&
        <li  className='hover:bg-gray-200 cursor-pointer px-5'>No Search Results found</li>
        }

    </ul>
    

   }
    

</div>
            
        </div>
        <div>
            <button onClick={handlechangedarkmode} className={`w-28 h-10 rounded-lg ${!btn?"bg-black text-white" :"bg-white text-black"}  text-white`}>Dark Mode</button>
        </div>
        <div className='w-1/4 flex justify-center'>
            <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv5SRkqgXKiDxk5z4WySyBqhlwGem5gsohjEjs1o&s" alt="useicon" />
        </div>
    </div>
  )
}

export default Header
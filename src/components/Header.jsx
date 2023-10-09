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
    const searchitem = useSelector(store => store.searchedparticularitem.searchitem)
    const darkmoder = useSelector(store => store.enabledarkmod.isMode)
    console.log(searchitem);
    const [showsuggestion, setshowsuggestion] = useState(false)
    const ref = useRef()
    const [arr, setarr] = useState([])
    const searchbarsugestion = async () => {
        let data = await fetch(GOOGLE_API_KEY + searchBar)
        let json = await data.json()
        // console.log(json[1]);
        setarr(json[1])
        console.log(arr);
    }
    useEffect(() => {
        dispatch(addfounditems([]))

        particularSearcheditem()
    }, [searchitem])
    const particularSearcheditem = async () => {
        console.log(YOUTUBE_SEARCH_API_KEY + searchitem + searchapi);
        let data = await fetch(YOUTUBE_SEARCH_API_KEY + searchitem + searchapi)
        let json = await data.json()
        console.log(json);
        dispatch(addfounditems(json.items))

    }
    useEffect(() => {
        console.log(searchBar);
        const timer = setTimeout(() => searchbarsugestion(), 200);
        return () => {
            clearTimeout(timer)
        }
    }, [searchBar])

    const dispatch = useDispatch()
    const sidebarstore = useSelector(store => store.sidebarname.isMenu)
    const handletogglesidebar = () => {
        dispatch(togglesidebar(sidebarstore))
    }
    const getsercheditem = (e) => {
        dispatch(addSearchitem(e.target.innerHTML))

        setshowsuggestion(false)
    }
    console.log(searchitem);
    const sendthedata = (e) => {
        console.log("clicked");
        dispatch(addSearchitem(ref.current.value))

        setshowsuggestion(false)

    }
    const handlechangedarkmode = () => {
        setbtn(!btn)
        dispatch(adddarkmodetheme())
    }
    return (

        <div className={`p-4 flex fixed w-[100%] z-10  ${darkmoder ? "bg-white text-black" : "bg-black text-white"}   items-center shadow-lg`}>
            <div className='flex items-center  gap-2 w-1/4 md:gap-5'>
                <i className="fa-solid grid place-items-center fa-bars text-2xl cursor-pointer" onClick={handletogglesidebar} ></i>
                <a href='/' className=' font-bold text-[10px] flex items-center font-serif md:text-lg'>  <img className='h-5 md:h-8' src="https://em-content.zobj.net/content/2020/04/05/yt.png" alt="Youtube" />YouTube</a>
            </div>
            <div className='w-9/12  justify-center'>
                <form className='flex justify-center' onSubmit={(e) => e.preventDefault()}>
                    <input
                        onFocus={() => setshowsuggestion(true)}
                        ref={ref}
                        onChange={(e) => setsearchBar(e.target.value)}
                        value={searchBar}
                        type="text"
                        placeholder="Search"
                        className={`w-40 ml-4  pl-4 h-10 rounded-tl-full rounded-bl-full border  outline-none border-gray-400 ${!darkmoder ? 'bg-black text-white' : 'bg-white text-black'} md:w-8/12`}
                    />
                    <button onClick={sendthedata} className='w-[10%]  border bg-gray-900 text-white h-10 rounded-tr-full rounded-br-full'><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                {/* <div className='relative px-5 py-2 '>
                    {
                        showsuggestion &&
                        <ul className={`absolute w-8/12 bg-gray-50  leading-10 rounded-2xl `}>
<div className={`${!darkmoder?"bg-black text-white":"bg-gray-50 text-black"}`}>
                            {arr.length ?
                                arr?.map(suggestion =>
                                    <li key={suggestion} className={`${!darkmoder?"hover:bg-[#272727]":"hover:bg-gray-200"} cursor-pointer px-5 `} onClick={getsercheditem}>{suggestion}</li>) :
                                ref?.current?.value &&
                                <li className={`${!darkmoder?"hover:bg-[#272727]":"hover:bg-gray-200"} cursor-pointer px-5 `}>No Search Results found</li>
                            }
                            </div>

                        </ul>


                    }


                </div> */}

            </div>
            <div className='flex gap-2 md:w-1/4 md:gap-7'>
            <div className=' '>
                <button onClick={handlechangedarkmode} className={`w-8 h-8 rounded-full  ${!btn ? "bg-black text-white" : "bg-gray-200 text-black"} md:w-44 md:h-10`}>{!btn?"Dark Mode":"White Mode"}</button>
            </div>
            <div className='flex justify-center'>
                <i className="fa-solid fa-user text-2xl"></i>
            </div>
            </div>
        </div>
    )
}

export default Header
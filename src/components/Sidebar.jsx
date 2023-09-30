import React from 'react'

const Sidebar = () => {
  return (
    <div className='m-2 shadow-lg w-44'>
        <ul className='pt-3'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <h1>Subscription</h1>
        <ul className='pt-3'>
            <li>Asian Tv</li>
            <li>Sat Max</li>
            <li>Namaste Javascript</li>
            <li>Code with harry</li>
            <li>News First</li>
            <li>Tv 9 Kannada</li>
        </ul>
        <ul className='pt-3'>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>News</li>
            <li>Sport</li>
        </ul>
    </div>
  )
}

export default Sidebar
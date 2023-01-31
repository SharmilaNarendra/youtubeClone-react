import React from 'react'
import {useSelector} from 'react-redux'

const Panel = () => {
    const isMenuOpen = useSelector((store)=>store.app.openMenu)
  return !isMenuOpen?null:(
   <div className='shadow-md col-span-2 p-10'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Originals</li>
            <li>YouTube Music</li>

            <li>Library</li>
            <li>History</li>
            <li>Your vedios</li>
            <li>Watch later</li>
            <li>Downloads</li>
            <li>Liked vedios</li>
        </ul>
   </div>
  )
}

export default Panel
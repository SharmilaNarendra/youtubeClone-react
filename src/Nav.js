import React from 'react'
import ham from './images/menu.png'
import userIcon from './images/userIcon.png'
import { useDispatch } from 'react-redux'
import {toggleMenu} from './redux/appSlice'

const Nav = () => {
    const dispatch = useDispatch();
  return (
    <div className='grid grid-flow-col h-16 shadow-md grid-cols-12 '>
    <div className='col-span-1 p-6 cursor-pointer' onClick={()=>{
      dispatch(toggleMenu());
    }}><img alt='' className="h-5 w-5 "src={ham}/></div>
    <div className='col-span-2'><img alt='' className="logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"/></div>
    <div className='col-span-8'><input type="text" className="search h-10 w-96 border-2 rounded-2xl mt-7 p-2" placeholder='Search...'></input></div>
    <div className='col-span-1 p-4'><img alt='' className="userlogo h-14 w-14" src={userIcon}/></div>
    </div>
  )
}

export default Nav
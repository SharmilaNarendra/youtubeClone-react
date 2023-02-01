import React from 'react'
import {Link} from "react-router-dom"

const VedioCard = ({vedioData}) => {
 const {snippet} = vedioData;
 const {thumbnails,channelTitle,publishedAt,title} = snippet;
  return (
    <Link to={"/watch?v="+vedioData.id}>
    <div className=' h-72 w- imgcard flex flex-col '>
       <div><img alt="" className="imgcard rounded-2xl" src={thumbnails?.medium?.url}/></div>
       <div className='font-bold text-sm pr-1'>{title}</div>
       <div className='text-xs pr-1'>{channelTitle}</div>
       <div className='text-xs pr-1'>{publishedAt}</div>
    </div>
    </Link>
  )
}

export default VedioCard
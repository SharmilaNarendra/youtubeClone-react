import React from 'react'

const VedioCard = ({vedioData}) => {
 const {snippet} = vedioData;
 const {thumbnails,channelTitle,publishedAt,title} = snippet;
  return (
    <div className=' h-72 w- imgcard flex flex-col '>
       <div><img alt="" className="imgcard rounded-2xl" src={thumbnails?.medium?.url}/></div>
       <div className='font-bold text-sm pr-1'>{title}</div>
       <div className='text-xs pr-1'>{channelTitle}</div>
       <div className='text-xs pr-1'>{publishedAt}</div>
    </div>
  )
}

export default VedioCard
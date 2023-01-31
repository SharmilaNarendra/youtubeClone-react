import React from 'react'
import TagList from './TagList'
import VedioList from './VedioList'

const Body = () => {
  return (
    <div className=' col-span-10 p-10'> 
     <TagList></TagList> 
    <VedioList></VedioList>
    </div>
  )
}

export default Body
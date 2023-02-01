import React from 'react'

const Tag = ({tagName}) => {
  return (
    <button className='bg-slate-200 p-1 px-2 rounded-md m-2'>{tagName}</button>
  )
}

export default Tag
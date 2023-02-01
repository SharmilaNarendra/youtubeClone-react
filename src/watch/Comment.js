import React from 'react'

const Comment = ({commenObj,slno}) => {
    const {name,comment} = commenObj;
  return (
    <div className='border-2 shadow m-2 rounded bg-slate-100'>
    <div className='font-bold'>{slno+1}. {name}</div>
    <div>{comment}</div>
    </div>
  ) 
}

export default Comment
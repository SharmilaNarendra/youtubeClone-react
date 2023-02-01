import React from 'react'
import { comments } from '../config'
import Comment from './Comment'

const nestedComments=(comments)=>{
    return <div>{comments?.map((commenObj,index)=>
        <div className='ml-5'>
        <Comment commenObj={commenObj} slno={index} key={index}/>
        {commenObj?.replies && nestedComments(commenObj?.replies)}
        </div>
    )}
</div>
}



const CommentSection = () => {
  return (<>{nestedComments(comments)}</>);
}

export default CommentSection;
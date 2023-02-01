import React from 'react'
import Tag from './Tag';
import { tags } from './config';

const TagList = () => {
  return (
    tags.map((tagName)=>(<Tag tagName={tagName} key={tagName}></Tag>))
  )
}

export default TagList;
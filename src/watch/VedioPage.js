import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {hideMenu} from '../redux/appSlice'
import CommentSection from './CommentSection';
import VedioContainer from './VedioContainer';

const VedioPage = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(hideMenu());
  },[]);

  return (
    <div className='col-span-9'>
    <div><VedioContainer/></div>
    <div className='p-5'><CommentSection/></div>
    </div>
  )
}
export default VedioPage;
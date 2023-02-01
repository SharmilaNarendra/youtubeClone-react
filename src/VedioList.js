import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import VedioCard from "./VedioCard";
import { useSelector,useDispatch } from "react-redux";
import { cacheVedios } from "./redux/dataSlice";
import { showMenu } from "./redux/appSlice";

const VedioList = () => {
  const dispatch = useDispatch();
  const vedios = useSelector((store)=>store.data.vedioList)

  useEffect(() => {
    dispatch(showMenu());
    !vedios.length && fetchData().then((data) => {
      console.log(data);
      dispatch(cacheVedios(data.items))
    });
  }, []);

  return !vedios.length? <h3> No Vedios Found</h3>:(
    <div className="flex flex-wrap gap-7">
    {vedios.map((vedio)=><VedioCard vedioData={vedio} key={vedio.id}></VedioCard>)}
    </div>
  );
};

export default VedioList;

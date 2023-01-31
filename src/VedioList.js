import React, { useEffect, useState } from "react";
import { fetchData } from "./fetchData";
import VedioCard from "./VedioCard";

const VedioList = () => {
  const [vedioList, setVedioList] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setVedioList(data.items);
    });
  }, []);

  return(
    <div className="flex flex-wrap gap-7">
    {vedioList.map((vedio)=><VedioCard vedioData={vedio} key={vedio.id}></VedioCard>)}
    </div>
  );
};

export default VedioList;

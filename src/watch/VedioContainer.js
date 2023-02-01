import React from "react";
import {useSearchParams} from 'react-router-dom'

const VedioContainer = () => {
  const [params,setParams] = useSearchParams();
  const id = params.get("v");
  return (
    <div>
      <iframe
        className="p-5"
        width="1000"
        height="600"
        src={"https://www.youtube.com/embed/"+id}
        title="Alia Bhatt FIRST Reaction on Pathaan BREAKS Brahmāstra RECORDS | Shahrukh Khan"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
     
    </div>
  );
};

export default VedioContainer;

import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  
  const apiCall=(text)=>{
    console.log(text);
  }
  
  useEffect(() => {
    const int = setInterval(()=>{
        apiCall(searchText);
    },200);
    return()=>{
      clearInterval(int);
    }
  }, [searchText]);
  
  
  return (
    <div>
      <input
        type="text"
        value={searchText}
        className="search h-10 w-96 border-2 rounded-2xl mt-7 p-2"
        placeholder="Search..."
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;

import { FETCH_VEDIODETAILS_URL } from "./config";

export const fetchData= async ()=>{
    const data = await fetch(FETCH_VEDIODETAILS_URL)
    const jsonData = await data.json();
    return jsonData;
}
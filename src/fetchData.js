import { GOOGLE_KEY } from "./config";

export const fetchData= async ()=>{
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key="+GOOGLE_KEY)
    const jsonData = await data.json();
    return jsonData;
}
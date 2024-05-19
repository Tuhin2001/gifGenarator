
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [gif,setGif] = useState("");
    const [tag, setTag] = useState("car");
    const [loading, setLoading] = useState('false');
    
    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      
      const { data } = await axios.get(url);
      console.log(data); // Log the entire data object to inspect its structure
      const imageSource = data.data.images.downsized_large.url; // Adjust property access
      console.log(imageSource);
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect(()=>{
      fetchData();
    },[])

    function changeHandler (event){
      setTag(event.target.value);
    }
    function clickHandler(){
      fetchData();
    }
  return (
    <div className="flex flex-col items-center w-1/2 bg-blue-400 border border-black rounded-xl gap-y-5 ">
        <h1 className='text-2xl font-bold underline uppercase mt-[15px]'>
          Random {tag } Gif
        </h1>
        {
          loading ? (<Spinner/> ) : (<img src={gif} alt='pic' width="450px"/>)
        }

        <input className='w-10/12 py-1 text-lg rounded-lg opacity-60 mb-[5px] mt-[10px] text-center'
          onChange={changeHandler} value={tag}
        />
        

        <button onClick={clickHandler} className='w-10/12 py-1 text-lg bg-white rounded-lg opacity-60 mb-[20px]'
        >Genarate</button>
    </div>
  )
}
export default Tag;
import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    const [gif,setGif] = useState("");
    const [loading, setLoading] = useState('false');
    
    async function fetchData() {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

    function clickHandler(){
      fetchData();
    }
  return (
    <div className="w-1/2 bg-green-400 rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className='text-2xl font-bold underline uppercase mt-[15px]'>
          A Random Gif
        </h1>
        {
          loading ? (<Spinner/> ) : (<img src={gif} alt='pic' width="450px"/>)
        }
        

        <button onClick={clickHandler} className='w-10/12 py-1 text-lg bg-white rounded-lg opacity-60 mb-[20px]'
        >Genarate</button>
    </div>
  )
}

export default Random;  
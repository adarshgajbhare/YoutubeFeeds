import React from 'react'
  import { YT_CHANNELS } from '../utils/constant'
import { useEffect } from 'react';
const useGetChannels = () => {
    
    const getChannel = async () =>{

        const channelFetch = await fetch(YT_CHANNELS) 
        const channelList = await channelFetch.json();
        console.log(channelList);
    };
  
    useEffect(()=>{
        getChannel();
    },[])
  return (
       <></> 
     
  )}

export default useGetChannels

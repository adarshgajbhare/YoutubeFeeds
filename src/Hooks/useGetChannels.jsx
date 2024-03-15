import { API_KEY } from "../utils/constant";
import { useEffect } from "react";
const useGetChannels = (channelId) => {
  const getChannel = async () => {
    const channelFetch = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${channelId}&key=${API_KEY}`,
    );

    const channelList = await channelFetch.json();
    console.log("channels data here....")
    console.log(channelList);
  };

  useEffect(() => {
    getChannel();
  }, [channelId]);
  return <></>;
};

export default useGetChannels;
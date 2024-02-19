import { useEffect } from "react";
import { API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchData } from "../store/searchSlice";

const useSearch = (channelName) => {
     const dispatch = useDispatch();
 
const searchChannel = async () => {
  try {
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(channelName)}&part=snippet&contentDetails&statistics&key=${API_KEY}`
    );

    if (!searchResponse.ok) {
      throw new Error('Failed to fetch data from YouTube API');
    }

    const searchResult = await searchResponse.json();
    console.log("search Results....", searchResult);
    dispatch(addSearchData(searchResult))
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};


  useEffect(() => {
    if (channelName) {
      searchChannel();
    }
  }, [channelName]);
};

export default useSearch;
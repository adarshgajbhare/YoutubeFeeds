import { useSelector } from "react-redux";
import BottomNavbar from "./BottomNavbar";
import { useState } from "react";
import useGetChannels from "../Hooks/useGetChannels";

const SearchResult = () => {
  const [channelId, setChannelId] = useState(null);
  const searchData = useSelector((store) => store.searchData); //?.items[0]?.snippet
  const user = useSelector((store) => store?.user);

  const [addToFeed, setAddToFeed] = useState({});

  const handleAddToFeed = (index, id) => {
    setChannelId(id);
    setAddToFeed((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useGetChannels(channelId);
  return (
    <div className="bg-[#050505]">
      <div className="userName-Dp flex items-center justify-between">
        <p className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          {`Hello, ${user?.name}`}
        </p>
        <div className="userDp h-12 w-12 overflow-hidden rounded-[50%] border-2 border-sky-200 ">
          <img
            className="h-full w-full object-cover object-center  "
            src={`${user?.photoUrl}`}
          />
        </div>
      </div>
      <p className="text-2xl font-bold text-black">Search Results....</p>
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8">
        {searchData &&
          searchData?.items.map((items, index) => (
            <div
              className="maincard relative bg-white/100 flex h-60 w-96  rounded-xl border border-white/10 
               p-4 gap-4   z-10 overflow-hidden"
              key={index}
            >
              <div className="overlaysuper absolute h-full w-full bg-black/30 inset-0 filter backdrop-blur-3xl"> 
              </div>
              <div className="overlay absolute h-full w-full inset-0 -z-50 
              ">
               <img
                  className="rounded-lg h-full w-full object-center object-cover"
                  src={
                    items?.snippet?.thumbnails?.default?.url ||
                    items?.snippet?.thumbnails?.medium?.url
                  }
                />
              </div>
              <div className="details flex w-[35%] shrink-0 grow-0 flex-col items-center justify-between 
              gap-2 z-50">
              <div className="profile h-[70%] w-full "> 
              <img
                  className="rounded-lg h-full w-full object-center object-cover"
                  src={
                    items?.snippet?.thumbnails?.default?.url ||
                    items?.snippet?.thumbnails?.medium?.url
                  }
                />
                </div>

                <div className="channeldetails text-center grow justify-between  w-full z-50 flex flex-col ">  
                <p className="text-pretty font-bold  text-[#fefefe]
               line-clamp-2 leading-5 text-xl ">
                  {items?.snippet?.channelTitle}
                </p>
                <p className="leading-7 font-bold text-[#fefefe] opacity-70 
                text-xl ">
                  200M
                </p></div> 
              </div>
              <div className="description flex w-[65%] flex-col items-center justify-between font-medium 
              text-white/70 z-50">
                <p className="line-clamp-4  w-full text-lg leading-6">
                  {items?.snippet?.description}
                </p>{" "}
               
                <button
                  onClick={() => handleAddToFeed(index, items.id)}
                  className={`addToFeed cursor-pointer   w-full rounded-lg 
                  py-2 flex items-center justify-center gap-4 filter backdrop-blur-2xl
                  duration-300
                  ${!addToFeed[index] ? "bg-[#FF0000]" : "bg-green-600"}
                  `}
                >
                  <i
                    className={`fa-solid ${addToFeed[index] ? "fa-check" : "fa-plus"}  duration-300`}
                  />
                  <span className="text-lg font-medium">
                    {addToFeed[index] ? "Saved" :  "Add to feed"}
                   </span>
                </button>
              </div>
            </div>
          ))}
      </div>{" "}
      <BottomNavbar />
    </div>
  );
};

export default SearchResult;

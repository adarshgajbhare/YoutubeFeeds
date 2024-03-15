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
    <>
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
        <div
          className="mx-auto grid gap-8 
      px-4 md:grid-cols-2 lg:grid-cols-3 2xl:max-w-7xl 2xl:grid-cols-3"
        >
          {searchData &&
            searchData?.items.map((items, index) => (
              <div
                className="maincard relative z-10 flex h-60 w-full gap-4  overflow-hidden rounded-xl border 
               border-white/10 bg-white/100   p-4 2xl:w-96"
                key={index}
              >
                <div className="overlaysuper absolute inset-0 h-full w-full bg-black/30 filter backdrop-blur-3xl"></div>
                <div
                  className="overlay absolute inset-0 -z-50 h-full w-full 
              "
                >
                  <img
                    className="h-full w-full rounded-lg object-cover object-center"
                    src={
                      items?.snippet?.thumbnails?.default?.url ||
                      items?.snippet?.thumbnails?.medium?.url
                    }
                  />
                </div>
                <div
                  className="details z-50 flex w-[35%] shrink-0 grow-0 flex-col items-center 
              justify-between gap-2"
                >
                  <div className="profile h-[70%] w-full ">
                    <img
                      className="h-full w-full rounded-lg object-cover object-center"
                      src={
                        items?.snippet?.thumbnails?.default?.url ||
                        items?.snippet?.thumbnails?.medium?.url
                      }
                    />
                  </div>

                  <div className="channeldetails z-50 flex w-full  grow flex-col justify-between text-center ">
                    <p
                      className="line-clamp-2 text-pretty  text-xl
               font-bold leading-5 text-[#fefefe] "
                    >
                      {items?.snippet?.channelTitle}
                    </p>
                    <p
                      className="text-xl font-bold leading-7 text-[#fefefe] 
                opacity-70 "
                    >
                      200M
                    </p>
                  </div>
                </div>
                <div
                  className="description z-50 flex w-[65%] flex-col items-center justify-between 
              font-medium text-white/70"
                >
                  <p className="line-clamp-4  w-full text-lg leading-6">
                    {items?.snippet?.description}
                  </p>{" "}
                  <button
                    onClick={() => handleAddToFeed(index, items.id)}
                    className={`addToFeed flex   w-full cursor-pointer 
                  items-center justify-center gap-4 rounded-lg py-2 filter backdrop-blur-2xl
                  duration-300
                  ${!addToFeed[index] ? "bg-[#FF0000]" : "bg-green-600"}
                  `}
                  >
                    <i
                      className={`fa-solid ${addToFeed[index] ? "fa-check" : "fa-plus"}  duration-300`}
                    />
                    <span className="text-lg font-medium">
                      {addToFeed[index] ? "Saved" : "Add to feed"}
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="botNav z-[999]">
        <BottomNavbar />
      </div>
    </>
  );
};

export default SearchResult;

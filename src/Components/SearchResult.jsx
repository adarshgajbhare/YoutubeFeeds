import { useSelector } from "react-redux";
import BottomNavbar from "./BottomNavbar";
import { useState } from "react";

const SearchResult = () => {
  const searchData = useSelector((store) => store.searchData); //?.items[0]?.snippet
  const user = useSelector((store) => store?.user);

  const [addToFeed, setAddToFeed] = useState({});

  const handleAddToFeed = (index) => {
    setAddToFeed((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <div className="userName-Dp flex items-center justify-between">
        <p className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          {" "}
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
      {searchData &&
        searchData?.items.map((items, index) => (
          <div
            className=" flex items-center justify-around border-2 border-black text-center"
            key={index}
          >
            <img
              className="rounded-full"
              src={items?.snippet?.thumbnails?.default?.url || items?.snippet?.thumbnails?.medium?.url}
             
            />
            <div className="details">
              <p className="">{items?.snippet?.channelTitle}</p>
              <p>{items?.snippet?.description}</p>{" "}
            </div>

            <div onClick={() => handleAddToFeed(index)} className="addToFeed cursor-pointer">
              <i
                className={`fa-solid ${addToFeed[index] ? "fa-check" : "fa-plus"} text-3xl`}
              />
            </div>
          </div>
        ))}
      <BottomNavbar />
    </>
  );
};

export default SearchResult;

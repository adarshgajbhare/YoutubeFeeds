import FeedCard from "./FeedCard";

const Feed = () => {
  return (
    <>
      <div
        className="feedMain w-screen h-screen bg-[#121212] flex flex-col gap-4 p-4 
      overflow-y-scroll"
      >
        <div className="userName-Dp flex justify-between items-center">
          <p className="text-4xl bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent font-extrabold tracking-tight">
            {" "}
            Hello,  Adarsh
          </p>
          <div className="userDp rounded-[50%] overflow-hidden h-16 w-16 ">
            <img
              className="h-full w-full object-cover object-center  "
              src="https://www.indiewire.com/wp-content/uploads/2016/08/20140216-131646.jpg"
            />{" "}
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center    ">
          <div className=" FeedCard text-center  bg-[#292929] w-full h-48 rounded-lg flex flex-col justify-evenly">
            <i className="bg-[#373737] mx-auto w-fit rounded-xl fa-solid fa-film p-6 text-4xl text-white"></i>
            <p className="text-white text-2xl  font-extrabold tracking-tighter ">
              Movies
            </p>
          </div>
          <div className=" FeedCard text-center  bg-[#292929] w-full h-48 rounded-lg flex flex-col justify-evenly">
            <i className="bg-[#373737] mx-auto  w-fit rounded-xl fa-solid fa-music p-6 text-4xl text-white"></i>
            <p className="text-white text-2xl  font-extrabold tracking-tighter ">
              Music
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center ">
          <div className=" FeedCard text-center  bg-[#292929] w-full h-48 rounded-lg flex flex-col justify-evenly">
            <i className="bg-[#373737] mx-auto w-fit rounded-xl fa-solid fa-football p-6 text-4xl text-white"></i>
            <p className="text-white text-2xl  font-extrabold tracking-tighter ">
              Sports
            </p>
          </div>
          <div className=" FeedCard text-center  bg-[#292929] w-full h-48 rounded-lg flex flex-col justify-evenly">
            <i className="bg-[#373737] mx-auto w-fit rounded-xl fa-solid fa-graduation-cap p-6 text-4xl text-white"></i>
            <p className="text-white text-2xl  font-extrabold tracking-tighter ">
              Education
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center ">
          <div className=" FeedCard text-center  bg-[#292929] w-full h-48 rounded-lg flex flex-col justify-evenly">
            <i className="bg-[#373737] mx-auto w-fit rounded-xl fa-solid fa-shirt p-6 text-4xl text-white"></i>
            <p className="text-white text-2xl  font-extrabold tracking-tighter ">
              Fashion
            </p>
          </div>
          <div className=" FeedCard text-center  bg-[#292929] w-full h-48 rounded-lg flex flex-col justify-evenly">
            <i className="bg-[#373737] mx-auto w-fit rounded-xl fa-solid fa-mobile-screen-button p-6 text-4xl text-white"></i>
            <p className="text-white text-2xl  font-extrabold tracking-tighter ">
              Tech
            </p>
          </div>
        </div>
      </div>

      <div
        className="BottomNav bg-glassNav border-t-2  text-3xl  font-bold text-white
           flex items-center justify-between w-full px-8 py-4 fixed bottom-0 "
      >
        <div className="menu  ">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="AddFeed">
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default Feed;

import FeedCard from "./FeedCard";
import gplus from "../assets/gplus.png";
import { useState } from "react";
const Feed = () => {
  const [searchBar, setSearchBar] = useState(false);

  const HandleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  return (
    <>
      <div
        className="feedMain w-screen h-screen bg-gradient-to-b from-gray-900 to-red-800 flex flex-col gap-4 p-4 
      overflow-y-scroll"
      >
        <div className="userName-Dp flex justify-between items-center">
          <p className="text-2xl bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent font-bold tracking-tight">
            {" "}
            Hello, Adarsh
          </p>
          <div className="userDp rounded-[50%] overflow-hidden h-12 w-12 border-2 border-sky-200 overflow-hidden ">
            <img
              className="h-full w-full object-cover object-center  "
              src="https://www.indiewire.com/wp-content/uploads/2016/08/20140216-131646.jpg"
            />{" "}
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center ">
          <div className="FeedCard text-center  bg-[#1C1C1E] w-full h-44 rounded-lg flex flex-col justify-evenly relative overflow-hidden">
            <div className="overlay absolute inset-0 h-full w-full z-10">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img className=" h-full w-full object-cover  object-center" src="https://images.pexels.com/photos/7991314/pexels-photo-7991314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="card-details z-10 h-full w-full flex flex-col justify-evenly">
              <i className="bg-glassNav rounded-lg   w-fit  fa-solid fa-film absolute top-0 left-0 mx-3 my-3 text-2xl p-4 text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 text-[#EAEBED] text-lg mx-3 my-3 font-semibold tracking-tight ">
                Movies
              </p>
            </div>
          </div>

          <div className="FeedCard text-center  bg-[#1C1C1E] w-full h-44 rounded-lg flex flex-col justify-evenly relative overflow-hidden">
            <div className="overlay absolute inset-0 h-full w-full z-10">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img className=" h-full w-full object-cover  object-center" src="https://images.pexels.com/photos/2228577/pexels-photo-2228577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="card-details z-10 h-full w-full flex flex-col justify-evenly">
              <i className="bg-glassNav rounded-lg   w-fit  fa-solid fa-music absolute top-0 left-0 mx-3 my-3 text-2xl p-4 text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 text-[#EAEBED] text-lg mx-3 my-3 font-semibold tracking-tight ">
                Music
              </p>
            </div>
          </div>
        </div>



        <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center ">
          <div className="FeedCard text-center  bg-[#1C1C1E] w-full h-44 rounded-lg flex flex-col justify-evenly relative overflow-hidden">
            <div className="overlay absolute inset-0 h-full w-full z-10">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img className=" h-full w-full object-cover  object-center" src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="card-details z-10 h-full w-full flex flex-col justify-evenly">
              <i className="bg-glassNav rounded-lg   w-fit  fa-solid fa-futbol absolute top-0 left-0 mx-3 my-3 text-2xl p-4 text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 text-[#EAEBED] text-lg mx-3 my-3 font-semibold tracking-tight ">
                Sports
              </p>
            </div>
          </div>

          <div className="FeedCard text-center  bg-[#1C1C1E] w-full h-44 rounded-lg flex flex-col justify-evenly relative overflow-hidden">
            <div className="overlay absolute inset-0 h-full w-full z-10">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img className=" h-full w-full object-cover  object-center" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg" alt="" />
            </div>
            <div className="card-details z-10 h-full w-full flex flex-col justify-evenly">
              <i className="bg-glassNav rounded-lg   w-fit  fa-solid fa-laptop-code absolute top-0 left-0 mx-3 my-3 text-2xl p-4 text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 text-[#EAEBED] text-lg mx-3 my-3 font-semibold tracking-tight ">
                Learning
              </p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center ">
          <div className="FeedCard text-center  bg-[#1C1C1E] w-full h-44 rounded-lg flex flex-col justify-evenly relative overflow-hidden">
            <div className="overlay absolute inset-0 h-full w-full z-10">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img className=" h-full w-full object-cover  object-center" src="https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="card-details z-10 h-full w-full flex flex-col justify-evenly">
              <i className="bg-glassNav rounded-lg   w-fit  fa-solid fa-vest-patches absolute top-0 left-0 mx-3 my-3 text-2xl p-4 text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 text-[#EAEBED] text-lg mx-3 my-3 font-semibold tracking-tight ">
                Fashion
              </p>
            </div>
          </div>

          <div className="FeedCard text-center  bg-[#1C1C1E] w-full h-44 rounded-lg flex flex-col justify-evenly relative overflow-hidden">
            <div className="overlay absolute inset-0 h-full w-full z-10">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img className=" h-full w-full object-cover  object-center" src="https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="card-details z-10 h-full w-full flex flex-col justify-evenly">
              <i className="bg-glassNav rounded-lg   w-fit  fa-solid fa-seedling absolute top-0 left-0 mx-3 my-3 text-2xl p-4 text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 text-[#EAEBED] text-lg mx-3 my-3 font-semibold tracking-tight ">
                Self-help
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* <div className="createCustomFeed h-20 w-20 right-8 shadow-2xl shadow-black  rounded-[50%] overflow-hidden fixed bottom-20">
        <img src={gplus} className="h-full w-full object-center object-cover" />
      </div> */}
      <div
        className={`BottomNav  ${searchBar ? "bg-[#312f31]" : "bg-glass-black pb-4 z-20 den"
          } text-2xl  font-bold text-[#EAEBED]
           flex items-center justify-between w-full px-8 py-3
            fixed bottom-0 `}
      >
        <div className={`menu ${searchBar ? "hidden" : ""}`}>
          <i className="fa-solid fa-bars"></i>
          <p className="text text-xs font-extralight mt-1 -translate-x-1">Menu</p>
        </div>
        <div className={`play ${searchBar ? "hidden" : ""}`}>
          <i className="fa-solid fa-play"></i>
          <p className="text text-xs font-extralight mt-1 -translate-x-1">Play</p>
        </div>
        <div
          onClick={HandleSearchBar}
          className={`menu ${searchBar ? " hidden" : ""} `}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="text text-xs font-extralight mt-1 -translate-x-1">Search</p>
        </div>

        <div
          className={`menu  ${searchBar ? " " : "hidden"
            } bg-[#474547] flex justify-between items-center px-3 rounded-lg w-full py-2`}
        >
          <input
            type="text"
            placeholder="Search any channel or feed... "
            className="mx-auto rounded-lg  py-1 bg-[#474547] w-full outline-none   text-base font-semibold"
          />
          <i
            onClick={HandleSearchBar}
            className="fa-solid fa-circle-xmark  text-[1.4rem]"
          ></i>
        </div>
      </div>
    </>
  );
};

export default Feed;

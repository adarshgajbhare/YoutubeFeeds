import React from "react";
import hamBurger from "../assets/burger.svg";
import YouTube from "../assets/YouTube.svg";
import searchGlass from "../assets/search-icon.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed p-6 bg-black flex gap-2">
        
        <div className="ham-svg flex gap-2">
          <img className="w-8 bg-white " src={hamBurger} />
          <div className="log flex">
            <img className="h-8" src={YouTube} />
            <p className="text-white font-medium text-lg"> YouTube</p>
          </div>
        </div>

        <div className=" search-home flex">
            <div className="search-box  flex rounded-xl border">
            <input type="text" className="outline-none rounded border-none" />
            <img className="h-10  " src={searchGlass} />
               </div>
        </div>
        <div className="user"></div>
      </div>
    </>
  );
};

export default Navbar;

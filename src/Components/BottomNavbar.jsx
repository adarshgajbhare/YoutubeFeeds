import { useRef, useState } from "react";
import useSearch from "../Hooks/useSearch";
import { Link } from "react-router-dom";
const BottomNavbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchText = useRef();

  const HandleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  const HandleSearchValue = () => {
    setSearchValue(searchText?.current?.value);
  };

  useSearch(searchValue);
  return (
    <>
      <div
        className={`BottomNav ${searchBar ? "bg-[#312f31]" : "bg-glass-black den z-20 pb-4"}
           fixed  bottom-0 z-[999] flex w-full items-center justify-between
            px-8 py-3  text-2xl font-bold text-[#EAEBED]`}
      >
        <Link to="/Feed">
          <div className={`menu ${searchBar ? "hidden" : ""}`}>
            <i className="fa-solid fa-bars"></i>
            <p className="text mt-1 -translate-x-1 text-xs font-extralight">
              Menu
            </p>
          </div>
        </Link>
        <div className={`play ${searchBar ? "hidden" : ""}`}>
          <i className="fa-solid fa-play"></i>
          <p className="text mt-1 -translate-x-1 text-xs font-extralight">
            Play
          </p>
        </div>
        <Link to={"/search"}>
          <div
            onClick={HandleSearchBar}
            className={`menu ${searchBar ? " hidden" : ""} `}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className="text mt-1 -translate-x-1 text-xs font-extralight">
              Search
            </p>
          </div>
        </Link>
        <div
          className={`menu  ${
            searchBar ? " " : "hidden"
          } flex w-full items-center justify-between rounded-lg bg-[#474547] px-3 py-2`}
        >
          <input
            ref={searchText}
            type="text"
            placeholder="Search any channel or feed... "
            className="mx-auto w-full  rounded-lg bg-[#474547] py-1 text-base   font-semibold outline-none"
          />
          <i
            onClick={HandleSearchValue}
            className="fa-solid fa-magnifying-glass  mr-10 text-[1.4rem]"
          ></i>

          <i
            onClick={HandleSearchBar}
            className="fa-solid fa-circle-xmark  text-[1.4rem]"
          ></i>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;

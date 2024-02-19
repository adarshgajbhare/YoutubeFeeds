import { useSelector } from "react-redux";
import BottomNavbar from "./BottomNavbar";

const Feed = () => {
  const user = useSelector((store) => store?.user);

  return (
    <>
      <div
        className="feedMain flex h-screen w-screen flex-col gap-4 overflow-y-scroll
         bg-gradient-to-b from-gray-900 to-red-800 p-4"
      >
        <div className="userName-Dp flex items-center justify-between">
          <p className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
            {`Hello, ${user?.name}`}
          </p>
          <div className="userDp h-12 w-12 overflow-hidden rounded-[50%] border-2 border-sky-200 ">
            <img
              className="h-full w-full object-cover object-center "
              src={`${user?.photoUrl}`}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 place-items-center gap-4 ">
          <div className="FeedCard relative  flex h-44 w-full flex-col justify-evenly overflow-hidden rounded-lg bg-[#1C1C1E] text-center">
            <div className="overlay absolute inset-0 z-10 h-full w-full">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img
                className=" h-full w-full object-cover  object-center"
                src="https://images.pexels.com/photos/7991314/pexels-photo-7991314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className=" card-details z-10 flex h-full w-full flex-col justify-evenly">
              <i className="bg-glassNav fa-solid   fa-film  absolute left-0 top-0 mx-3 my-3 w-fit rounded-lg p-4 text-2xl text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 mx-3 my-3 text-lg font-semibold tracking-tight text-[#EAEBED] ">
                Movies
              </p>
            </div>
          </div>

          <div className="FeedCard relative  flex h-44 w-full flex-col justify-evenly overflow-hidden rounded-lg bg-[#1C1C1E] text-center">
            <div className="overlay absolute inset-0 z-10 h-full w-full">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img
                className=" h-full w-full object-cover  object-center"
                src="https://images.pexels.com/photos/2228577/pexels-photo-2228577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="card-details z-10 flex h-full w-full flex-col justify-evenly">
              <i className="bg-glassNav fa-solid   fa-music  absolute left-0 top-0 mx-3 my-3 w-fit rounded-lg p-4 text-2xl text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 mx-3 my-3 text-lg font-semibold tracking-tight text-[#EAEBED] ">
                Music
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 place-items-center gap-4 ">
          <div className="FeedCard relative  flex h-44 w-full flex-col justify-evenly overflow-hidden rounded-lg bg-[#1C1C1E] text-center">
            <div className="overlay absolute inset-0 z-10 h-full w-full">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img
                className=" h-full w-full object-cover  object-center"
                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="card-details z-10 flex h-full w-full flex-col justify-evenly">
              <i className="bg-glassNav fa-solid fa-futbol  absolute left-0 top-0 mx-3 my-3 w-fit rounded-lg p-4 text-2xl text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 mx-3 my-3 text-lg font-semibold tracking-tight text-[#EAEBED] ">
                Sports
              </p>
            </div>
          </div>

          <div className="FeedCard relative  flex h-44 w-full flex-col justify-evenly overflow-hidden rounded-lg bg-[#1C1C1E] text-center">
            <div className="overlay absolute inset-0 z-10 h-full w-full">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img
                className=" h-full w-full object-cover  object-center"
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
                alt=""
              />
            </div>
            <div className="card-details z-10 flex h-full w-full flex-col justify-evenly">
              <i className="bg-glassNav fa-solid   fa-laptop-code  absolute left-0 top-0 mx-3 my-3 w-fit rounded-lg p-4 text-2xl text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 mx-3 my-3 text-lg font-semibold tracking-tight text-[#EAEBED] ">
                Learning
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 place-items-center gap-4 ">
          <div className="FeedCard relative  flex h-44 w-full flex-col justify-evenly overflow-hidden rounded-lg bg-[#1C1C1E] text-center">
            <div className="overlay absolute inset-0 z-10 h-full w-full">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img
                className=" h-full w-full object-cover  object-center"
                src="https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="card-details z-10 flex h-full w-full flex-col justify-evenly">
              <i className="bg-glassNav fa-solid   fa-vest-patches  absolute left-0 top-0 mx-3 my-3 w-fit rounded-lg p-4 text-2xl text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 mx-3 my-3 text-lg font-semibold tracking-tight text-[#EAEBED] ">
                Fashion
              </p>
            </div>
          </div>

          <div className="FeedCard relative  flex h-44 w-full flex-col justify-evenly overflow-hidden rounded-lg bg-[#1C1C1E] text-center">
            <div className="overlay absolute inset-0 z-10 h-full w-full">
              <div className="dim absolute inset-0 h-full w-full bg-black opacity-60"></div>
              <img
                className=" h-full w-full object-cover  object-center"
                src="https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="card-details z-10 flex h-full w-full flex-col justify-evenly">
              <i className="bg-glassNav fa-solid   fa-seedling  absolute left-0 top-0 mx-3 my-3 w-fit rounded-lg p-4 text-2xl text-[#EAEBED]"></i>
              <p className="absolute bottom-0 left-0 mx-3 my-3 text-lg font-semibold tracking-tight text-[#EAEBED] ">
                Self-help
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
};

export default Feed;

import React from "react";
import googleIcon from "../assets/google.svg";
import tvIcon from "../assets/tv.png";
import popcorn from "../assets/popCorn.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Login = () => {
  return (
    <>
      <div className="login-page  w-screen h-screen relative  flex flex-col ">
        <div className="overlay h-full w-full inset-0 absolute -z-10 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-300"></div>

        <div className="loginImage  relative grow w-full ">
          <img id="agTv" className="tv scale-125" src={tvIcon} />
          <img
            className="h-40 absolute top-[50%] left-[50%] scale-150"
            src={popcorn}
          />
        </div>

        <div
          className="login-box bg-white px-8 py-16 gap-16 border text-white  w-full  flex flex-col
           rounded-t-3xl  "
        >
          <div className="title">
            <p className="text-[#050049] text-6xl font-black tracking-tight  mb-2">
              Welcome to
            </p>
            <p className="text-[#ff6565] font-black tracking-tighter text-4xl  mb-2">
              YouTube Feeds
            </p>
            <p className="slogan  tracking-tight font-bold text-xl text-gray-400    mt-4">
              Create endless custom feeds
            </p>
          </div>
          <div className="btn  ">
            <button className="bg-[#1da1f2] text-lg font-bold tracking-tight w-full rounded-xl   hover:bg-blue-500 flex items-center px-2 py-2  ">
              <div className="img border h-full bg-white rounded-xl p-1">
                {" "}
                <img className=" h-10 inline-block" src={googleIcon} />{" "}
              </div>
              <div className="sign  h-full grow text-xl">
                Sign up with Google
              </div>
            </button>
          </div>
        </div>

        {/* <div className="copyright  w-full text-white border ">
          <p>Adarsh Gajbhare</p>
        </div> */}
      </div>
    </>
  );
};

export default Login;
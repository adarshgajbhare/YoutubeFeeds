import googleIcon from "../assets/google.svg";
import tvIcon from "../assets/tv.png";
import popcorn from "../assets/popCorn.png";
import { Link } from "react-router-dom";
import  {auth, provider } from "../utils/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {


  const HandleSignIn =() =>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

  return (
    <>
      <div className="login-page  w-screen h-screen relative  flex flex-col 2xl:flex-row lg:flex-row 2xl:overflow-hidden lg:overflow-hidden">
        <div
          className="overlay h-full w-full inset-0 absolute -z-10 bg-gradient-to-b from-blue-500
         via-purple-500 to-yellow-300"
        ></div>

        <div
          className="loginImage  relative flex-1 w-full 2xl:h-full lg:h-full  md:flex md:justify-center md:items-center
        md:h-1/2 overflow-hidden"
        >
          <div className="ipad  md:block">
            <img
              id="agTv"
              className="tv scale-125  2xl:scale-100 lg:scale-100 md:scale-50 "
              src={tvIcon}
            />
            <img
              className="h-40 absolute top-[50%] left-[50%] scale-150 2xl:top-[70%] "
              src={popcorn}
            />
          </div>
        </div>
        <div
          className="login-box bg-[#292929] flex-1 px-6 2xl:px-6 lg:px-0   text-white  w-full  flex flex-col lg:flex lg:flex-col
           rounded-t-3xl  2xl:h-full 2xl:justify-center 2xl:rounded-3xl  2xl:relative 2xl:bg-none overflow-hidden 
           lg:h-full lg:justify-center lg:rounded-3xl  lg:relative lg:bg-none  md:gap-40 
           
           md:px-32"
        >
          <div className="overlay-image hidden 2xl:block   lg:block h-full w-full inset-0 absolute ">
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="background w-ful h-full object-cover object-center "
            />
          </div>

          <div
            className=" title-btnLaptop 2xl:block lg:block  hidden bg-glass  mx-auto  rounded-xl 
          2xl:w-2/3 2xl:px-4 2xl:py-16 2xl:flex 2xl:flex-col gap-10
          
          lg:w-4/5 lg:px-4 lg:py-16 lg:flex lg:flex-col"
          >
            <div className="title  2xl:mx-auto z-50  2xl:w-full">
              <p className="text-[#050049] text-6xl font-black tracking-tight  mb-2  2xl:text-7xl  lg:text-7xl md:text-9xl">
                Welcome to
              </p>
              <p className="text-[#ff6565] font-black tracking-tighter text-4xl  mb-2">
                YouTube Feeds
              </p>
              <p className="slogan  tracking-tight font-bold text-xl text-gray-400  mt-4">
                Create endless custom feeds
              </p>
            </div>

            <div className="btn z-10">
              {/* <Link to={"/Feed"}> */}
                {" "}
                <button 
                 onClick={HandleSignIn}
                className=" hover:cursor-pointer bg-[#373737] text-lg font-bold tracking-tight w-full rounded-xl   hover:bg-blue-500 flex items-center  2xl:mx-auto py-2 px-1 lg:mx-auto">
                  <div className="img  h-full bg-white rounded-xl ">
                    {" "}
                    <img className=" h-10 inline-block" src={googleIcon} />{" "}
                  </div>
                  <div className="sign  h-full grow text-xl">
                    Sign up with Google
                  </div>
                </button>{" "}
              {/* </Link> */}
            </div>
          </div>

          <div
            className="title-btnMobile  2xl:hidden lg:hidden  flex flex-col h-full
           justify-evenly"
          >
            <div className="title  2xl:mx-auto z-50">
              <p className="text-white text-6xl font-black tracking-tight  mb-2  2xl:text-7xl">
                Welcome to
              </p>
              <p className="text-[#ff6565] font-black tracking-tighter text-4xl  mb-2">
                YouTube Feeds
              </p>
              <p className="slogan  tracking-tight font-bold text-xl text-gray-400    mt-4">
                Create endless custom feeds
              </p>
            </div>

            <div className=" btn z-10  ">
              {/* <Link to={"/Feed"}> */}
                {" "}
                <button 
                  onClick={HandleSignIn}
                className=" hover:cursor-pointer bg-[#373737] text-lg font-bold tracking-tight w-full rounded-xl   hover:bg-blue-500 flex items-center 2xl:mx-auto py-2  px-2">
                  <div className="img  h-full bg-white rounded-xl ">
                    {" "}
                    <img className=" h-10 inline-block" src={googleIcon} />{" "}
                  </div>
                  <div className="sign  h-full grow text-xl">
                    Sign up with Google
                  </div>
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import googleIcon from "../assets/google.svg";
import tvIcon from "../assets/tv.png";
import popcorn from "../assets/popCorn.png";
import { Link } from "react-router-dom";
import { auth, provider } from "../utils/firebase"
import { GoogleAuthProvider, signInWithPopup, browserPopupRedirectResolver } from "firebase/auth";
const Login = () => {


  const HandleSignIn = () => {
    signInWithPopup(auth, provider, browserPopupRedirectResolver)
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
      <div className="login-page  w-screen h-screen relatvie overflow-hidden flex justify-center items-end lg:items-center md:items-center">
        <img className=" absolute inset-0 h-full w-full object-cover object-center -z-10 lg:object-top" src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className="overlay absolute inset-0 h-full w-full bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>

        <div className="login-box text-white mb-14 z-20  w-full text-center flex flex-col gap-4 px-4">
          <p className="hero-line font-black tracking-tighter text-5xl leading-tight bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">DE-CLUTTER <br /> YOUR FEED</p>
          <p className="hero-line text-lg opacity-50">Take back control of the algorithm.</p>
          <button onClick={HandleSignIn} className="g-btn mt-4 flex justify-center items-center gap-2 bg-[#316FF6] w-[90%] text-nowrap lg:w-1/3 md:w-1/2 mx-auto px-3 py-4 rounded-2xl font-bold text-xl">
            <div className="logo-div mr-auto bg-glassNav px-2 py-1 rounded-xl"> <i class="fa-brands fa-google  text-2xl text-white"></i></div>
            <p className="mr-auto tracking-tight text-white font-bold">Continue with Google</p>
          </button>
        </div>

      </div>
    </>
  );
};

export default Login;

import googleIcon from "../assets/google.svg";
import tvIcon from "../assets/tv.png";
import popcorn from "../assets/popCorn.png";
import { useEffect, useState } from "react";
import { auth, provider } from "../utils/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  browserPopupRedirectResolver,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSignIn = () => {
    signInWithPopup(auth, provider, browserPopupRedirectResolver)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        setUser(user);
        dispatch(
          addUser({
            name: result.user.displayName,
            email: result.user.email,
            photoUrl: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    if (user != null) {
      navigate("/Feed");
    }
  }, [navigate, user]);

  return (
    <>
      <div className="login-page  w-screen h-screen relatvie overflow-hidden flex justify-center items-end lg:items-center md:items-center">
        <img
          className=" absolute inset-0 h-full w-full object-cover object-center -z-10 lg:object-top"
          src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="overlay absolute inset-0 h-full w-full bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>

        <div className="login-box text-white mb-14 z-20  w-full text-center flex flex-col gap-4 px-4">
          <p className="hero-line font-black tracking-tighter text-5xl leading-tight bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
            DE-CLUTTER <br /> YOUR FEED
          </p>
          <p className="hero-line text-lg opacity-50">
            Take back control of the algorithm.
          </p>
          <button
            onClick={HandleSignIn}
            className="g-btn mt-4 flex justify-center items-center gap-2 bg-[#316FF6] w-[90%] text-nowrap lg:w-1/3 md:w-1/2 mx-auto px-3 py-4 rounded-2xl font-bold text-xl"
          >
            <div className="logo-div mr-auto bg-glassNav px-2 py-1 rounded-xl">
              {" "}
              <i className="fa-brands fa-google  text-2xl text-white"></i>
            </div>
            <p className="mr-auto tracking-tight text-white font-bold">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

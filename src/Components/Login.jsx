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
        console.log(token);
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error in Login", credential, errorCode, errorMessage);
      });
  };

  dispatch(
    addUser({
      name: user?.displayName,
      email: user?.email,
      photoUrl: user?.photoURL,
    }),
  );

  useEffect(() => {
    if (user != null) {
      navigate("/search");
    }
  }, [navigate, user]);

  return (
    <>
      <div className="login-page  relatvie flex h-screen w-screen items-end justify-center overflow-hidden md:items-center lg:items-center">
        <img
          className=" absolute inset-0 -z-10 h-full w-full object-cover object-center lg:object-top"
          src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="overlay absolute inset-0 h-full w-full bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>

        <div className="login-box z-20 mb-14 flex  w-full flex-col gap-4 px-4 text-center text-white">
          <p className="hero-line bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-5xl font-black leading-tight tracking-tighter text-transparent">
            DE-CLUTTER <br /> YOUR FEED
          </p>
          <p className="hero-line text-lg opacity-50">
            Take back control of the algorithm.
          </p>
          <button
            onClick={HandleSignIn}
            className="g-btn mx-auto mt-4 flex w-[90%] items-center justify-center gap-2 text-nowrap rounded-2xl bg-[#316FF6] px-3 py-4 text-xl font-bold md:w-1/2 lg:w-1/3"
          >
            <div className="logo-div bg-glassNav mr-auto rounded-xl px-2 py-1">
              <i className="fa-brands fa-google  text-2xl text-white"></i>
            </div>
            <p className="mr-auto font-bold tracking-tight text-white">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

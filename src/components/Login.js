import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../utils/firebase"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const handleButtonClick = () => {
    const message = validateData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrMessage(message);
    if (message) return;
    //Sign up new users
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3c5e10eb-4b8f-4f6d-bc86-0087cf2c6e8c/web/IN-en-20250707-TRIFECTA-perspective_06686b82-c2e5-4118-ab7b-d575f79b304b_small.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute  w-4/12 p-12 my-32 mx-auto left-0 right-0 opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg  bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full rounded-lg  bg-gray-900"
        />

        <input
          ref={password}
          type="Password"
          placeholder="Enter your Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-900"
        />
        <p className="text-red-700 font-bold">{errMessage}</p>
        <button
          className="bg-red-700 w-full h-12 p-4 my-6 text-center rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-6 cursor-pointer" onClick={handleSignUp}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

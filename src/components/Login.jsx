/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkFormValidation } from "../utils/formValidation";
const Login = () => {
  const [signInForm, SetsignInForm] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErroMessage, setPasswordErroMessage] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef("");

  const handleSignInForm = () => {
    // Validate the form
    const emailRefValue = emailRef.current.value;
    const passwordRefValue = passwordRef.current.value;

    const message = checkFormValidation(emailRefValue, passwordRefValue);

    if (message.includes("emailId")) {
      setEmailErrorMessage(message);
    } else if (message.includes("password")) {
      setPasswordErroMessage(message);
    }

    // sign in signup (build authentication)
  };

  const toggleSignInform = () => {
    SetsignInForm(!signInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="netflix-backGround-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 bg-black my-24 left-0 right-0 mx-auto p-14 bg-opacity-80 rounded-lg text-white"
      >
        <h2 className="px-3 text-3xl text-white font-bold mb-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!signInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 mt-4 m-2 w-full border-2 border-gray-600  rounded-lg bg-black bg-opacity-10"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 mt-4 m-2 w-full border-2 border-gray-600  rounded-lg bg-black bg-opacity-10"
        />
        <p className="text-red-600 font-bold p-2 text-sm ml-2">
          {emailErrorMessage}
        </p>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password "
          className="mt-1 p-4 m-2 w-full border-2 border-gray-600  rounded-lg bg-black bg-opacity-10"
        />
        <p className="text-red-600 font-bold p-2 text-sm ml-2">
          {passwordErroMessage}
        </p>
        <button
          className="p-4 mt-2 m-2 w-full bg-red-600 text-base text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-red-700 "
          onClick={handleSignInForm}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          {signInForm ? (
            <p
              className="mt-7 text-center cursor-pointer"
              onClick={toggleSignInform}
            >
              New to NetFlix? <span className="font-bold">Sign up now.</span>
            </p>
          ) : (
            <p
              className="mt-7 text-center cursor-pointer"
              onClick={toggleSignInform}
            >
              Already Register? <span className="font-bold">Sign In now.</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

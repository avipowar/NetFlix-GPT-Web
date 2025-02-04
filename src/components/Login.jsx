import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [signInForm, SetsignInForm] = useState(true);

  const handleSignUp = () => {
    SetsignInForm(!signInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="netflix-backGround-img"
          className=""
        />
      </div>
      <form className="absolute w-4/12 bg-black my-28 left-0 right-0 mx-auto p-14 bg-opacity-80 rounded-lg text-white">
        <h2 className="px-3 text-3xl text-white font-bold mb-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h2>
        <input
          type="text"
          placeholder="Email Or Mobile Number"
          className="p-4 mt-4 m-2 w-full border-2 border-gray-600  rounded-lg bg-black bg-opacity-10"
        />
        <input
          type="password"
          placeholder="Password "
          className="mt-4 p-4 m-2 w-full border-2 border-gray-600  rounded-lg bg-black bg-opacity-10"
        />
        <div className="flex justify-center items-center mt-4 ml-2 p-4">
          <button className=" w-full bg-red-600 text-base text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-red-700 ">
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div>
          {signInForm ? (
            <p
              className="mt-7 text-center cursor-pointer"
              onClick={handleSignUp}
            >
              New to NetFlix? <span className="font-bold">Sign up now.</span>
            </p>
          ) : (
            <p
              className="mt-7 text-center cursor-pointer"
              onClick={handleSignUp}
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

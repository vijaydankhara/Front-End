import React from "react";
import { useState } from "react";

const CondiIfElse = () => {
  const [isLogIn, setLogIn] = useState(false);

  const toggelLogin = () => {
    setLogIn(!isLogIn);
  };

  // conditional rendring using if-else
  let data;
  if (isLogIn) {
    data = <h1>Welcome User!</h1>;
  } else {
    data = <h1>Plese login continue</h1>;
  }

  return (
    <div>
      <h1 className="bg-pink-300 text-center py-2 text-2xl">
        This is a Conditional Rendering page
      </h1>

      {data}

      <button
        className="m-5 px-5 rounded-full py-2 bg-purple-500 hover:bg-purple-800"
        onClick={toggelLogin}
      >
        {isLogIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default CondiIfElse;

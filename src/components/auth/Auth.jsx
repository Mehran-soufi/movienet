import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
  const [signIn, setSignIn] = useState(true);
  return (
    <section className="w-full h-screen auth">
      <div className="md:w-4/5 w-full mx-auto h-full flex lg:justify-end justify-center items-center">
        {signIn ? <SignIn setSignIn={setSignIn} /> : <SignUp setSignIn={setSignIn} />}
      </div>
    </section>
  );
}

export default Auth;

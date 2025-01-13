import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiMovie2AiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

function SignIn({ setSignIn }) {
  const navigate = useNavigate();
  return (
    <div className="lg:w-1/2 sm:w-4/5 w-11/12 h-auto flex justify-center items-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="sm:w-11/12 w-[99%] h-full rounded-md p-4 bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-slate-400">
            <div className="w-full flex justify-center items-center">
              <p
                onClick={() => navigate("/")}
                className="flex items-center gap-2 lg:text-2xl sm:text-xl text-base cursor-pointer text-fuchsia-700"
              >
                <RiMovie2AiFill />
                <span className="uppercase bg-gradient-to-r from-purple-700 to-pink-800 inline-block text-transparent bg-clip-text">
                  movienet
                </span>
              </p>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="w-full flex flex-col my-2">
                <label htmlFor="email" className="text-slate-300 text-lg">
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="p-1 my-1 border-none outline-none rounded text-lg text-slate-800 bg-white/40 bg-clip-padding backdrop-filter backdrop-blur-sm"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-800"
                />
              </div>
              <div className="w-full flex flex-col my-2">
                <label htmlFor="password" className="text-slate-300 text-lg">
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="p-1 my-1 border-none outline-none rounded text-lg text-slate-800 bg-white/40 bg-clip-padding backdrop-filter backdrop-blur-sm"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-800"
                />
              </div>
              <div className="w-full flex justify-center items-center my-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-700 to-pink-800 p-1 my-1 border-none outline-none rounded text-lg transition-all duration-200 hover:scale-95"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </div>
              <div className="w-full flex justify-center items-center my-2">
                <button
                  type="button"
                  className="w-full bg-transparent p-1 my-1 border border-slate-400 outline-none rounded transition-all duration-200 hover:scale-95"
                >
                  Forget Password
                </button>
              </div>
              <div className="w-full flex justify-center items-center flex-col mt-4">
                <div className="w-11/12 h-[1px] mx-auto bg-slate-300 relative flex justify-center items-center">
                  <span className="absolute px-2 rounded-sm bg-slate-300 text-slate-700">
                    Other way signin
                  </span>
                </div>
                <div className="w-full flex justify-center items-center gap-1 mt-8 mb-2">
                  <button
                    type="button"
                    className="w-11/12 flex items-center justify-center gap-1 p-1 my-1 text-black md:text-lg text-base bg-slate-200 outline-none rounded transition-all duration-200 hover:scale-95"
                  >
                    <FcGoogle />
                    Google
                  </button>
                  <button
                    type="button"
                    className="w-11/12 flex items-center justify-center gap-1 p-1 my-1 text-black md:text-lg text-base bg-slate-200 outline-none rounded transition-all duration-200 hover:scale-95"
                  >
                    <FaFacebook className="text-blue-500" />
                    Facebook
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-2 my-2">
                <p>Do you dosnt account?</p>
                <button
                  type="button"
                  onClick={() => setSignIn(false)}
                  className="text-gray-900 text-lg transition-all duration-200 hover:text-slate-600"
                >
                  Signup
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;

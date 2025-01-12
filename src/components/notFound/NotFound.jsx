import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="w-full h-screen flex justify-center items-center not-found">
      <div className="w-4/5 sm:h-4/5 h-3/5 mx-auto">
        <p className="lg:text-7xl sm:text-6xl text-4xl lg:p-10 sm:p-8 p-4 text-gray-600">oops!</p>
        <p className="lg:text-8xl sm:text-7xl text-5xl uppercase lg:ml-16 sm:ml-10 ml-0 text-violet-700">erro 404</p>
        <p className="lg:text-4xl sm:text-3xl text-2xl w-full flex justify-center items-center py-10 text-gray-600">
          page not found
        </p>
        <div className="w-full flex justify-center items-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-transparent outline-none border rounded-md py-1 lg:px-5 px-3 border-slate-400 lg:text-2xl sm:text-xl text-slate-400 duration-75 hover:scale-95 hover:bg-slate-400 hover:text-slate-600"
          >
            <IoHome />
            go home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

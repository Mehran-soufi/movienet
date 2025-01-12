import React from "react";
import { Link } from "react-router-dom";

function HeaderMenu({ setMenu }) {
  return (
    <div className="lg:w-1/2 w-full my-4 lg:my-0">
      <ul className="flex justify-center items-center lg:flex-row flex-col w-full">
        <li className="lg:w-auto w-11/12 mx-auto">
          <Link
            className="lg:w-auto w-full flex justify-center items-center lg:shadow-none shadow-sm shadow-pink-500 no-underline p-1 text-lg uppercase border-b border-transparent transition-all duration-200 hover:text-pink-500 hover:border-b-pink-500"
            to="/"
            onClick={() => setMenu(false)}
          >
            home
          </Link>
        </li>
        <li className="lg:w-auto w-11/12 mx-auto">
          <Link
            className="lg:w-auto w-full flex justify-center items-center lg:shadow-none shadow-sm shadow-pink-500 no-underline p-1 text-lg uppercase border-b border-transparent transition-all duration-200 hover:text-pink-500 hover:border-b-pink-500"
            to="/movies"
            onClick={() => setMenu(false)}
          >
            movie
          </Link>
        </li>
        <li className="lg:w-auto w-11/12 mx-auto">
          <Link
            className="lg:w-auto w-full flex justify-center items-center lg:shadow-none shadow-sm shadow-pink-500 no-underline p-1 text-lg uppercase border-b border-transparent transition-all duration-200 hover:text-pink-500 hover:border-b-pink-500"
            to="/tvs"
            onClick={() => setMenu(false)}
          >
            tv
          </Link>
        </li>
        <li className="lg:w-auto w-11/12 mx-auto">
          <Link
            className="lg:w-auto w-full flex justify-center items-center lg:shadow-none shadow-sm shadow-pink-500 no-underline p-1 text-lg uppercase border-b border-transparent transition-all duration-200 hover:text-pink-500 hover:border-b-pink-500"
            to="/actors"
            onClick={() => setMenu(false)}
          >
            actors
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;

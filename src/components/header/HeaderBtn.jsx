import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderBtn() {
  return (
    <div className="w-11/12 lg:w-1/2 lg:my-0 my-4 flex justify-end items-center lg:flex-row flex-col gap-4">
      <Link
        to="/search"
        target="_blank"
        className="lg:w-auto w-full no-underline text-lg outline-none flex justify-center items-center gap-2 rounded px-4 py-2 bg-transparent border border-slate-400 transition duration-200 hover:border-pink-500 hover:bg-pink-500"
      >
        <FaSearch />
        search
      </Link>
      <Link
        to="account"
        target="_blank"
        className="lg:w-auto w-full no-underline text-lg outline-none flex justify-center items-center gap-2 rounded px-4 py-2 bg-transparent border border-slate-400 transition duration-200 hover:border-pink-500 hover:bg-pink-500"
      >
        <FaUser />
        User account
      </Link>
    </div>
  );
}

export default HeaderBtn;

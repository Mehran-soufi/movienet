import React from "react";
import { ImNewspaper } from "react-icons/im";

function Newsletter() {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="lg:w-3/5 sm:w-4/5 w-11/12 p-2 my-8 rounded-lg bg-fuchsia-700 mx-auto flex flex-col sm:flex-row justify-between items-center gap-1"
    >
      <div className="sm:w-4/5 w-full flex justify-center sm:justify-start items-center sm:my-0 my-2">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Subscribe to the newsletter"
          className="w-full bg-transparent border-none outline-none text-lg p-1 placeholder:text-slate-200"
        />
      </div>
      <div className="sm:w-1/5 w-full flex justify-center sm:justify-end items-center sm:my-0 my-2 gap-2">
        <button className="w-full lg:text-lg text-base outline-none border-2 border-dashed border-pink-500 flex justify-center items-center gap-1 rounded-md p-1 bg-pink-500 transition-all duration-200 hover:bg-transparent">
          <ImNewspaper />
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default Newsletter;

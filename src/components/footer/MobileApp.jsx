import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

function MobileApp() {
  return (
    <div className="relative lg:w-3/5 sm:w-4/5 w-11/12 p-2 my-8 rounded-lg bg-sky-800 mx-auto flex flex-col sm:flex-row justify-between items-center mobile-app">
     <span className="absolute w-1 h-3/5 bg-[#191935] left-1/2 -translate-x-1/2 md:block hidden"></span>
      <div className="sm:w-1/2 w-full flex justify-center sm:justify-start items-center sm:my-0 my-2">
        <p className="lg:text-2xl sm:text-xl text-lg">Download mobile app</p>
      </div>
      <div className="sm:w-1/2 w-full flex justify-center sm:justify-end items-center sm:my-0 my-2 gap-2">
        <button className="lg:text-lg text-base outline-none border-2 border-dashed border-cyan-600 flex justify-center items-center gap-1 rounded-md p-1 bg-cyan-600 transition-all duration-200 hover:bg-transparent">
          <FaGooglePlay />
          Google Play
        </button>
        <button className="lg:text-lg text-base outline-none border-2 border-dashed border-cyan-600 flex justify-center items-center gap-1 rounded-md p-1 bg-cyan-600 transition-all duration-200 hover:bg-transparent">
          <FaAppStoreIos />
          App Store
        </button>
      </div>
    </div>
  );
}

export default MobileApp;

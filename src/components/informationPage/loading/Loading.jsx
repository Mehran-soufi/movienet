import React from "react";
import { motion } from "framer-motion";
import { IoReload } from "react-icons/io5";

const letters = "Movienet".split("");

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

function Loading({ informationLoading, informationError }) {
  return (
    <div className="w-full h-screen z-[10000] bg-gradient-to-br from-[#0D1B2A] to-[#0B3D91] flex flex-col justify-center items-center">
      {informationLoading && (
        <div className="w-full flex justify-center items-center gap-2 my-4">
          <motion.span
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
            className="lg:w-5 sm:w-4 w-3 lg:h-5 sm:h-4 h-3 rounded-full bg-gradient-to-br from-fuchsia-700 to-purple-700"
          ></motion.span>
          <motion.span
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{
              scale: [1, 1, 1.2, 1],
              opacity: [0.7, 0.7, 1, 0.7],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 1,
              },
            }}
            className="lg:w-5 sm:w-4 w-3 lg:h-5 sm:h-4 h-3 rounded-full bg-gradient-to-br from-fuchsia-700 to-purple-700"
          ></motion.span>
          <motion.span
            initial={{ scale: 1, opacity: 0.7 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
              },
            }}
            className="lg:w-5 sm:w-4 w-3 lg:h-5 sm:h-4 h-3 rounded-full bg-gradient-to-br from-fuchsia-700 to-purple-700"
          ></motion.span>
        </div>
      )}
      {informationError && (
        <div className="w-full flex justify-center items-center my-4">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 bg-transparent outline-none border rounded-md py-1 lg:px-5 px-3 border-slate-400 text-2xl text-slate-400 duration-75 hover:scale-95 hover:bg-slate-400 hover:text-slate-600"
          >
            try again
            <IoReload />
          </button>
        </div>
      )}
    </div>
  );
}

export default Loading;

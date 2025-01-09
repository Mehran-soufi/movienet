import React from "react";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="w-full h-screen z-[10000] bg-gradient-to-br from-[#0D1B2A] to-[#0B3D91] flex flex-col justify-center items-center">
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
    </div>
  );
}

export default Loading;

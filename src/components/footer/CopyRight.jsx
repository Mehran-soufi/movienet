import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function CopyRight() {
  return (
    <div className="w-full border-t border-slate-600 flex justify-center items-center pt-4">
      <p className="flex justify-center items-center gap-2 lg:text-xl sm:text-lg text-xs text-slate-300">All rights are reserved for Movienet site
      <FaRegCopyright />
      </p>
    </div>
  );
}

export default CopyRight;

import React from "react";
import { FaChevronUp } from "react-icons/fa";

function UpBtn() {
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={top}
      className="absolute text-lg outline-none -top-6 left-1/2 transform -translate-x-1/2  w-12 h-12 rounded-full bg-[#211e45] border-2 border-sky-800 flex justify-center items-center transition-all duration-200 hover:text-sky-800"
    >
      <FaChevronUp />
    </button>
  );
}

export default UpBtn;

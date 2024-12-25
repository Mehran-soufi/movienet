import React from "react";
import { FaDownload } from "react-icons/fa";

function DownloadButton({ quality }) {
  return (
    <div className="sm:w-1/2 w-full my-4 flex justify-between items-center">
      <p className="w-1/5 flex justify-center items-center">{quality}:</p>
      <button
        className="outline-none border-none rounded bg-gradient-to-br from-purple-500 to-pink-600 w-4/5 flex justify-center items-center py-2 transition-all duration-75 hover:scale-95 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-500"
        aria-label={`Download ${quality}`}
      >
        <FaDownload className="mr-2" /> Download
      </button>
    </div>
  );
}

export default DownloadButton;

import React from "react";
import DownloadButton from "./DownloadButton"; 

function Download() {
  return (
    <section className="w-11/12 sm:w-4/5 mx-auto my-4">
      <p className="sm:text-2xl text-xl text-slate-300">Download</p>
      <div className="w-full my-4 shadow shadow-purple-700 rounded-md p-4 flex flex-wrap">
        <DownloadButton quality="480p" />
        <DownloadButton quality="720p" />
        <DownloadButton quality="1080p" />
        <DownloadButton quality="4k" />
      </div>
    </section>
  );
}

export default Download;

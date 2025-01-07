import React, { useState } from "react";

function SearchCom({ setSearchItem, searchItem, setSearchText, searchText }) {
  const buttons = ["multi", "movie", "tv", "person"];
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="lg:w-3/5 sm:w-4/5 w-11/12 mx-auto h-1/2 flex flex-col justify-end pb-10 items-center gap-4">
      <div className="w-full">
        <input
          type="search"
          name="search"
          id="search"
          className={`w-full rounded-md p-3 border-none outline-none bg-[#211e45] transition-all duration-200  ${
            inputFocused
              ? "shadow-md shadow-cyan-800"
              : "shadow shadow-cyan-600"
          }`}
          placeholder="Search something..."
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-between items-center my-4">
        <p className="md:text-xl text-base sm:w-auto w-1/3">search in:</p>
        <ul className="flex items-center overflow-x-auto gap-2">
          {buttons.map((item, index) => (
            <li key={index}>
              <button
                className={`md:text-xl text-base rounded-md border-cyan-600 md:w-20 w-14 py-1 transition-all duration-200 hover:scale-95 ${
                  searchItem === item ? "bg-cyan-600" : "bg-transparent"
                } border`}
                onClick={() => setSearchItem(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchCom;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchCom from "./SearchCom";
import SearchRes from "./SearchRes";
import { ClipLoader } from "react-spinners";

function Search({ setIsLoading }) {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [searchItem, setSearchItem] = useState("multi");
  const [searchText, setSearchText] = useState("");

  const [searchingData, setSearchingData] = useState([]);
  const [searchingLoading, setSearchingLoading] = useState(false);
  const [searchingError, setSearchingError] = useState(false);

  const getSearchData = async () => {
    const trimmedSearchText = searchText.trim().replace(/\s+/g, " ");
    if (trimmedSearchText.length < 2) {
      setSearchingData([]);
      return;
    }

    setSearchingLoading(true);
    setSearchingError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${searchItem}?api_key=${apiKey}&query=${trimmedSearchText}`
      );
      setSearchingData(data.results);
      setSearchingLoading(false);
      setSearchingError(false);
      console.log(data);
    } catch (err) {
      setSearchingError(true);
      setSearchingLoading(false);
    } finally {
      setSearchingLoading(false);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [searchItem, searchText]);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <section className="w-full h-screen">
      <SearchCom
        setSearchItem={setSearchItem}
        searchText={searchText}
        searchItem={searchItem}
        setSearchText={setSearchText}
      />
      {searchingLoading && (
        <div className="flex justify-center items-center h-1/2">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      )}
      {searchingError && (
        <div className="flex justify-center items-center h-1/2">
          <p className="text-center text-red-500 bg-red-100 p-4 rounded-md shadow-md">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}
      {!searchingLoading &&
        !searchingError &&
        searchingData.length === 0 &&
        searchText.trim() !== "" && (
          <div className="flex justify-center items-center h-1/2">
            <p className="text-center text-gray-500">
              No results found for "{searchText}"
            </p>
          </div>
        )}
      {searchingData && searchText.trim() !== "" && (
        <SearchRes
          searchText={searchText}
          searchData={searchingData}
          searchItem={searchItem}
        />
      )}
    </section>
  );
}

export default Search;

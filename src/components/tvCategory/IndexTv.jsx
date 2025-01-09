import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TvCategory from "./TVCategory";
import Loading from "../informationPage/loading/Loading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#cbd5e1", // slate-300
  },
  "& .Mui-selected": {
    backgroundColor: "#0891b2", // cyan-600
    color: theme.palette.common.white,
  },
}));

function IndexTv({ setIsLoading }) {
  const { category, genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchMovies = async (page) => {
    setLoading(true);
    setError(false);
    setIsLoading(true);
    try {
      let url = "";

      if (category === "trending") {
        url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`;
      } else if (category === "latest") {
        url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&page=${page}`;
      } else if (category === "popular") {
        url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`;
      } else if (genreId) {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;
      }

      const { data } = await axios.get(url);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    fetchMovies(page);
  }, [category, genreId, page, setIsLoading]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <section className="w-full pt-16">
      {loading && <Loading isLoading={loading} isError={error} />}
      {error && <Loading isLoading={loading} isError={error} />}
      {movies && (
        <>
          <TvCategory movies={movies} category={category} genreId={genreId} />
          <Stack
            spacing={2}
            className="w-full flex justify-center items-center my-4"
          >
            <CustomPagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </>
      )}
    </section>
  );
}

export default IndexTv;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../informationPage/loading/Loading";
import ActorsList from "./ActorsList";
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
function Actors({ setIsLoading }) {
  const [actorData, setActorData] = useState(null);
  const [actorLoading, setActorLoading] = useState(false);
  const [actorError, setActorError] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const apiKey = import.meta.env.VITE_API_KEY;

  const getactorData = async () => {
    setActorLoading(true);
    setActorError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page}`
      );
      setActorData(data.results);
      setTotalPages(data.total_pages);
      setActorLoading(false);
      setActorError(false);
    } catch (err) {
      setActorError(true);
      setActorLoading(false);
    } finally {
      setActorLoading(false);
    }
  };

  useEffect(() => {
    getactorData();
  }, [page]);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {actorLoading || actorError || showLoading ? (
        <Loading isLoading={actorLoading || showLoading} isError={actorError} />
      ) : (
        <>
          <ActorsList actorData={actorData} />
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
    </>
  );
}

export default Actors;

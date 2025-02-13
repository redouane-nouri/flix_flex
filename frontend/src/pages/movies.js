import React from "react";
import MoviesTVsPage from "./movies_tv_page";

const MoviesPage = () => {
  return (
    <MoviesTVsPage plural_endpoint={"movies"} singular_endpoint={"movie"} />
  );
};

export default MoviesPage;

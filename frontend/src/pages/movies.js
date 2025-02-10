import React from "react";
import TopNav from "../components/top_nav";

const MoviesPage = () => {
  return (
    <div className="px-32 my-4 flex flex-col items-center">
      <TopNav selected_key="movies" />
      <div className="flex justify-center gap-4 flex-wrap">Movies</div>
    </div>
  );
};

export default MoviesPage;

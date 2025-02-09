import React from "react";
import TopNav from "../components/top_nav";

const MoviesPage = () => {
  return (
    <div className="px-32 my-4 flex flex-col items-center">
      <div className="w-[580px] my-6">
        <TopNav selected_key="movies" />
      </div>
      <div className="flex justify-center gap-4 flex-wrap">Movies</div>
    </div>
  );
};

export default MoviesPage;

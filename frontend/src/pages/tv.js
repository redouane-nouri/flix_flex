import React from "react";
import TopNav from "../components/top_nav";

const TvPage = () => {
  return (
    <div className="px-32 my-6 flex flex-col items-center">
      <TopNav selected_key="tv" />
      <div className="flex justify-center gap-4 flex-wrap">TV Series</div>
    </div>
  );
};

export default TvPage;

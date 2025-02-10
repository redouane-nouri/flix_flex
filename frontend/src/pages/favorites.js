import React from "react";
import TopNav from "../components/top_nav";

const FavoritesPage = () => {
  return (
    <div className="px-32 my-4 flex flex-col items-center">
      <TopNav selected_key="favorites" />
      <div className="flex justify-center gap-4 flex-wrap">Favorites</div>
    </div>
  );
};

export default FavoritesPage;

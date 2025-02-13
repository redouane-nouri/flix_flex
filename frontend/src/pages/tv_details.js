import React from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/details_card";
import TopNav from "../components/top_nav";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div className="px-32 flex flex-col items-center gap-8 mt-8">
      <TopNav selected_key="" />
      <DetailsCard id={id} endpoint="tv" />
    </div>
  );
};

export default MovieDetails;

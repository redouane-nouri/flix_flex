import React from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/details_card";

const TVDetails = () => {
  const { id } = useParams();
  return <DetailsCard id={id} />;
};

export default TVDetails;

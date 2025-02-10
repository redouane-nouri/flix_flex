import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SummaryCard from "../components/summary_card";
import TopNav from "../components/top_nav";
import api from "../lib/axios/axios";

const MoviesPage = () => {
  const [page, set_page] = useState(1);
  const [movies, set_movies] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return api
        .get(`/movie/popular?language=en-US&page=${page}`)
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      set_movies(data.results);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <div className="px-32 my-6 flex flex-col items-center">
      <TopNav selected_key="movies" />
      <div className="flex justify-center gap-4 mt-7 flex-wrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <SummaryCard
            is_loading={mutation.isPending}
            key={index}
            title={movies[index]?.title}
            description={movies[index]?.overview}
            image_endpoint={movies[index]?.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;

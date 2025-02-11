import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Stepper from "../components/stepper";
import SummaryCard from "../components/summary_card";
import TopNav from "../components/top_nav";
import api from "../lib/axios/axios";

const MoviesPage = () => {
  const [movies_page, set_movies_page] = useState(1);
  const [local_page, set_local_page] = useState(1);

  const [local_movies, set_local_movies] = useState([]);
  const [movies, set_movies] = useState([]);

  const [is_previous, set_is_revious] = useState(false);

  const mutation = useMutation({
    mutationFn: () => {
      return api
        .get(`/movie/popular?language=en-US&page=${movies_page}`)
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      set_movies(data.results);

      if (is_previous) {
        set_local_page(movies_page * 2);
        set_local_movies(data.results.slice(10, 20));
      } else {
        set_local_page(movies_page * 2 - 1);
        set_local_movies(data.results.slice(0, 10));
      }
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const handle_next_click = () => {
    window.scrollTo({ top: 0 });
    const next_page = local_page + 1;
    if (next_page % 2 === 0) {
      set_local_movies(movies.slice(10, 20));
      set_local_page(next_page);
    } else {
      set_is_revious(false);
      set_movies_page(movies_page + 1);
      mutation.mutate();
    }
  };

  const handle_previous_click = () => {
    window.scrollTo({ top: 0 });
    const previous_page = Math.max(local_page - 1, 1);
    if (previous_page % 2 !== 0) {
      set_local_movies(movies.slice(0, 10));
      set_local_page(previous_page);
    } else {
      set_is_revious(true);
      set_movies_page(movies_page - 1);
      mutation.mutate();
    }
  };

  return (
    <div className="px-32 my-6 flex flex-col items-center">
      <TopNav selected_key="movies" />
      <Stepper
        local_page={local_page}
        handle_next_click={handle_next_click}
        handle_previous_click={handle_previous_click}
      />
      <div className="flex justify-center gap-4 mt-7 flex-wrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <SummaryCard
            is_loading={mutation.isPending}
            key={index}
            title={local_movies[index]?.title}
            description={local_movies[index]?.overview}
            image_endpoint={local_movies[index]?.poster_path}
            inspect_endpoint={`/movies/${local_movies[index]?.id}`}
          />
        ))}
      </div>
      <Stepper
        local_page={local_page}
        handle_next_click={handle_next_click}
        handle_previous_click={handle_previous_click}
      />
    </div>
  );
};

export default MoviesPage;

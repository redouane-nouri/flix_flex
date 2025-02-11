import { useQuery } from "@tanstack/react-query";
import { Empty, notification, Spin } from "antd";
import React from "react";
import SummaryCard from "../components/summary_card";
import TopNav from "../components/top_nav";
import api from "../lib/axios/axios";

const FavoritesPage = () => {
  const [notif, notif_context] = notification.useNotification();
  const { isLoading: is_movies_loading, data: movies_favorites } = useQuery({
    queryKey: [
      "account",
      null,
      "favorite",
      "movies",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    queryFn: () =>
      api
        .get(
          `/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
        )
        .then((res) => res.data.results),
  });

  const { isLoading: is_tvs_loading, data: tvs_favorites } = useQuery({
    queryKey: [
      "account",
      null,
      "favorite",
      "tv",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    queryFn: () =>
      api
        .get(
          `/account/null/favorite/tv?language=en-US&page=1&sort_by=created_at.asc`,
        )
        .then((res) => res.data.results),
  });

  return (
    <div className="px-32 my-6 flex flex-col items-center">
      {notif_context}
      <TopNav selected_key="favorites" />

      {movies_favorites.length === 0 && tvs_favorites.length === 0 && (
        <Empty className="mt-32" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}

      {(is_movies_loading || is_tvs_loading) && <Spin />}

      {!(is_movies_loading || is_tvs_loading) && (
        <div className="flex justify-center gap-4 mt-7 flex-wrap">
          {movies_favorites.map((movie, index) => (
            <SummaryCard
              id={movie.id}
              key={index}
              title={movie.title}
              description={movie.overview}
              image_endpoint={movie.poster_path}
              inspect_endpoint={`/movies/${movie.id}`}
              notif={notif}
              plural_endpoint={"movies"}
              singular_endpoint={"movie"}
              is_favorite={true}
            />
          ))}
          {tvs_favorites.map((tv, index) => (
            <SummaryCard
              id={tv.id}
              key={index}
              title={tv.name}
              description={tv.overview}
              image_endpoint={tv.poster_path}
              inspect_endpoint={`/tv/${tv.id}`}
              notif={notif}
              plural_endpoint={"tv"}
              singular_endpoint={"tv"}
              is_favorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

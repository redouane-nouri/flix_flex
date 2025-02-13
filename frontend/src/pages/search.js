import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { notification, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stepper from "../components/stepper";
import SummaryCard from "../components/summary_card";
import TopNav from "../components/top_nav";
import api from "../lib/axios/axios";
import { fetch_all_favorites } from "../utils/functions/functions";

const SearchPage = () => {
  const { query } = useParams();
  const [notif, notif_context] = notification.useNotification();
  const [current_page, set_current_page] = useState(1);
  const [current_page_data, set_current_page_data] = useState([]);

  const { data: favorites_movies, isLoading: is_fav_movies_loading } = useQuery(
    {
      queryKey: [
        "account",
        null,
        "favorite",
        "movies",
        { language: "en-US", sort_by: "created_at.asc" },
      ],
      queryFn: () => fetch_all_favorites("movies"),
    },
  );

  const { data: favorites_tvs, isLoading: is_fav_tv_loading } = useQuery({
    queryKey: [
      "account",
      null,
      "favorite",
      "tv",
      { language: "en-US", sort_by: "created_at.asc" },
    ],
    queryFn: () => fetch_all_favorites("tv"),
  });

  const is_favorite = (id) => {
    if (!id) return false;
    return (
      favorites_movies.some((item) => item.id === id) ||
      favorites_tvs.some((item) => item.id === id)
    );
  };

  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["movies", query],
    queryFn: ({ pageParam }) =>
      api
        .get(
          `/search/multi?query=${query}&include_adult=false&language=en-US&page=${pageParam}`,
        )
        .then((res) => res.data),
    getNextPageParam: (last_page) => {
      if (last_page.page < last_page.total_pages) {
        return last_page.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (data) {
      set_current_page_data(data.pages[current_page - 1].results);
    }
  }, [data]);

  return (
    <div className="px-32 my-6 flex flex-col items-center">
      {notif_context}
      <TopNav selected_key="search" search_value={query} />
      <Stepper
        local_page={current_page}
        handle_next_click={() => {
          if (current_page === data.pages.length) {
            fetchNextPage();
          } else {
            set_current_page_data(data.pages[current_page].results);
          }

          set_current_page(current_page + 1);
        }}
        has_next_page={hasNextPage}
        handle_previous_click={() => {
          if (current_page > 1) {
            set_current_page_data(data.pages[current_page - 2].results);
            set_current_page(current_page - 1);
          }
        }}
      />
      <div className="flex justify-center gap-4 mt-7 flex-wrap">
        {(isLoading ||
          isFetchingNextPage ||
          is_fav_movies_loading ||
          is_fav_tv_loading) && <Spin />}

        {!isLoading &&
          !isFetchingNextPage &&
          !is_fav_movies_loading &&
          !is_fav_tv_loading &&
          current_page_data
            .filter((item) => item.media_type !== "person")
            .map((item, index) => (
              <SummaryCard
                id={item.id}
                is_loading={false}
                key={index}
                title={item.media_type === "movie" ? item.title : item.name}
                description={item.overview}
                image_endpoint={item.poster_path}
                inspect_endpoint={`/${
                  item.media_type === "movie" ? "movies" : "tv"
                }/${item.id}`}
                notif={notif}
                plural_endpoint={item.media_type === "movie" ? "movies" : "tv"}
                singular_endpoint={item.media_type === "movie" ? "movie" : "tv"}
                is_favorite={is_favorite(item.id)}
              />
            ))}
      </div>
      <Stepper
        local_page={current_page}
        handle_next_click={() => {
          if (current_page === data.pages.length) {
            fetchNextPage();
          } else {
            set_current_page_data(data.pages[current_page].results);
          }

          set_current_page(current_page + 1);
        }}
        has_next_page={hasNextPage}
        handle_previous_click={() => {
          if (current_page > 1) {
            set_current_page_data(data.pages[current_page - 2].results);
            set_current_page(current_page - 1);
          }
        }}
      />
    </div>
  );
};

export default SearchPage;

import { useMutation, useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import React, { useEffect, useState } from "react";
import Stepper from "../components/stepper";
import SummaryCard from "../components/summary_card";
import TopNav from "../components/top_nav";
import api from "../lib/axios/axios";
import { fetch_all_favorites } from "../utils/functions/functions";

const MoviesTVsPage = ({ plural_endpoint, singular_endpoint }) => {
  const [fetched_page, set_fetched_page] = useState(1);
  const [local_page, set_local_page] = useState(1);

  const [items_to_show, set_items_to_show] = useState([]);
  const [items_fetched, set_items_fetched] = useState([]);

  const [is_previous, set_is_previous] = useState(false);
  const [notif, notif_context] = notification.useNotification();

  const { isLoading: is_favorites_loading, data: favorites } = useQuery({
    queryKey: [
      "account",
      null,
      "favorite",
      plural_endpoint,
      { language: "en-US", sort_by: "created_at.asc" },
    ],
    queryFn: () => fetch_all_favorites(plural_endpoint),
  });

  const mutation = useMutation({
    mutationFn: () =>
      api
        .get(
          `/${singular_endpoint}/popular?language=en-US&page=${fetched_page}`,
        )
        .then((res) => res.data),
    onSuccess: (data) => {
      set_items_fetched(data.results);

      if (is_previous) {
        set_local_page(fetched_page * 2);
        set_items_to_show(data.results.slice(10, 20));
      } else {
        set_local_page(fetched_page * 2 - 1);
        set_items_to_show(data.results.slice(0, 10));
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
      set_items_to_show(items_fetched.slice(10, 20));
      set_local_page(next_page);
    } else {
      set_is_previous(false);
      set_fetched_page(fetched_page + 1);
      mutation.mutate();
    }
  };

  const handle_previous_click = () => {
    window.scrollTo({ top: 0 });
    const previous_page = Math.max(local_page - 1, 1);
    if (previous_page % 2 !== 0) {
      set_items_to_show(items_fetched.slice(0, 10));
      set_local_page(previous_page);
    } else {
      set_is_previous(true);
      set_fetched_page(fetched_page - 1);
      mutation.mutate();
    }
  };

  const is_favorite = (id) => {
    if (!id) return false;
    return favorites.some((item) => item.id === id);
  };

  return (
    <div className="px-32 my-6 flex flex-col items-center">
      {notif_context}
      <TopNav selected_key={plural_endpoint} />
      <Stepper
        local_page={local_page}
        handle_next_click={handle_next_click}
        handle_previous_click={handle_previous_click}
      />
      <div className="flex justify-center gap-4 mt-7 flex-wrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <SummaryCard
            id={items_to_show[index]?.id}
            is_loading={mutation.isPending}
            key={index}
            title={
              singular_endpoint === "movie"
                ? items_to_show[index]?.title
                : items_to_show[index]?.name
            }
            description={items_to_show[index]?.overview}
            image_endpoint={items_to_show[index]?.poster_path}
            inspect_endpoint={`/${plural_endpoint}/${items_to_show[index]?.id}`}
            notif={notif}
            plural_endpoint={plural_endpoint}
            singular_endpoint={singular_endpoint}
            is_favorite={
              !is_favorites_loading && is_favorite(items_to_show[index]?.id)
            }
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

export default MoviesTVsPage;

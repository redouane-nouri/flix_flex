import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, Skeleton, Spin, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../lib/axios/axios";
import { TMDB_IMAGES_BASE_URL } from "../utils/constants";

const { Meta } = Card;

const SummaryCard = ({
  id,
  title,
  description,
  image_endpoint,
  is_loading,
  inspect_endpoint,
  is_favorite,
  notif,
  plural_endpoint,
  singular_endpoint,
}) => {
  const [is_image_loading, set_is_image_loading] = useState(false);
  const query_client = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      api.post("/account/null/favorite", {
        media_id: id,
        media_type: singular_endpoint,
        favorite: !is_favorite,
      }),
    onSuccess: () => {
      notif.success({
        message: "Update Successfully",
        description: is_favorite
          ? "removed from favorites list."
          : "Added to favorites list.",
        showProgress: true,
        pauseOnHover: true,
      });
      query_client.invalidateQueries({
        queryKey: ["account", null, "favorite", plural_endpoint],
      });
    },
  });

  useEffect(() => {
    set_is_image_loading(true);
  }, [image_endpoint]);

  return (
    <Card
      loading={is_loading}
      className="flex-1 min-w-[250px] max-w-[300px] flex flex-col"
      cover={
        image_endpoint ? (
          <div>
            {(is_image_loading || is_loading) && (
              <Skeleton.Image className="!w-full" active={true} />
            )}
            <img
              alt={title}
              className={`${
                is_image_loading || is_loading ? "hidden" : "block"
              }`}
              src={`${TMDB_IMAGES_BASE_URL}${image_endpoint}`}
              onLoad={() => set_is_image_loading(false)}
            />
          </div>
        ) : undefined
      }
      actions={[
        <Tooltip key="inspect" title="Inspect">
          <Link to={inspect_endpoint}>
            <EyeOutlined />
          </Link>
        </Tooltip>,
        <Tooltip
          key="fav"
          title={`${
            is_favorite ? "Remove from favorites" : "Add to favorites"
          }`}
        >
          {mutation.isPending || is_loading ? (
            <Spin />
          ) : (
            <HeartOutlined
              onClick={() => mutation.mutate()}
              style={{ color: `${is_favorite ? "red" : ""}` }}
            />
          )}
        </Tooltip>,
      ]}
    >
      <Meta title={title} description={description} className="flex-1" />
    </Card>
  );
};

export default SummaryCard;

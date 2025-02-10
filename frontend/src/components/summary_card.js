import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card, Skeleton, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TMDB_IMAGES_BASE_URL } from "../utils/constants";

const { Meta } = Card;

const SummaryCard = ({
  title,
  description,
  image_endpoint,
  is_loading,
  inspect_endpoint,
}) => {
  const [is_image_loading, set_is_image_loading] = useState(false);

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
        <Tooltip key="fav" title="Add to favorites">
          <HeartOutlined />
        </Tooltip>,
      ]}
    >
      <Meta title={title} description={description} className="flex-1" />
    </Card>
  );
};

export default SummaryCard;

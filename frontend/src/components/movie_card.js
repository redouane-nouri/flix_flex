import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card, Tooltip } from "antd";
import React from "react";
import { TMDB_IMAGES_BASE_URL } from "../utils/constants";

const { Meta } = Card;

const MovieCard = ({ title, description, image_endpoint }) => (
  <Card
    className="flex-1 min-w-[250px] max-w-[300px]"
    cover={
      <img
        alt={title}
        src={`${TMDB_IMAGES_BASE_URL}${image_endpoint}`}
      />
    }
    actions={[
      <EyeOutlined key="view" />,
      <Tooltip title="Add to favorites">
        <HeartOutlined key="fav" />
      </Tooltip>,
    ]}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default MovieCard;

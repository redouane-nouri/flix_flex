import { EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card, Tooltip } from "antd";
import React from "react";
import { TMDB_IMAGES_BASE_URL } from "../utils/constants";

const { Meta } = Card;

const SummaryCard = ({ title, description, image_endpoint, is_loading }) => (
  <Card
    loading={is_loading}
    className="flex-1 min-w-[250px] max-w-[300px] flex flex-col"
    cover={
      image_endpoint ? (
        <img alt={title} src={`${TMDB_IMAGES_BASE_URL}${image_endpoint}`} />
      ) : undefined
    }
    actions={[
      <Tooltip key="inspect" title="Inspect">
        <EyeOutlined />
      </Tooltip>,
      <Tooltip key="fav" title="Add to favorites">
        <HeartOutlined />
      </Tooltip>,
    ]}
  >
    <Meta title={title} description={description} className="flex-1" />
  </Card>
);

export default SummaryCard;

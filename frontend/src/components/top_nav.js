import {
  HeartOutlined,
  PlayCircleOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Input, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    key: "movies",
    label: <Link to="/movies">Movies</Link>,
    icon: <PlayCircleOutlined />,
  },
  {
    key: "tv",
    label: <Link to="/tv">TV</Link>,
    icon: <VideoCameraOutlined />,
  },
  {
    key: "favorites",
    label: <Link to="/favorites">Favorites</Link>,
    icon: <HeartOutlined />,
  },
  {
    key: "search",
    label: <Input prefix={<SearchOutlined />} placeholder="Search..." />,
  },
];

const TopNav = ({ selected_key }) => {
  return (
    <Menu
      mode="horizontal"
      className="mb-2 w-full font-bold text-md"
      defaultSelectedKeys={[selected_key]}
      items={items}
    />
  );
};

export default TopNav;

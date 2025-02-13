import {
  HeartOutlined,
  PlayCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./search_input";

const TopNav = ({ selected_key, search_value }) => {
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
      label: <SearchInput current_value={search_value} />,
    },
  ];

  return (
    <Menu
      mode="horizontal"
      className="font-bold text-md w-[580px]"
      defaultSelectedKeys={[selected_key]}
      items={items}
    />
  );
};

export default TopNav;

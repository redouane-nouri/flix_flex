import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ current_value }) => {
  const [value, set_value] = useState(current_value);
  const navigate = useNavigate();
  return (
    <Input
      value={value}
      onPressEnter={() => navigate(`/search/${value}`)}
      onChange={(e) => set_value(e.target.value)}
      prefix={<SearchOutlined />}
      placeholder="Search..."
    />
  );
};

export default SearchInput;

import { Button, Typography } from "antd";
import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Stepper = ({ local_page, handle_previous_click, handle_next_click }) => {
  return (
    <div className="mt-10 flex gap-8 items-center">
      <div className="flex items-center gap-4">
        {local_page > 1 && <Typography>{`Page ${local_page - 1}`}</Typography>}
        <Button
          disabled={local_page === 1}
          onClick={handle_previous_click}
          icon={<ArrowLeftOutlined />}
        >
          Previous
        </Button>
      </div>
      <Typography>Current page: {local_page}</Typography>
      <div className="flex items-center gap-4">
        <Button onClick={handle_next_click} icon={<ArrowRightOutlined />}>
          Next
        </Button>
        <Typography>{`Page ${local_page + 1}`}</Typography>
      </div>
    </div>
  );
};

export default Stepper;

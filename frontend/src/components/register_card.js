import {
  ArrowRightOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, notification, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../lib/axios/axios";

const RegsiterCard = () => {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  const [notif, context] = notification.useNotification();
  const mutation = useMutation({
    mutationFn: () =>
      api.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/register`,
        {
          username,
          password,
        },
        { withCredentials: true },
      ),
    onSuccess: () => {
      notif.success({ description: "Registered successfully" });
    },
    onError: () => {
      notif.error({ description: "An error occured. please try again." });
    },
  });

  return (
    <div className="flex justify-center w-[1000px] gap-4 bg-white shadow-2xl rounded-xl overflow-hidden">
      {context}
      <div className="flex-1 flex max-w-[600px]  flex-col items-center gap-5 px-10 py-16">
        <Typography.Title level={2}>Register</Typography.Title>
        <div className="w-full">
          <Typography.Title level={5}>Username</Typography.Title>
          <Input
            value={username}
            onChange={(e) => set_username(e.target.value)}
            prefix={<MailOutlined />}
            placeholder="Enter your Username"
          />
        </div>
        <div className="w-full">
          <Typography.Title level={5}>Password</Typography.Title>
          <Input.Password
            prefix={<LockOutlined />}
            onChange={(e) => set_password(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
        </div>
        <Button
          iconPosition="end"
          icon={<ArrowRightOutlined />}
          shape="round"
          className="w-full"
          onClick={() => mutation.mutate()}
        >
          Register
        </Button>
        <div className="md:hidden">
          <Typography>
            Already have an account ?<Link to="/login"> Log In now !</Link>
          </Typography>
        </div>
      </div>
      <div className="flex-1 hidden md:flex bg-[#4C2F2A] p-10 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Typography.Title style={{ color: "white" }} level={3}>
            Welcome to Register Page
          </Typography.Title>
          <Typography style={{ color: "white" }}>
            Already have an account ?
          </Typography>
          <Link to="/login">
            <Button style={{ backgroundColor: "#633E38" }} shape="round">
              Log In now !
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegsiterCard;

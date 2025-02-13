import {
  ArrowRightOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, notification, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios/axios";

const LoginCard = () => {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  const [notif, context] = notification.useNotification();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () =>
      api.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`,
        {
          username,
          password,
        },
        { withCredentials: true },
      ),
    onSuccess: () => {
      navigate("/movies");
    },
    onError: () => {
      notif.error({ description: "Wrong Credential or an error occured." });
    },
  });
  return (
    <div className="flex justify-center w-[1000px] gap-4 bg-white shadow-2xl rounded-xl overflow-hidden">
      {context}
      <div className="flex-1 max-w-[600px] flex flex-col items-center gap-5 px-10 py-16">
        <Typography.Title level={2}>LogIn</Typography.Title>
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
            value={password}
            onChange={(e) => set_password(e.target.value)}
            prefix={<LockOutlined />}
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
          Log In
        </Button>
        <div className="md:hidden">
          <Typography>
            Don't have an account ?<Link to="/register"> Register now !</Link>
          </Typography>
        </div>
      </div>
      <div className="flex-1 hidden md:flex bg-[#4C2F2A] p-10 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Typography.Title style={{ color: "white" }} level={3}>
            Welcome to Login Page
          </Typography.Title>
          <Typography style={{ color: "white" }}>
            Don't have an account ?
          </Typography>
          <Link to="/register">
            <Button style={{ backgroundColor: "#633E38" }} shape="round">
              Register now !
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;

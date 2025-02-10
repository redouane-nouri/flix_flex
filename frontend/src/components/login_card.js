import {
  ArrowRightOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className="flex justify-center w-[1000px] gap-4 bg-white shadow-2xl rounded-xl overflow-hidden">
      <div className="flex-1 max-w-[600px] flex flex-col items-center gap-5 px-10 py-16">
        <Typography.Title level={2}>LogIn</Typography.Title>
        <div className="w-full">
          <Typography.Title level={5}>Username</Typography.Title>
          <Input prefix={<MailOutlined />} placeholder="Enter your Username" />
        </div>
        <div className="w-full">
          <Typography.Title level={5}>Password</Typography.Title>
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter your password"
          />
        </div>
        <Button
          iconPosition="end"
          icon={<ArrowRightOutlined />}
          shape="round"
          className="w-full"
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

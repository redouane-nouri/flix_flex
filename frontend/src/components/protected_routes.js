import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../lib/axios/axios";

const ProtectedRoutes = () => {
  const [is_auth, set_is_auth] = useState(null);
  const [request_sent, set_request_sent] = useState(false);

  const mutation = useMutation({
    mutationFn: () =>
      api.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/status`, {
        withCredentials: true,
      }),
    onSuccess: () => set_is_auth(true),
    onError: () => set_is_auth(false),
  });

  useEffect(() => {
    if (!request_sent) {
      set_request_sent(true);
      mutation.mutate();
    }
  });

  if (is_auth === null) {
    return (
      <div className="w-full">
        <Spin className="mx-auto block mt-40" />
      </div>
    );
  }

  return is_auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

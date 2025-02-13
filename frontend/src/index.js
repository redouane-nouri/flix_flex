import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const query_client = new QueryClient();

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorText: "#3D2C2E",
          colorLink: "#1E1E1E",
          colorPrimary: "#4E342E",
          colorBorderSecondary: "#5A5A5A",
        },
        components: {
          Breadcrumb: { itemColor: "#4E342E", linkColor: "#1E1E1E" },
          Input: {
            activeBorderColor: "#6D4C41",
            hoverBorderColor: "#8D6E63",
          },
          Button: {
            defaultBg: "#3E2723",
            fontWeight: 600,
            defaultColor: "white",
            defaultBorderColor: "transparent",
            defaultHoverBg: "#5D4037",
            defaultHoverColor: "white",
            defaultActiveBg: "#4E342E",
            defaultActiveBorderColor: "transparent",
            defaultActiveColor: "#E0E0E0",
            defaultHoverBorderColor: "transparent",
          },
        },
      }}
    >
      <QueryClientProvider client={query_client}>
        <App />
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>,
);

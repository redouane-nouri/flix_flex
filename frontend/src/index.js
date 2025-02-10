import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorText: "#3D2C2E", // Dark Brown
          colorLink: "#1E1E1E", // Almost Black
          colorPrimary: "#4E342E", // Rich Brown
          colorBorderSecondary: "#5A5A5A", // Muted Dark Gray
        },
        components: {
          Breadcrumb: { itemColor: "#4E342E", linkColor: "#1E1E1E" },
          Input: {
            activeBorderColor: "#6D4C41", // Warm Brown
            hoverBorderColor: "#8D6E63", // Soft Brown
          },
          Button: {
            defaultBg: "#3E2723", // Deep Brown
            fontWeight: 600,
            defaultColor: "white",
            defaultBorderColor: "transparent",
            defaultHoverBg: "#5D4037", // Richer Brown
            defaultHoverColor: "white",
            defaultActiveBg: "#4E342E",
            defaultActiveBorderColor: "transparent",
            defaultActiveColor: "#E0E0E0",
            defaultHoverBorderColor: "transparent",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);

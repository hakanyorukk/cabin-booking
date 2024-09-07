import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Add this line
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-emerald-500",
          style: {
            border: "1px solid #022c22",
            padding: "20px",
            color: "#f8fafc",
            backgroundColor: "#0d9488",
            fontSize: "16px",
          },
          iconTheme: {
            primary: "#022c22",
            secondary: "#FFFAEE",
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
);

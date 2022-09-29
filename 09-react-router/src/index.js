import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// Import BrowserRouter untuk bisa menggunakan router
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    {/* Gunakan BrowserRouter di sini */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

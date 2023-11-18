import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar.jsx";
import Table from "./pages/Table";
import CreateTool from "./pages/CreateTool";
import CreateEntity from "./pages/CreateEntity";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Table />} path="/" errorElement={<ErrorPage />} />
        <Route
          element={<CreateTool />}
          path="/CreateTool"
          errorElement={<ErrorPage />}
        />
        <Route
          element={<CreateEntity />}
          path="/CreateEntity"
          errorElement={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Home,
  Collections,
  Community,
  FindJobs,
  Tags,
} from "./components/pages/index.js";
import store from "./userState/store.js";
import { Provider } from "react-redux";
import Login from "./components/pages/Login.jsx";
import ProtectedLayout from "./components/ProtectedLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/collections" element={<Collections />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/login" element={<Login />}></Route>

      {/* Protexted Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/tags" element={<Tags />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

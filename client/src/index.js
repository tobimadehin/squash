/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { _404, Main, Login, Signup } from "../src/Routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <_404 />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <_404 />
  },
  {
    path: "/main",
    element: <Main />,
    errorElement: <_404 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

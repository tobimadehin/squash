/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Main from './Routes/Main';
import Lobby from './Routes/Lobby';
import _404 from './Routes/_404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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

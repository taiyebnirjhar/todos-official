import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import AllTaskRoute from "../Pages/Home/AllTaskRoute/AllTaskRoute";
import CompletedTask from "../Pages/Home/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/Home/MyTaskRoute/MyTask";
import Loading from "../Pages/Loading/Loading";
import Login from "../Pages/Login/Login";
import Regester from "../Pages/Regester/Regester";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      </>
    ),
    children: [
      {
        path: "/",
        element: <AllTaskRoute />,
      },
      {
        path: "/alltask",
        element: <AllTaskRoute />,
      },
      {
        path: "/mytask",
        element: <MyTask />,
      },
      {
        path: "/completetask",
        element: <CompletedTask />,
      },
    ],

    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/regester",
    element: <Regester />,
    errorElement: <Error />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;

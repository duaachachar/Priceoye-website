import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./componants/Layout/MainLayout";
import Register from "./componants/auth/Register";
import Login from "./componants/auth/Login";
import MyAccount from "./componants/account/MyAccount";
import EditProfile from "./componants/account/EditProfile";
import OrderList from "./componants/OrderList";
import ErrorPage from "./componants/ErrorPage";
import ProtectedRoute from "./componants/Protected-route/ProtectedRoute";
import CardDetail from "./componants/CardSection/CardDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/card-detail/:id",
        element: <CardDetail />,
      },
      {
        path: "/account",
        element: (
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit-profile",
        element: (
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-list",
        element: <OrderList />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <RouterProvider router={router} />
)

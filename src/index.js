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
import ErrorPage from "./componants/ErrorPage";
import ProtectedRoute from "./componants/Protected-route/ProtectedRoute";
import CardDetail from "./componants/CardSection/CardDetailPage";
import DeliveryPage from "./componants/CardSection/Delivery/DeliveryPage";
import { Provider } from 'react-redux';
import store from './store';
import TrackOrderList from "./componants/CardSection/TrackOrderList";

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
        path: "/card-detail/:reviews",
        element: <CardDetail />,
      },
      {
        path: "/delivery-page",
        element: (
          <ProtectedRoute>
            <DeliveryPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/track-order",
        element: (
          <ProtectedRoute>
            <TrackOrderList />
          </ProtectedRoute>
        ),
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
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
)

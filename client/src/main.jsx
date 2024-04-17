import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// import About from "./components/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Home_admin from "./pages/Home_admin.jsx";
import Register from "./pages/Register.jsx";
import ProductUser from "./pages/ProductUser.jsx";
import Card from "./pages/Card.jsx";
import Product from "./components/Product.jsx";
import Header_Admin from "./components/Header_Admin.jsx";
import Detail_transaction from "./components/Detail_transaction.jsx";
import Data_kasir from "./components/Data_kasir.jsx";
import Transaction from "./components/Transaction.jsx";
import BokingMeja from "./components/BokingMeja.jsx";
import QrCode from "./components/QrCode.jsx";
import Loading from "./components/Loading.jsx";
import Add_prodact from "./components/Add_prodact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home_admin",
        element: <Home_admin />,
      },

      {
        path: "product",
        element: <Product />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/productUser",
        element: <ProductUser />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/header_admin",
        element: <Header_Admin />,
      },

      {
        path: "/transaction",
        element: <Transaction />,
      },

      {
        path: "/detail_transaction",
        element: <Detail_transaction />,
      },
      {
        path: "/data_kasir",
        element: <Data_kasir />,
      },

      {
        path: "/bokingMeja",
        element: <BokingMeja />,
      },

      {
        path: "/qrCode",
        element: <QrCode />,
      },

      {
        path: "/loading",
        element: <Loading />,
      },

      {
        path: "/add_prodact",
        element: <Add_prodact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

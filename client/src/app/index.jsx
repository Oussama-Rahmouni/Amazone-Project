// src/router.js
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomeLayout from "../components/Layout/Layout";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OrderSummary from "../pages/OrderSummary";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardAdmin from "../pages/dashboard/DashboardAdmin";
import DashProducts from "../pages/dashboard/DashProducts";
import DashSales from "../pages/dashboard/DashSales";
import DashOrders from "../pages/dashboard/DashOrders";
import DashShipping from "../pages/dashboard/DashShipping";
import DashInbox from "../pages/dashboard/DashInbox";
import DashUsers from "../pages/dashboard/DashUsers";
import DashCalendar from "../pages/dashboard/DashCalendar";
import ShippingView from "../pages/ShippingView";
import UncontrolledExample from "../components/common/Test";
import AllProducts from "../pages/AllProducts";
import ProductLayout from "../components/Layout/ProductLayout";
import Tasti from "../pages/Tasti";
import Navbar from "../components/Layout/Navbar";

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  { path: "register", element: <Register /> },
  { path: "shipping", element: <ShippingView /> },
  { path: "car", element: <UncontrolledExample /> },
  { path: "tasti", element: <Navbar /> },
  {
    path: "/",
    element: <ProductLayout />,
    children: [{ path: "all-products", element: <AllProducts /> }],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order", element: <OrderSummary /> },
      { path: "profile", element: <Profile /> },
      { path: "category/:name", element: <Products /> },
      { path: "products", element: <Products /> },
      { path: "products/:name", element: <ProductDetail /> },

      // You can add more nested routes here
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardAdmin /> },
      { path: "products", element: <DashProducts /> },
      { path: "sales", element: <DashSales /> },
      { path: "orders", element: <DashOrders /> },
      { path: "shipping", element: <DashShipping /> },
      { path: "inbox", element: <DashInbox /> },
      { path: "users", element: <DashUsers /> },
      { path: "calendar", element: <DashCalendar /> },
    ],
  },
  // Other top-level routes that might not use the common layout can be added here
]);

export default router;

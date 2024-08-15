import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layout/Layout";
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
import AllProducts from "../pages/AllProducts";
import ProductLayout from "../components/Layout/ProductLayout";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },

  {
    path: "/",
    element: <ProductLayout />,
    children: [
      { path: "all-products", element: <AllProducts /> },
      { path: "category/:name", element: <Products /> }, //missing sidebar design
      { path: "product/:name", element: <ProductDetail /> }, // missing the design and the logic
    ],
  },

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order", element: <OrderSummary /> },
      { path: "profile", element: <Profile /> },
      { path: "shipping", element: <ShippingView /> },
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
]);

export default router;

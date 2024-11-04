import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";
import Statistics from "../Page/Statistics";
import ProductCategory from "../Page/ProductCategory";
import NotFound from "../Page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCategory></ProductCategory>,
            loader: () => fetch("/public/data.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCategory></ProductCategory>,
            loader: () => fetch("/public/data.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";
import Statistics from "../Page/Statistics";
import ProductCategory from "../Page/ProductCategory";
import NotFound from "../Page/NotFound";
import ProductDetails from "../Page/ProductDetails";
import Contact from "../Page/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await fetch("/categories.json");
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to fetch products: ${errorMessage}`);
          }
          return response.json(); 
        },
        children: [
          {
            path: "/",
            element: <ProductCategory />,
            loader: async () => {
              const response = await fetch("/data.json");
              if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to fetch products: ${errorMessage}`);
              }
              return response.json(); 
            },
          },
          {
            path: "/category/:category",
            element: <ProductCategory />,
            loader: async () => {
              const response = await fetch("/data.json");
              if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to fetch products: ${errorMessage}`);
              }
              return response.json(); 
            },
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
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
        loader: async () => {
          const response = await fetch("/data.json");
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to fetch products: ${errorMessage}`);
          }
          return response.json(); 
        },
      },
    ],
  },
]);

export default routes;

import React from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }, { path: "product/:id", element: <ProductPage /> }]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );

};


export default App;
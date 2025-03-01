import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/layout/pages/Products";
import AddProduct from "../components/layout/pages/AddProduct";

const MainRoutes = () => {
  const routes = [
    {
      link: "/add",
      element: <AddProduct />,
      id: 1,
    },
    {
      link: "/products",
      element: <Products />,
      id: 2,
    },
  ];

  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

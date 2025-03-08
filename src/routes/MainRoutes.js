import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/layout/pages/Products";
import AddProduct from "../components/layout/pages/AddProduct";
import ListProduct from "../components/layout/pages/ListProduct";

const MainRoutes = () => {
  const routes = [
    {
      link: "/add",
      element: <AddProduct />,
      id: 1,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 2,
    },
    {
      link: "/products",
      element: <Products />,
      id: 3,
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

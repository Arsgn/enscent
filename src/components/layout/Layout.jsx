import React from "react";
import MainRoutes from "../../routes/MainRoutes";
import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <MainRoutes />
      </main>
    </>
  );
};

export default Layout;

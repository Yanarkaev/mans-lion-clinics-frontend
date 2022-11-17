import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainFooter from "../MainPage/MainFooter";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default Layout;

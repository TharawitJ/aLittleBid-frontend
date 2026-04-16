import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
        <NavBar/>
        <Outlet />
        <Footer/>
    </>
  );
}

export default MainLayout;

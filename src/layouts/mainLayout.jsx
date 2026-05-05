import React from "react";
import { Outlet,ScrollRestoration } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration/>
    </div>
  );
}

export default MainLayout;

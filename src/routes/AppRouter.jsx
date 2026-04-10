import React from "react";
import MainLayout from "../layouts/mainLayout.jsx";
import  {createBrowserRouter} from "react-router";
import UserPage from "../pages/user_page";
import HomePage from "../pages/HomePage.jsx";
import AuctionPage from "../pages/AuctionPage.jsx";

const Rounter = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
      children: [
      { index: true, element: <HomePage /> },
      // { path: "user_page", element: <user_page /> },
    ],
  },
]);

export default Rounter;

import React from "react";
import MainLayout from "../layouts/mainLayout.jsx";
import  {createBrowserRouter} from "react-router";
import UserPage from "../pages/user_profile.jsx"
import AddProduct from "../pages/sellerListProduct"
import Payment from "../pages/payment"
import OrderList from "../pages/orderlist"
import SellerListProduct from "../pages/sellerListProduct.jsx"

const Rounter = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
      children: [
      { index: true, element: <Payment /> },
      // { path: "user_page", element: <user_page /> },
    ],
  },
]);

export default Rounter;

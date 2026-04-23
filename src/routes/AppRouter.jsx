import React from "react";
import MainLayout from "../layouts/mainLayout.jsx";
import { createBrowserRouter } from "react-router";
import UserProfilePage from "../pages/UserProfilePage.jsx";
import HomePage from "../pages/HomePage.jsx";
import AuctionPage from "../pages/AuctionPage.jsx";
import SellerUserListProduct from "../pages/SellerListProduct.jsx";
import ProductPageForSeller from "../pages/ProductPageForSeller";
import ProductDetailBid from "../pages/ProductDetailBid";
import ProductPage from "../pages/ProductPage";
import AddProduct from "../pages/AddProduct.jsx";
import OrderList from "../pages/OrderList.jsx";
import Payment from "../pages/Payment.jsx";
// import ActiveBid from "../pages/ActiveBid.jsx";
import Favorite from "../pages/Favorite.jsx";
import ActiveBid from "../pages/ActiveBid.jsx";
import LoginPage from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import RequestOTP from "../pages/RequestOTP.jsx";
import VerifyOTP from "../pages/VerifyOTP.jsx";
import ResetPassword from "../pages/Resetpassword.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "user_profile", element: <UserProfilePage /> },
      { path: "auction", element: <AuctionPage /> },
      { path: "seller_list_product", element: <SellerUserListProduct /> },
      { path: "seller_product", element: <ProductPageForSeller /> },
      { path: "product_detail_bid", element: <ProductDetailBid /> },
      { path: "products", element: <ProductPage /> },
      { path: "activebid", element: <ActiveBid /> },
      { path: "add_product", element: <AddProduct /> },
      { path: "my_order_list", element: <OrderList /> },
      { path: "favorite", element: <Favorite /> },
      { path: "payment", element: <Payment /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <Register /> },
      { path: "request-otp", element: <RequestOTP /> },
      { path: "verify-otp", element: <VerifyOTP /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
]);

export default Router;

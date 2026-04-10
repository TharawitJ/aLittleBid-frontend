import React from "react";
import MainLayout from "../layouts/mainLayout.jsx";
import  {createBrowserRouter} from "react-router";
import UserProfilePage from "../pages/user_profile"
import HomePage from "../pages/homepage";
import AuctionPage from "../pages/AuctionPage.jsx";
import SellerUserListProduct from "../pages/sellerListProduct"
import ProductPageForSeller from "../pages/ProductPageForSeller"
import ProductDetailBid from "../pages/ProductDetailBid"
import ProductPage from "../pages/ProductPage"
import AddProduct from "../pages/add_product"
import OrderList from "../pages/orderlist"
import Payment from "../pages/payment"

const Rounter = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "user_profile", element: <UserProfilePage /> },
      { path: "auction", element: <AuctionPage /> },
      { path: "seller_list_product", element: <SellerUserListProduct /> },
      { path: "seller_product", element: <ProductPageForSeller /> },
      { path: "product_detail_bid", element: <ProductDetailBid /> },
      { path: "products", element: <ProductPage /> },
      { path: "add_product", element: <AddProduct /> },
      { path: "my_order_list", element: <OrderList /> },
      { path: "payment", element: <Payment /> },
    ],
  },
]);

export default Rounter;

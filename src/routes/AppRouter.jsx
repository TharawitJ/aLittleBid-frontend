import React from "react";
import MainLayout from "../layouts/mainLayout.jsx";
import  {createBrowserRouter} from "react-router";
import UserProfilePage from "../pages/UserProfilePage.jsx"
<<<<<<< HEAD
import HomePage from "../pages/homepage.jsx";
import AuctionPage from "../pages/AuctionPage.jsx";
import SellerUserListProduct from "../pages/sellerListProduct.jsx"
=======
import HomePage from "../pages/HomePage.jsx";
import AuctionPage from "../pages/AuctionPage.jsx";
import SellerUserListProduct from "../pages/SellerListProduct.jsx"
>>>>>>> dev
import ProductPageForSeller from "../pages/ProductPageForSeller"
import ProductDetailBid from "../pages/ProductDetailBid"
import ProductPage from "../pages/ProductPage"
import AddProduct from "../pages/AddProduct.jsx"
<<<<<<< HEAD
import OrderList from "../pages/orderlist.jsx"
import Payment from "../pages/payment.jsx"
=======
import OrderList from "../pages/OrderList.jsx"
import Payment from "../pages/Payment.jsx"
>>>>>>> dev
// import ActiveBid from "../pages/ActiveBid.jsx";
import Favorite from "../pages/Favorite.jsx";
import ActiveBid from "../pages/ActiveBid.jsx";

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
      { path: "activebid", element: <ActiveBid /> },
      { path: "add_product", element: <AddProduct /> },
      { path: "my_order_list", element: <OrderList /> },
      { path: "favorite", element: <Favorite /> },
      { path: "payment", element: <Payment /> },
    ],
  },
]);

export default Rounter;

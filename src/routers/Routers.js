import * as pages from "../pages";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectRoute";

import AddProduct from "../admin/AddProduct";
import AllProduct from "../admin/AllProduct";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";

const Routers = () => {
  return (
    <Routes>
      <Route index path="/" element={<pages.Home />} />
      <Route path="shop" element={<pages.Shop />} />
      <Route path="shop/:id" element={<pages.ProductDetails />} />
      <Route path="cart" element={<pages.Cart />} />

      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<pages.Checkout />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-product" element={<AllProduct />} />
        <Route path="dashboard/add-product" element={<AddProduct />} />
        <Route path="dashboard/users" element={<Users />} />
        
      </Route>

      <Route path="login" element={<pages.Login />} />
      <Route path="signup" element={<pages.Signup />} />
    </Routes>
  );
};

export default Routers;

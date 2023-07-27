import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import Products from "../Pages/Products.jsx";
import SingleProduct from "../Pages/SingleProduct.jsx";

import Login from "../Pages/Login.jsx";
import UserProfile from "../Pages/UserProfile.jsx";

import Dashboard from "../Pages/Admin/Dashboard.jsx";
import ProductList from "../Pages/Admin/ProductList.jsx";
import Footer from "../Layouts/Footer.jsx";
import Navbar from "../Layouts/Navbar.jsx";
import PrivateRoute from "../Routes/PrivateRoute.jsx";

import DashboardHome from "../Pages/Admin/DashboardHome.jsx";

import UserList from "../Pages/Admin/UserList.jsx";

import Page404NotFound from "../Layouts/Page404NotFound.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import About from "../Pages/About.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const AllRoutes = () => {
  return (
    <>
      {/* main lelo website routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products/:query" element={<Products />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
        </Route>

        {/* admin dashboard routes */}
        <Route
          path="/"
          element={
            <AdminRoutes>
              <Dashboard />
            </AdminRoutes>
          }
        >
          <Route
            path="/dashboard"
            element={
              <AdminRoutes>
                <DashboardHome />
              </AdminRoutes>
            }
          />
          <Route
            path="/dashboard/products"
            element={
              <AdminRoutes>
                <ProductList />
              </AdminRoutes>
            }
          />

          <Route
            path="/dashboard/users/"
            element={
              <AdminRoutes>
                <UserList />
              </AdminRoutes>
            }
          />
        </Route>
        <Route path="*" element={<Page404NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

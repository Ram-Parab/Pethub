import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/LandingPage/Pages/Home"
import Signup from "./LoginSingupPage/Signup";
import Login from "./LoginSingupPage/Login";
import ProductPage from "./ProductPage/ProductPage";
import Services from "./Service Page/Services";
import SingleProductPage from "./SingleProductPage/SingleProductPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pets" element={<ProductPage />} />
      <Route path="/pets/:id" element={<SingleProductPage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AllRoutes;

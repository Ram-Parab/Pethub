import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Components/LandingPage/Pages/Home"
import Signup from "./LoginSingupPage/Signup";
import Login from "./LoginSingupPage/Login";
import ProductPage from "./ProductPage/ProductPage";
import Services from "./Service Page/Services";
import ServiceRequests from "./Service Page/ServiceRequests";
import SingleProductPage from "./SingleProductPage/SingleProductPage";

const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pets" element={<ProductPage />} />
      <Route path="/pets/:id" element={<SingleProductPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service-requests" element={<ServiceRequests />} />
    </Routes>
  );
};

export default AllRoutes;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";
import ContactPage from "./components/home/ContactUs";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Layout wraps all routes inside it */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop-grid" element={<Shop />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          {/* <Route path="product/:id" element={<ProductDetails />} /> */}
          <Route path="product-details" element={<ProductDetails />} />

          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="my-account" element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          {/* Add more routes here as you build pages */}

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

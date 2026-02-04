import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";

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

          {/* Add more routes here as you build pages */}

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

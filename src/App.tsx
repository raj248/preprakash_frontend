import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Placeholder components for pages (You will create these in src/pages/)
const Shop = () => (
  <div className="container py-5">
    <h1>Shop Page Content</h1>
  </div>
);
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Layout wraps all routes inside it */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          {/* Add more routes here as you build pages */}

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

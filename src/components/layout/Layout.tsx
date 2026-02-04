import React from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../common/Preloader";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

const Layout: React.FC = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main className="main__content_wrapper">
        {/* Everything inside the Routes in App.tsx will appear here */}
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;

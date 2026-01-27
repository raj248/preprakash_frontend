import React from "react";
import Preloader from "./components/common/Preloader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <>
      <Preloader />
      <Header />

      <main>{/* Your content will go here */}</main>

      <Footer />
    </>
  );
};

export default App;

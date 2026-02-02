import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import CategoryCollection from "@/components/home/CategoryCollection";
import GridBanner from "@/components/home/GridBanner";
import TrendingProducts from "@/components/home/TrendingProducts";

const Home: React.FC = () => {
  return (
    <>
      <HeroSlider />
      <CategoryCollection />

      <GridBanner />

      <GridBanner
        title="Soak Up The Savings"
        description="Brighten up your look with vibrant gemstone jewelry."
        image="/assets/banner/banner14.webp"
        reverse={true}
      />
      <TrendingProducts />
      {/* Other sections like Featured Products, Instagram Feed, etc. */}
    </>
  );
};

export default Home;

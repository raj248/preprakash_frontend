import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import CategoryCollection from "@/components/home/CategoryCollection";
import GridBanner from "@/components/home/GridBanner";
import TrendingProducts from "@/components/home/TrendingProducts";
import BannerSection from "@/components/home/BannerSection";
import SmallProductSection from "@/components/home/SmallProductSection";
import AdviceBanner from "@/components/home/AdviceBanner";
import BlogSection from "@/components/home/BlogSection";
import TestimonialSection from "@/components/home/TestimonialSection";

const featuredData = [
  {
    id: 1,
    title: "Z 7-8mm Freshwater Button",
    price: "$220.52",
    oldPrice: "$359.00",
    rating: 4,
    reviews: 126,
    img: "/assets/product/small-product/product1.webp",
  },
  {
    id: 2,
    title: "Diamond Stud Earrings",
    price: "$150.00",
    rating: 5,
    reviews: 88,
    img: "/assets/product/small-product/product2.webp",
  },
  {
    id: 3,
    title: "Gold Eternity Ring",
    price: "$180.52",
    oldPrice: "$220.00",
    rating: 3,
    reviews: 45,
    img: "/assets/product/small-product/product3.webp",
  },
];

const onsaleData = [
  {
    id: 4,
    title: "Gold Eternity Ring",
    price: "$180.52",
    oldPrice: "$220.00",
    rating: 3,
    reviews: 45,
    img: "/assets/product/small-product/product4.webp",
  },
  {
    id: 5,
    title: "Diamond Stud Earrings",
    price: "$150.00",
    rating: 5,
    reviews: 88,
    img: "/assets/product/small-product/product5.webp",
  },
  {
    id: 6,
    title: "Z 7-8mm Freshwater Button",
    price: "$220.52",
    oldPrice: "$359.00",
    rating: 4,
    reviews: 126,
    img: "/assets/product/small-product/product6.webp",
  },
];

const blogData = [
  {
    id: 1,
    author: "ROBERT SMITH",
    title: "Cumque nam tenetur error aliquam autem placeat ratione aut!",
    image: "/assets/blog/blog4.webp",
    link: "/blog",
  },
  {
    id: 2,
    author: "ROBERT SMITH",
    title: "Ad esse soluta, is unde totam odio.",
    image: "/assets/blog/blog5.webp",
    link: "/blog",
  },
  {
    id: 3,
    author: "ROBERT SMITH",
    title: "Hypoallergenic Wedding Bands",
    image: "/assets/blog/blog6.webp",
    link: "/blog",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial5.webp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3,
  },
  {
    id: 2,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial5.webp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial5.webp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 2,
  },
  {
    id: 4,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial5.webp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 5,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial5.webp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial5.webp",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 0,
  },

  // Add more here...
];

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
      <BannerSection />
      <SmallProductSection
        featuredProducts={featuredData}
        onsaleProducts={onsaleData}
        trendingProducts={featuredData} // You can reuse or make a third list
      />
      <AdviceBanner
        title="Flat 50% Off On Fresh Jewelry"
        description="50% OFF on the most popular jewelry brands. Order all classy products today!"
        image="/assets/banner/banner-fullwidth5.webp"
        link="/shop"
      />
      <BlogSection blogs={blogData} />
      <TestimonialSection data={testimonials} />
      {/* Other sections like Featured Products, Instagram Feed, etc. */}
    </>
  );
};

export default Home;

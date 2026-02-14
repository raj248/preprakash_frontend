import React, { useEffect } from "react";
// import ProductCard from "../shop/ProductCard";
import { useProduct } from "@/hooks/useProducts";
import ProductCard from "../shared/ProductCard";

// const trendingData: Product[] = [
//   {
//     id: 1,
//     title: "Z 7-8mm Freshwater Button",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product9.webp",
//     secondaryImg: "/assets/product/main-product/product16.webp",
//     rating: 3,
//     reviews: 126,
//   },
//   {
//     id: 2,
//     title: "Lorem, ipsum dolor sit ame elit.",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product10.webp",
//     secondaryImg: "/assets/product/main-product/product15.webp",
//     rating: 2,
//     reviews: 126,
//   },
//   {
//     id: 3,
//     title: "Cotur, cing elit. Doloque, beatae. ",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product1.webp",
//     secondaryImg: "/assets/product/main-product/product6.webp",
//     rating: 4,
//     reviews: 126,
//   },
//   {
//     id: 4,
//     title: "Z 7-8mm Freshwater Button",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product2.webp",
//     secondaryImg: "/assets/product/main-product/product7.webp",
//     rating: 5,
//     reviews: 126,
//   },
//   {
//     id: 5,
//     title: "Z 7-8mm Freshwater Button",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product3.webp",
//     secondaryImg: "/assets/product/main-product/product8.webp",
//     rating: 5,
//     reviews: 126,
//   },
//   {
//     id: 6,
//     title: "Z 7-8mm Freshwater Button",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product4.webp",
//     secondaryImg: "/assets/product/main-product/product9.webp",
//     rating: 5,
//     reviews: 126,
//   },
//   {
//     id: 7,
//     title: "Z 7-8mm Freshwater Button",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product5.webp",
//     secondaryImg: "/assets/product/main-product/product10.webp",
//     rating: 5,
//     reviews: 126,
//   },
//   {
//     id: 8,
//     title: "Z 7-8mm Freshwater Button",
//     price: "$239.52",
//     oldPrice: "$362.00",
//     badge: "-14%",
//     primaryImg: "/assets/product/main-product/product6.webp",
//     secondaryImg: "/assets/product/main-product/product11.webp",
//     rating: 5,
//     reviews: 126,
//   },
//   // Add more products here...
// ];

const TrendingProducts: React.FC = () => {
  const { products: trendingData, error, fetchShowingProducts } = useProduct();
  useEffect(() => {
    fetchShowingProducts();
  }, []);
  console.log(trendingData, error);
  return (
    <section className="product__section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">TRENDING PRODUCT</h2>
        </div>
        <div className="product__section--inner">
          <div className="row mb--n30">
            {trendingData.map((product) => (
              // <ProductCard
              //   key={product._id}
              //   id={product._id as any}
              //   price={product.prices.price as any as string}
              //   oldPrice={product.prices.originalPrice as any as string}
              //   badge={product.prices.discount as any as string}
              //   rating={4}
              //   title={product.title}
              //   primaryImg={product.image[0]}
              //   secondaryImg={product.image[1] ?? product.image[0]}
              //   reviews={0}
              //   viewMode={"grid"}
              // />
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="product__load--more text-center mt-40">
            <button className="load__more--btn primary__btn">Load More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;

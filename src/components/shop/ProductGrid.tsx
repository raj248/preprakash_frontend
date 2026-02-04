import React from "react";
import ProductCard from "./ProductCard";
// import ProductCard from "../shared/ProductCard";
const products = [
  {
    id: 1,
    title: "Z 7-8mm Freshwater Button",
    price: "$239.52",
    oldPrice: "$362.00",
    badge: "-14%",
    primaryImg: "/assets/product/main-product/product1.webp",
    secondaryImg: "/assets/product/main-product/product2.webp",
    rating: 4,
    reviews: 126,
  },
  {
    id: 2,
    title: "Freshwater Pearl Bracelet",
    price: "$150.00",
    oldPrice: "$200.00",
    badge: "Sale",
    primaryImg: "/assets/product/main-product/product3.webp",
    secondaryImg: "/assets/product/main-product/product4.webp",
    rating: 5,
    reviews: 85,
  },
  {
    id: 3,
    title: "Diamond Stud Earrings",
    price: "$599.00",
    primaryImg: "/assets/product/main-product/product5.webp",
    secondaryImg: "/assets/product/main-product/product6.webp",
    rating: 4,
    reviews: 42,
  },
  {
    id: 4,
    title: "Gold Plated Necklace",
    price: "$120.00",
    oldPrice: "$180.00",
    badge: "New",
    primaryImg: "/assets/product/main-product/product7.webp",
    secondaryImg: "/assets/product/main-product/product8.webp",
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Silver Crystal Ring",
    price: "$85.00",
    oldPrice: "$110.00",
    badge: "-20%",
    primaryImg: "/assets/product/main-product/product9.webp",
    secondaryImg: "/assets/product/main-product/product10.webp",
    rating: 5,
    reviews: 64,
  },
  {
    id: 6,
    title: "Bohemian Style Anklet",
    price: "$45.00",
    primaryImg: "/assets/product/main-product/product11.webp",
    secondaryImg: "/assets/product/main-product/product12.webp",
    rating: 4,
    reviews: 28,
  },
  {
    id: 7,
    title: "Vintage Rose Pendant",
    price: "$210.00",
    oldPrice: "$250.00",
    badge: "Hot",
    primaryImg: "/assets/product/main-product/product13.webp",
    secondaryImg: "/assets/product/main-product/product14.webp",
    rating: 5,
    reviews: 19,
  },
  {
    id: 8,
    title: "Sapphire Blue Earrings",
    price: "$340.00",
    primaryImg: "/assets/product/main-product/product15.webp",
    secondaryImg: "/assets/product/main-product/product16.webp",
    rating: 4,
    reviews: 56,
  },

  // ... more products
];

interface Props {
  viewMode: "grid" | "list";
}

const ProductGrid: React.FC<Props> = ({ viewMode }) => {
  return (
    <div className="product__section--inner">
      <div className={`row mb--n30 ${viewMode === "list" ? "row-cols-1" : ""}`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={
              viewMode === "grid"
                ? "col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30"
                : "col mb-30"
            }
          >
            <ProductCard {...product} viewMode={viewMode} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

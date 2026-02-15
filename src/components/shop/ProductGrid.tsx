import React from "react";
import ProductCard from "./ProductCard";
// import ProductCard from "../shared/ProductCard";

interface Props {
  viewMode: "grid" | "list";
  products: any[];
}

const ProductGrid: React.FC<Props> = ({ viewMode, products }) => {
  return (
    <div className="product__section--inner">
      <div className={`row mb--n30 ${viewMode === "list" ? "row-cols-1" : ""}`}>
        {products.map((product) => (
          <div
            key={product._id}
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

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Breadcrumb from "@/components/common/Breadcrumb";
import TrendingProducts from "@/components/home/TrendingProducts";
import FeatureSection from "@/components/shop/FeatureSection";
import { useProduct } from "@/hooks/useProducts";

const ProductDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const slug = searchParams.get("slug");

  const { getProductBySlug } = useProduct();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState("");

  const loadProduct = useCallback(async () => {
    if (!slug) {
      navigate("/shop");
      return;
    }

    setLoading(true);
    try {
      const data = await getProductBySlug(slug);
      if (!data) {
        navigate("/shop"); // Redirect if product not found in DB
      } else {
        setProduct(data);
        // Set the initial big image from the product data
        setActiveImg(
          data.image?.[0] || "/assets/product/big-product/product1.webp",
        );
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      navigate("/shop");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  if (loading) {
    return (
      <div className="container section--padding text-center">
        Loading Product Details...
      </div>
    );
  }

  if (!product) return null;

  return (
    <>
      <Breadcrumb title={product.title?.en || "Product Details"} />

      <section className="product__details--section section--padding">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN: Media Gallery */}
            <div className="col-lg-6 col-md-6">
              <div className="product__details--media">
                <div className="single__product--preview bg__gray mb-18 text-center">
                  <img
                    className="product__media--preview__items--img"
                    src={activeImg}
                    alt={product.title?.en}
                    style={{ maxHeight: "500px", objectFit: "contain" }}
                  />
                </div>

                {/* Thumbnail Navigation */}
                <div className="single__product--nav d-flex gap-2">
                  {product.image?.map((imgUrl: string, index: number) => (
                    <div
                      key={index}
                      className={`product__media--nav__items border-radius-5 ${activeImg === imgUrl ? "active-border" : ""}`}
                      onClick={() => setActiveImg(imgUrl)}
                      style={{
                        cursor: "pointer",
                        width: "20%",
                        border:
                          activeImg === imgUrl
                            ? "2px solid #000"
                            : "1px solid #ddd",
                      }}
                    >
                      <img
                        className="product__media--nav__items--img"
                        src={imgUrl}
                        alt={`thumbnail-${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Product Info */}
            <div className="col-lg-6 col-md-6">
              <div className="product__details--info">
                <form onSubmit={(e) => e.preventDefault()}>
                  <h2 className="product__details--info__title mb-15">
                    {product.title?.en}
                  </h2>
                  <div className="product__details--info__price mb-12">
                    <span className="current__price">
                      ${product.prices?.price}
                    </span>
                    {product.prices?.originalPrice > product.prices?.price && (
                      <span
                        className="old__price"
                        style={{
                          textDecoration: "line-through",
                          marginLeft: "10px",
                          color: "#999",
                        }}
                      >
                        ${product.prices?.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="product__details--info__desc mb-15">
                    {product.description?.en ||
                      "No description available for this product."}
                  </p>

                  {/* Quantity and Actions */}
                  <div className="product__variant--quantity d-flex align-items-center mb-20">
                    <div className="quickview__value--quantity d-flex align-items-center border-radius-5">
                      <button
                        type="button"
                        className="quantity__value decrease"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity__number"
                        value={quantity}
                        readOnly
                      />
                      <button
                        type="button"
                        className="quantity__value increase"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="primary__btn ml-15" type="submit">
                      Add To Cart
                    </button>
                  </div>

                  {/* Category Info */}
                  <div className="product__details--meta mb-20">
                    <p>
                      <strong>Category:</strong>{" "}
                      {product.category?.name?.en || "General"}
                    </p>
                    <p>
                      <strong>SKU:</strong> {product.sku || "N/A"}
                    </p>
                  </div>

                  <div className="guarantee__safe--checkout mb-30">
                    <h5 className="guarantee__safe--checkout__title">
                      Guaranteed Safe Checkout
                    </h5>
                    <img
                      className="guarantee__safe--checkout__img"
                      src="/assets/other/safe-checkout.webp"
                      alt="Payment"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrendingProducts />
      <FeatureSection />
    </>
  );
};

// ... keep StarIcon and SocialLink components below
// Sub-components for cleaner code
// const StarIcon = ({ filled }: { filled: boolean }) => (
//   <li className="rating__list">
//     <span className="rating__icon">
//       <svg
//         width="14"
//         height="13"
//         viewBox="0 0 14 13"
//         fill={filled ? "currentColor" : "none"}
//         stroke="currentColor"
//       >
//         <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" />
//       </svg>
//     </span>
//   </li>
// );

// const SocialLink = ({
//   href,
//   label,
//   iconPath,
// }: {
//   href: string;
//   label: string;
//   iconPath: string;
// }) => (
//   <li className="quickview__social--list">
//     <a
//       className="quickview__social--icon"
//       target="_blank"
//       rel="noopener noreferrer"
//       href={href}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         viewBox="0 0 7.667 16.524"
//       >
//         <path d={iconPath} fill="currentColor" />
//       </svg>
//       <span className="visually-hidden">{label}</span>
//     </a>
//   </li>
// );

export default ProductDetails;

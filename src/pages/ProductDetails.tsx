import Breadcrumb from "@/components/common/Breadcrumb";
import TrendingProducts from "@/components/home/TrendingProducts";
import FeatureSection from "@/components/shop/FeatureSection";
import React, { useState } from "react";

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(
    "/assets/product/big-product/product1.webp",
  );

  // Mock data for images
  const productImages = [
    {
      big: "/assets/product/big-product/product1.webp",
      small: "/assets/product/small-product/product1.webp",
    },
    {
      big: "/assets/product/big-product/product2.webp",
      small: "/assets/product/small-product/product2.webp",
    },
    {
      big: "/assets/product/big-product/product3.webp",
      small: "/assets/product/small-product/product3.webp",
    },
    {
      big: "/assets/product/big-product/product4.webp",
      small: "/assets/product/small-product/product4.webp",
    },
    {
      big: "/assets/product/big-product/product5.webp",
      small: "/assets/product/small-product/product5.webp",
    },
  ];

  return (
    <>
      <Breadcrumb title="Product Details" />

      <section className="product__details--section section--padding">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN: Media Gallery */}
            <div className="col-lg-6 col-md-6">
              <div className="product__details--media">
                <div className="single__product--preview bg__gray mb-18">
                  <div className="product__media--preview__items text-center">
                    <img
                      className="product__media--preview__items--img"
                      src={activeImg}
                      alt="product-media-img"
                    />
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="single__product--nav d-flex gap-2">
                  {productImages.map((img, index) => (
                    <div
                      key={index}
                      className={`product__media--nav__items border-radius-5 ${activeImg === img.big ? "active-border" : ""}`}
                      onClick={() => setActiveImg(img.big)}
                      style={{ cursor: "pointer", width: "20%" }}
                    >
                      <img
                        className="product__media--nav__items--img"
                        src={img.small}
                        alt={`nav-${index}`}
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
                    Beauty is Whatever Brings Perfect
                  </h2>
                  <div className="product__details--info__price mb-12">
                    <span className="current__price">$58.00</span>
                    <span className="old__price">$68.00</span>
                  </div>

                  {/* Star Rating */}
                  <ul className="rating product__card--rating mb-15 d-flex">
                    {[...Array(3)].map((_, i) => (
                      <StarIcon key={i} filled={true} />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <StarIcon key={i} filled={false} />
                    ))}
                    <li>
                      <span className="rating__review--text">(126) Review</span>
                    </li>
                  </ul>

                  <p className="product__details--info__desc mb-15">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    numquam ullam is recusandae laborum explicabo id sequi
                    quisquam, ab sunt deleniti quidem ea animi facilis quod
                    nostrum odit!
                  </p>

                  {/* Quantity and Actions (Added functionality) */}
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

                  {/* Social Share */}
                  <div className="quickview__social d-flex align-items-center mb-20">
                    <label className="quickview__social--title">
                      Social Share:
                    </label>
                    <ul className="quickview__social--wrapper mt-0 d-flex">
                      <SocialLink
                        href="https://facebook.com"
                        label="Facebook"
                        iconPath="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z"
                      />
                      {/* Add more SocialLinks as needed */}
                    </ul>
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

// Sub-components for cleaner code
const StarIcon = ({ filled }: { filled: boolean }) => (
  <li className="rating__list">
    <span className="rating__icon">
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
      >
        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" />
      </svg>
    </span>
  </li>
);

const SocialLink = ({
  href,
  label,
  iconPath,
}: {
  href: string;
  label: string;
  iconPath: string;
}) => (
  <li className="quickview__social--list">
    <a
      className="quickview__social--icon"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 7.667 16.524"
      >
        <path d={iconPath} fill="currentColor" />
      </svg>
      <span className="visually-hidden">{label}</span>
    </a>
  </li>
);

export default ProductDetails;

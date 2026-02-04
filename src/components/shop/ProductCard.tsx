import React from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  primaryImg: string;
  secondaryImg: string;
  rating: number;
  reviews: number;
  viewMode: "grid" | "list";
}

const ProductCard: React.FC<ProductProps> = ({
  title,
  price,
  oldPrice,
  badge,
  primaryImg,
  secondaryImg,
  rating,
  reviews,
  viewMode,
}) => {
  const isList = viewMode === "list";

  return (
    <article
      className={`product__card ${isList ? "product__list d-flex align-items-center" : ""}`}
    >
      <div
        className={`product__card--thumbnail ${isList ? "product__list--thumbnail" : ""}`}
      >
        <Link
          className="product__card--thumbnail__link display-block"
          to="/product-details"
        >
          <img
            className="product__card--thumbnail__img product__primary--img"
            src={primaryImg}
            alt={title}
          />
          <img
            className="product__card--thumbnail__img product__secondary--img"
            src={secondaryImg}
            alt={title}
          />
        </Link>
        {badge && <span className="product__badge">{badge}</span>}

        {/* Action Buttons (QuickView, Wishlist, etc) */}
        <ul className="product__card--action">
          {/* 1. Quick View Action */}
          <li className="product__card--action__list">
            <button
              className="product__card--action__btn"
              title="Quick View"
              type="button"
              // If you are using Bootstrap JS for the modal:
              data-bs-toggle="modal"
              data-bs-target="#examplemodal"
            >
              <svg
                className="product__card--action__btn--svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                  fill="currentColor"
                />
              </svg>
              <span className="visually-hidden">Quick View</span>
            </button>
          </li>

          {/* 2. Compare Action */}
          <li className="product__card--action__list">
            <Link
              className="product__card--action__btn"
              title="Compare"
              to="/compare"
            >
              <svg
                className="product__card--action__btn--svg"
                width="17"
                height="17"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z"
                  fill="currentColor"
                />
              </svg>
              <span className="visually-hidden">Compare</span>
            </Link>
          </li>

          {/* 3. Wishlist Action */}
          <li className="product__card--action__list">
            <Link
              className="product__card--action__btn"
              title="Wishlist"
              to="/wishlist"
            >
              <svg
                className="product__card--action__btn--svg"
                width="18"
                height="18"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                  fill="currentColor"
                />
              </svg>
              <span className="visually-hidden">Wishlist</span>
            </Link>
          </li>
        </ul>

        {!isList && (
          <div className="product__add--to__card">
            <Link className="product__card--btn" to="/cart">
              Add to Cart
            </Link>
          </div>
        )}
      </div>

      <div
        className={`product__card--content ${isList ? "product__list--content" : "text-center"}`}
      >
        <Rating
          rating={rating}
          reviews={reviews}
          align={isList ? "start" : "center"}
        />
        <h3 className="product__card--title">
          <Link to="/product-details">{title}</Link>
        </h3>
        <div
          className={`product__card--price ${isList ? "product__list--price" : ""}`}
        >
          <span className="current__price">{price}</span>
          {oldPrice && <span className="old__price">{oldPrice}</span>}
        </div>

        {isList && (
          <p className="product__card--content__desc mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus placeat unde...
          </p>
        )}

        {isList && (
          <Link className="product__card--btn" to="/cart">
            Add to Cart
          </Link>
        )}
      </div>
    </article>
  );
};

// Internal Sub-Components for cleaner code
const Rating = ({ rating, reviews, align }: any) => (
  <ul
    className={`rating product__card--rating d-flex justify-content-${align}`}
  >
    {[...Array(5)].map((_, i) => (
      <li key={i} className="rating__list">
        <span className="rating__icon">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
          >
            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" />
          </svg>
        </span>
      </li>
    ))}
    <li>
      <span className="rating__review--text">({reviews}) Review</span>
    </li>
  </ul>
);

export default ProductCard;

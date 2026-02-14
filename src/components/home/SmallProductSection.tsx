import { useSettings } from "@/context/SettingContext";
import { Link } from "react-router-dom";

// Reuse the Star logic for consistency
const RenderStars = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= rating;
    stars.push(
      <li className="rating__list" key={i}>
        <span className="rating__icon">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                isFilled
                  ? "M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                  : "M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
              }
              fill="currentColor"
            />
          </svg>
        </span>
      </li>,
    );
  }
  return <>{stars}</>;
};

const SmallProductCard = ({ product }: any) => {
  const { globalSettings } = useSettings();
  return (
    <article className="small__product--card d-flex align-items-center mb-20">
      <div className="small__product--thumbnail">
        <Link className="display-block" to={`/product/${product.slug}`}>
          {/* A LIST OF IMAGES OR A SINGLE IMAGE */}
          {Array.isArray(product.image) && product.image.length > 0 ? (
            <img
              className="small__product--thumbnail__img"
              src={product.image[0]}
              alt={product.title}
            />
          ) : (
            <img
              className="small__product--thumbnail__img"
              src={product.image}
              alt={product.title}
            />
          )}
        </Link>
      </div>
      <div className="small__product--content">
        <h3 className="product__card--title">
          <Link to={`/product/${product.slug}`}>{product.title}</Link>
        </h3>
        <ul className="rating product__card--rating d-flex">
          <RenderStars rating={product.rating || 0} />
          <li>
            <span className="rating__review--text">
              ({product.reviews}) Review
            </span>
          </li>
        </ul>
        <div className="product__card--price">
          <span className="current__price">
            {globalSettings?.default_currency}
            {product.prices.price}
          </span>
          {product.prices.discount && (
            <span className="old__price">
              {" "}
              {globalSettings?.default_currency}
              {product.prices.originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const SmallProductSection = ({
  featuredProducts,
  onsaleProducts,
  trendingProducts,
}: any) => {
  return (
    <section className="small__product--section section--padding pt-0">
      <div className="container">
        <div className="row mb--n30">
          {/* Featured Column */}
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="small__product--step">
              <div className="section__heading mb-30">
                <h2 className="section__heading--maintitle">
                  Featured Products
                </h2>
              </div>
              <div className="small__product--step__inner">
                {featuredProducts.slice(0, 4).map((p: any) => (
                  <SmallProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          </div>

          {/* Onsale Column */}
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="small__product--step">
              <div className="section__heading mb-30">
                <h2 className="section__heading--maintitle">Onsale Products</h2>
              </div>
              <div className="small__product--step__inner">
                {onsaleProducts.slice(0, 4).map((p: any) => (
                  <SmallProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          </div>

          {/* Trending Column (Optional 3rd col) */}
          <div className="col-lg-4 col-md-6 mb-30">
            <div className="small__product--step">
              <div className="section__heading mb-30">
                <h2 className="section__heading--maintitle">
                  Trending Products
                </h2>
              </div>
              <div className="small__product--step__inner">
                {trendingProducts.slice(0, 4).map((p: any) => (
                  <SmallProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallProductSection;

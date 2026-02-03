import React from "react";
import { Link } from "react-router-dom";

interface BannerProps {
  subtitle: string;
  title: React.ReactNode; // Using Node so we can pass <br />
  image: string;
  link: string;
  contentPosition: "left" | "right";
}

const BannerCard: React.FC<BannerProps> = ({
  subtitle,
  title,
  image,
  link,
  contentPosition,
}) => (
  <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
    <div className="banner__box border-radius-5 position-relative">
      <Link className="display-block" to={link}>
        <img
          className="banner__box--thumbnail border-radius-5"
          src={image}
          alt="banner-img"
        />
        <div className={`fullwidth__banner--box__content ${contentPosition}`}>
          <p className="fullwidth__banner--box__subtitle">{subtitle}</p>
          <h2 className="fullwidth__banner--box__title">{title}</h2>
          <span className="banner__box--content__btn primary__btn">
            SHOP NOW
          </span>
        </div>
      </Link>
    </div>
  </div>
);

const BannerSection: React.FC = () => {
  return (
    <section className="banner__section section--padding pt-0">
      <div className="container-fluid p-0">
        <div className="row no-gutter mb--n30">
          <BannerCard
            subtitle="Store Beautlux"
            title={
              <>
                Jewellery <br /> Online
              </>
            }
            image="/assets/banner/banner15.webp"
            link="/shop"
            contentPosition="left"
          />
          <BannerCard
            subtitle="Store Beautlux"
            title={
              <>
                Rings <br /> Collections
              </>
            }
            image="/assets/banner/banner16.webp"
            link="/shop"
            contentPosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

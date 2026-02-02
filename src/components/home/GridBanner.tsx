import React from "react";
import { Link } from "react-router-dom";

interface GridBannerProps {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  reverse?: boolean; // Prop to flip image and text positions
}

const GridBanner: React.FC<GridBannerProps> = ({
  title = "Curated By Color",
  description = "Brighten up your look with vibrant gemstone jewelry.",
  image = "/assets/banner/banner13.webp",
  link = "/shop",
  reverse = false,
}) => {
  return (
    <section className="grid__banner--section section--padding pt-0">
      <div className="container">
        <div
          className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}
        >
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="grid__banner--thumbnail">
              <img src={image} alt="banner-img" className="w-100" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div
              className={`grid__banner--content ${!reverse ? "margin__left" : "margin__right"}`}
            >
              <h2 className="grid__banner--title">{title}</h2>
              <p className="grid__banner--desc">{description}</p>
              <Link className="grid__banner--btn primary__btn" to={link}>
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridBanner;

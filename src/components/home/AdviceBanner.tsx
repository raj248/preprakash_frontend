import React from "react";
import { Link } from "react-router-dom";

interface AdviceBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText?: string;
}

const AdviceBanner: React.FC<AdviceBannerProps> = ({
  title,
  description,
  image,
  link,
  buttonText = "SHOP NOW",
}) => {
  return (
    <section className="advice__banner--section section--padding pt-0">
      {/* Container-fluid with p-0 removes the side padding/gaps */}
      <div className="container-fluid p-0">
        <div className="advice__banner--box position-relative">
          <img
            className="advice__banner--thumbnail height_260 border-radius-5"
            src={image}
            alt="Promotion Banner"
          />
          <div className="advice__banner--content style2">
            <h2 className="advice__banner--title">{title}</h2>
            <p className="advice__banner--desc mb-30">{description}</p>
            <Link className="advice__banner--btn primary__btn" to={link}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdviceBanner;

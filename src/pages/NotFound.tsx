import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="main__content_wrapper">
      {/* Start breadcrumb section */}
      <div className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="breadcrumb__content text-center">
                <ul className="breadcrumb__content--menu d-flex justify-content-center">
                  <li className="breadcrumb__content--menu__items">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb__content--menu__items">
                    <span>Error 404</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End breadcrumb section */}

      {/* Start error section */}
      <section className="error__section section--padding">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="error__content text-center">
                <img
                  className="error__content--img display-block mb-50"
                  src="/assets/other/404-thumb.webp"
                  alt="error-img"
                  style={{ margin: "0 auto" }} // Ensures centering if display-block is used
                />
                <h2 className="error__content--title">Oops! Page Not Found</h2>
                <p className="error__content--desc">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
                <Link className="error__content--btn primary__btn" to="/">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End error section */}
    </main>
  );
};

export default NotFound;

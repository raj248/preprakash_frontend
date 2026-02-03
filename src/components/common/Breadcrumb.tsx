import React from "react";
import { Link } from "react-router-dom";

// Define the interface for props
interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
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
                  <span className="breadcrumb__content--menu__text">
                    {title}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useCategory } from "@/hooks/useCategory";

const CategoryCollection: React.FC = () => {
  const { categories } = useCategory();

  const flattenCategories = (nodeList: Category[]): Category[] => {
    let flat: Category[] = [];

    nodeList.forEach((node) => {
      if (node.parentId) {
        flat.push(node); // Add current category
      }
      if (node.children && node.children.length > 0) {
        flat = flat.concat(flattenCategories(node.children)); // Add children
      }
    });
    return flat;
  };

  // Memoize the result so it doesn't re-calculate unless categories change
  const allCategories = useMemo(
    () => flattenCategories(categories),
    [categories],
  );

  return (
    <section className="shop__collection--section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Shop By Category</h2>
        </div>

        <div className="shop__collection--column5 position-relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            loop={true}
          >
            {allCategories.map((cat) => (
              <SwiperSlide key={cat._id}>
                <div className="shop__collection--card text-center">
                  <Link
                    className="shop__collection--link"
                    to={`/shop/${cat._id || ""}`}
                  >
                    {cat.icon ? (
                      <img
                        className="shop__collection--img"
                        src={cat.icon}
                        alt={cat.name.en}
                      />
                    ) : (
                      <div className="placeholder-icon"></div> // Fallback for parent cats without icons
                    )}
                    <h3 className="shop__collection--title mb-0">
                      {cat.name.en}
                    </h3>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper__nav--btn swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
            <div className="swiper__nav--btn swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategoryCollection;

import { useMemo } from "react";
import type { Category } from "@/types/Category";

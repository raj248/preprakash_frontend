import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, title: "Necklaces", img: "/assets/collection/collection7.webp" },
  { id: 2, title: "Bracelets", img: "/assets/collection/collection8.webp" },
  { id: 3, title: "Earrings", img: "/assets/collection/collection9.webp" },
  {
    id: 4,
    title: "Wedding-bridal",
    img: "/assets/collection/collection10.webp",
  },
  {
    id: 5,
    title: "Shop Earrings",
    img: "/assets/collection/collection11.webp",
  },
  { id: 6, title: "Pendants", img: "/assets/collection/collection7.webp" },
];

const CategoryCollection: React.FC = () => {
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
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className="shop__collection--card text-center">
                  <Link className="shop__collection--link" to="/shop">
                    <img
                      className="shop__collection--img"
                      src={cat.img}
                      alt={cat.title}
                    />
                    <h3 className="shop__collection--title mb-0">
                      {cat.title}
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

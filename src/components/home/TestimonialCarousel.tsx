import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial1.webp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    rating: 3,
  },
  {
    id: 2,
    name: "Lee Barners",
    role: "Beautician",
    image: "/assets/other/testimonial2.webp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Linda",
    role: "Beautician",
    image: "/assets/other/testimonial1.webp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    rating: 3,
  },
  {
    id: 4,
    name: "Lee Barners",
    role: "Beautician",
    image: "/assets/other/testimonial2.webp",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    rating: 4,
  },
  // Add more items here as needed
];

const TestimonialCarousel: React.FC = () => {
  return (
    <section className="testimonial__section testimonial__bg section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">
            What Clients Are Saying
          </h2>
        </div>
        <div className="testimonial__section--inner testimonial__swiper--activation">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            pagination={{ clickable: true, el: ".testimonial__pagination" }}
            autoplay={{ delay: 4000 }}
            loop={true}
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial__items">
                  <div className="testimonial__author d-flex align-items-center">
                    <div className="testimonial__author__thumbnail">
                      <img src={item.image} alt={`${item.name}-thumb`} />
                    </div>
                    <div className="testimonial__author--text">
                      <h3 className="testimonial__author--title">
                        {item.name}
                      </h3>
                      <span className="testimonial__author--subtitle">
                        {item.role}
                      </span>
                      <ul className="rating testimonial__rating d-flex">
                        {[...Array(5)].map((_, index) => (
                          <li key={index} className="rating__list">
                            <span className="rating__icon">
                              <svg
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                  fill={
                                    index < item.rating
                                      ? "currentColor"
                                      : "#D3D3D3"
                                  }
                                />
                              </svg>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="testimonial__content">
                    <p className="testimonial__desc">{item.desc}</p>
                    <img
                      className="testimonial__vector--icon"
                      src="assets/img/icon/vector-icon.webp"
                      alt="quote-icon"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="testimonial__pagination swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

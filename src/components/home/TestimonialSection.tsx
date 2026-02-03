import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialSection: React.FC<{ data: Testimonial[] }> = ({ data }) => {
  return (
    <section className="testimonial__section testimonial__bg--three section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">
            What Clients Are Saying
          </h2>
        </div>

        <div className="testimonial__section--inner p-0 position-relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial__box">
                  <div className="testimonial__box--thumbnail">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="testimonial__box--content text-center">
                    <p className="testimonial__box--desc">{item.content}</p>
                    <div className="testimonial__box--author">
                      <h3 className="testimonial__box--author__title">
                        {item.name}
                      </h3>
                      <span className="testimonial__box--author__subtitle">
                        {item.role}
                      </span>
                      <ul className="rating testimonial__rating d-flex justify-content-center">
                        {[...Array(5)].map((_, i) => (
                          <li key={i} className="rating__list">
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
                                    i < item.rating ? "currentColor" : "#D3D3D3"
                                  }
                                />
                              </svg>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
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
            <div className="swiper__nav--btn swiper-button-prev">
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

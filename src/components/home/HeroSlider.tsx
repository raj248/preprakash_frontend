import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper";
import { useSettings } from "@/context/SettingContext";
const bgImg = "/assets/slider/home3-slider1-bg.webp"; // The background from your SCSS    img: "/assets/slider/home3-slider1-layer.webp",

const HeroSlider: React.FC = () => {
  const { customization } = useSettings();
  const slides = [
    {
      id: 1,
      title: customization?.slider.first_title?.en,
      description: customization?.slider.first_description?.en,
      layerImg: customization?.slider.first_img,
      bgImg: bgImg,
      link: customization?.slider.first_link,
      btnName: customization?.slider.first_button?.en,
    },
    {
      id: 2,
      title: customization?.slider.second_title?.en,
      description: customization?.slider.second_description?.en,
      layerImg: customization?.slider.second_img,
      bgImg: bgImg,
      link: customization?.slider.second_link,
      btnName: customization?.slider.second_button?.en,
    },
    {
      id: 3,
      title: customization?.slider.third_title?.en,
      description: customization?.slider.third_description?.en,
      layerImg: customization?.slider.third_img,
      bgImg: bgImg,
      link: customization?.slider.third_link,
      btnName: customization?.slider.third_button?.en,
    },
    {
      id: 4,
      title: customization?.slider.four_title?.en,
      description: customization?.slider.four_description?.en,
      layerImg: customization?.slider.four_img,
      bgImg: bgImg,
      link: customization?.slider.four_link,
      btnName: customization?.slider.four_button?.en,
    },
    {
      id: 5,
      title: customization?.slider.five_title?.en,
      description: customization?.slider.five_description?.en,
      layerImg: customization?.slider.five_img,
      bgImg: bgImg,
      link: customization?.slider.five_link,
      btnName: customization?.slider.five_button?.en,
    },
  ];
  return (
    <section className="hero__slider--section">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="hero__slider--activation"
      >
        {slides
          .filter((slide) => slide.layerImg)
          .map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="hero__slider--items"
                style={{ backgroundImage: `url(${slide.bgImg})` }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 offset-lg-2">
                      <div className="slider__content text-center">
                        <h2 className="slider__maintitle text__secondary_dark h1">
                          {slide.title}
                        </h2>
                        <Link
                          className="primary__btn slider__btn"
                          to={slide.link ?? "/shop"}
                        >
                          {slide.btnName}
                          <ArrowIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero__slider--layer style3">
                  <img
                    className="slider__layer--img"
                    src={slide.layerImg}
                    alt="slider-img"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

// Reusable Arrow SVG to keep the code clean
const ArrowIcon = () => (
  <svg
    width={17}
    height={12}
    viewBox="0 0 17 12"
    fill="none"
    stroke="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9732 5.19375L11.1893 0.460018C11.1225 0.392216 11.0412 0.338185 10.9507 0.301395C10.8601 0.264605 10.7623 0.245867 10.6636 0.246372C10.5648 0.246877 10.4672 0.266615 10.377 0.304329C10.2869 0.342044 10.2061 0.396903 10.14 0.465385C10.001 0.610077 9.9245 0.79778 9.92549 0.992021C9.92649 1.18626 10.0049 1.37316 10.1454 1.51643L13.6531 4.9864L0.935903 5.05145C0.734471 5.06613 0.546408 5.15137 0.409525 5.29006C0.272641 5.42874 0.197086 5.61057 0.19805 5.799C0.199014 5.98743 0.276425 6.16848 0.41472 6.30575C0.553015 6.44303 0.74194 6.52635 0.943512 6.53896L13.6586 6.47392L10.1866 9.98155C10.0475 10.1262 9.97108 10.3139 9.97207 10.5082C9.97306 10.7024 10.0514 10.8893 10.192 11.0326C10.2588 11.1004 10.3401 11.1544 10.4306 11.1912C10.5212 11.228 10.6189 11.2467 10.7177 11.2462C10.8165 11.2457 10.9141 11.226 11.0042 11.1883C11.0944 11.1506 11.1751 11.0957 11.2413 11.0272L15.9786 6.25458C16.1206 6.1093 16.1989 5.91956 16.1979 5.72303C16.1969 5.5265 16.1167 5.33757 15.9732 5.19375Z"
      fill="currentColor"
    />
  </svg>
);

export default HeroSlider;

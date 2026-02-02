import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/bundle";
import "swiper";

interface QuickviewProps {
  isOpen: boolean;
  onClose: () => void;
  product?: any; // You can define a proper interface for your product later
}

const Quickview: React.FC<QuickviewProps> = ({ isOpen, onClose, product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div
      className={`modal fade show`}
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
      tabIndex={1}
      aria-hidden="false"
    >
      <div className="modal-dialog quickview__main--wrapper modal-dialog-centered">
        <div className="modal-content quickview__main__content">
          <div className="modal-header quickview_m_header">
            <button
              type="button"
              className="btn-close quickview__close--btn"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="modal-body quickview__inner">
            <div className="row row-cols-lg-2 row-cols-md-2">
              {/* Left Column: Gallery */}
              <div className="col">
                <div className="quickview__gallery">
                  <Swiper
                    modules={[Navigation, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation={true}
                    className="product__media--preview"
                  >
                    {[1, 2, 3].map((num) => (
                      <SwiperSlide key={num}>
                        <div className="product__media--preview__items">
                          <img
                            className="product__media--preview__items--img"
                            src={`/assets/product/big-product/product${num}.webp`}
                            alt="product"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={10}
                    className="product__media--nav mt-10"
                  >
                    {[1, 2, 3].map((num) => (
                      <SwiperSlide key={num}>
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src={`/assets/product/small-product/product${num}.webp`}
                            alt="nav"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="col">
                <div className="quickview__info">
                  <h2 className="product__details--info__title mb-15">
                    Z 7-8mm Freshwater Button
                  </h2>
                  <div className="product__card--price mb-15">
                    <span className="current__price">$239.52</span>
                    <span className="old__price"> $362.00</span>
                  </div>

                  <p className="product__details--info__desc mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt totam dolores ea numquam labore!.
                  </p>

                  <div className="quickview__variant--list quantity d-flex align-items-center mb-15">
                    <div className="quantity__box">
                      <button
                        type="button"
                        className="quantity__value"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity__number"
                        value={quantity}
                        readOnly
                      />
                      <button
                        type="button"
                        className="quantity__value"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="primary__btn quickview__cart--btn"
                      type="submit"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickview;

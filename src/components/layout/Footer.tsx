import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer__section footer__bg">
        <div className="container">
          <div className="main__footer section--padding">
            <div className="row">
              <div className="col-lg-4 col-md-8">
                <div className="footer__widget">
                  <h2 className="footer__widget--title d-none d-sm-u-block">
                    About Us
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12.355}
                      height={8.394}
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="footer__widget--inner">
                    <div className="footer__logo">
                      <a className="footer__logo--link" href="index.html">
                        <img
                          className="footer__logo--img"
                          src="/assets/logo/nav-logo.jpg"
                          alt="logo-img"
                        />
                      </a>
                    </div>
                    {/*
              <p class="footer__widget--desc">
                Corporate clients and leisure travelers has been relying on
                Groundlink for dependable safe, and professional
              </p>
              */}
                    <ul className="footer__widget--info">
                      <li className="footer__widget--info_list">
                        <svg
                          className="footer__widget--info__icon"
                          width={20}
                          height={23}
                          viewBox="0 0 20 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3334 10.1666C18.3334 14.769 10.0001 20.9999 10.0001 20.9999C10.0001 20.9999 1.66675 14.769 1.66675 10.1666C1.66675 5.56421 5.39771 1.83325 10.0001 1.83325C14.6025 1.83325 18.3334 5.56421 18.3334 10.1666Z"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                          <ellipse
                            cx="10.0001"
                            cy="10.1667"
                            rx="2.5"
                            ry="2.5"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                        </svg>
                        <span className="footer__widget--info__text">
                          Shop no.06, Gaylord chowk, Jawaharlal Nehru Rd,
                          Shastri Nagar, Pimpri Colony, Pimpri-Chinchwad,
                          Maharashtra 411017
                        </span>
                      </li>
                      <li className="footer__widget--info_list">
                        <svg
                          className="footer__widget--info__icon"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.31 1.52371L18.6133 2.11296C18.6133 2.11296 19.2026 7.41627 13.31 13.3088C7.41748 19.2014 2.11303 18.6133 2.11303 18.6133L1.52377 13.31L5.64971 10.9529L7.71153 13.0148C7.71153 13.0148 9.18467 12.7201 10.9524 10.9524C12.7202 9.18461 13.0148 7.71147 13.0148 7.71147L10.953 5.64965L13.31 1.52371Z"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                        </svg>
                        <a
                          className="footer__widget--info__text"
                          href="tel:+1234567898"
                        >
                          (+123) 456-7898
                        </a>
                      </li>
                      <li className="footer__widget--info_list">
                        <svg
                          className="footer__widget--info__icon"
                          width={24}
                          height={20}
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00006 3.33325H22.0001V17.4999H2.00006V3.33325Z"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                          <path
                            d="M3.2655 3.33325H20.7871L12 12.4999L3.2655 3.33325Z"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                        </svg>
                        <a
                          className="footer__widget--info__text"
                          href="mailto:example@example.com"
                        >
                          example@example.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="footer__widget">
                  <h2 className="footer__widget--title">
                    Our Offer
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12.355}
                      height={8.394}
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner">
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="my-account.html"
                      >
                        Jewellery
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="cart.html"
                      >
                        Fashion Accessories
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="login.html"
                      >
                        Bags &amp; Purses
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="login.html"
                      >
                        Kids Accessories
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="checkout.html"
                      >
                        Storage &amp; Boxes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-5">
                <div className="footer__widget">
                  <h2 className="footer__widget--title">
                    Quick Links
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12.355}
                      height={8.394}
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner">
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="privacy-policy.html"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="privacy-policy.html"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="privacy-policy.html"
                      >
                        Return &amp; Refund Policy
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="privacy-policy.html"
                      >
                        Shipping Policy
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="privacy-policy.html"
                      >
                        Cancellation Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-5">
                <div className="footer__widget">
                  <h2 className="footer__widget--title">
                    Quick Links
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={12.355}
                      height={8.394}
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner">
                    <li className="footer__widget--menu__list">
                      <a className="footer__widget--menu__text" href="about">
                        About Us
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="blog-grid.html"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="contact.html"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a className="footer__widget--menu__text" href="faq.html">
                        FAQs
                      </a>
                    </li>
                    <li className="footer__widget--menu__list">
                      <a
                        className="footer__widget--menu__text"
                        href="my-account.html"
                      >
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom--inenr d-flex justify-content-between align-items-center">
              <p className="copyright__content mb-0">
                <span className="text__secondary">© 2026</span> Powered by
                &nbsp;
                <a className="copyright__content--link" target="_blank" href="">
                  Zenex Tech
                </a>
                . All Rights Reserved.
              </p>
              <div className="footer__payment">
                <img src="/assets/icon/payment-img.webp" alt="payment-img" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

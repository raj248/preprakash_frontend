import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header__section">
      <div
        className="header__topbar bg__primary"
        style={{ background: "#c23bc4" }}
      >
        <div className="container">
          <div className="header__topbar--inner style6 d-flex align-items-center justify-content-between">
            <ul className="header__topbar--info d-none d-lg-flex">
              <li className="header__info--text text-white">
                Good luck with shopping
              </li>
              <li className="header__info--text text-white">
                <span className="text__white">Call us</span>
                <a href="tel:+1234567898">: (+123) 456-7898</a>
              </li>
            </ul>
            <div className="header__top--right d-flex align-items-center">
              <ul className="language__currency d-flex align-items-center">
                <li className="language__currency--list">
                  <a
                    className="language__currency--link currency__link"
                    href="javascript:void(0)"
                  >
                    <img
                      className="currency__link--icon"
                      src="/assets/icon/language-icon.webp"
                      alt="currency"
                    />
                    <span>INR</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.797"
                      height="6.05"
                      viewBox="0 0 9.797 6.05"
                    >
                      <path
                        d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  </a>
                  <div className="dropdown__switcher dropdown__currency">
                    <ul>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          USD
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          CAD
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          CNY
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          EUR
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          GBP
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="language__currency--list">
                  <a
                    className="language__currency--link language__switcher"
                    href="javascript:void(0)"
                  >
                    <span>English</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.797"
                      height="6.05"
                      viewBox="0 0 9.797 6.05"
                    >
                      <path
                        d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  </a>
                  <div className="dropdown__switcher dropdown__language">
                    <ul>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          Hindi
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          France
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          Russia
                        </a>
                      </li>
                      <li className="dropdown__switcher--items">
                        <a className="dropdown__switcher--text" href="#">
                          Spanish
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul className="header__top--link d-flex align-items-center">
                <li className="header__link--menu">
                  <a className="header__link--menu__text" href="wishlist.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Wishlist
                  </a>
                </li>
                <li className="header__link--menu">
                  <a className="header__link--menu__text" href="compare.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"
                      />
                      <path
                        d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      />
                    </svg>
                    &gt;Compare
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

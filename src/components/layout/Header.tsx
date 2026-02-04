import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close everything helper
  const closeAll = () => {
    setMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    const body = document.body;

    // Toggle Classes based on state
    if (menuOpen) body.classList.add("mobile_menu_open");
    else body.classList.remove("mobile_menu_open");

    if (cartOpen) body.classList.add("offCanvas__minicart_active");
    else body.classList.remove("offCanvas__minicart_active");

    if (searchOpen) body.classList.add("predictive__search--box_active");
    else body.classList.remove("predictive__search--box_active");

    // Handle clicking the overlay (the ::before area)
    const handleOverlayClick = (e: MouseEvent) => {
      // If the user clicks exactly on the body (which is the overlay area)
      // and not inside the actual menu/cart container
      if (e.target === body) {
        closeAll();
      }
    };

    if (menuOpen || cartOpen || searchOpen) {
      window.addEventListener("click", handleOverlayClick);
    }

    return () => {
      window.removeEventListener("click", handleOverlayClick);
      body.classList.remove(
        "mobile_menu_open",
        "offCanvas__minicart_active",
        "predictive__search--box_active",
      );
    };
  }, [menuOpen, cartOpen, searchOpen]);

  return (
    <header className="header__section">
      {/* Top Header */}
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
                  <a className="header__link--menu__text" href="wishlist">
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
                    Compare
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Header */}

      {/* Bottom Header */}
      <div className="main__header position__relative header__sticky">
        <div className="container">
          <div className="main__header--inner d-flex justify-content-between align-items-center">
            <div className="offcanvas__header--menu__open">
              <a
                className="offcanvas__header--menu__open--btn"
                // href="javascript:void(0)"
                onClick={() => setMenuOpen(!menuOpen)}
                data-offcanvas=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon offcanvas__header--menu__open--svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M80 160h352M80 256h352M80 352h352"
                  />
                </svg>
                <span className="visually-hidden">Offcanvas Menu Open</span>
              </a>
            </div>
            <div className="main__logo">
              <h1 className="main__logo--title">
                <a className="main__logo--link" href="/">
                  <img
                    className="main__logo--img"
                    src="/assets/logo/nav-logo.jpg"
                    alt="logo-img"
                  />
                </a>
              </h1>
            </div>
            <div className="header__menu d-none d-lg-block">
              <nav className="header__menu--navigation">
                <ul className="header__menu--wrapper d-flex">
                  <li className="header__menu--items">
                    <a className="header__menu--link active" href="/">
                      Home
                    </a>
                  </li>
                  <li className="header__menu--items">
                    <a className="header__menu--link" href="about">
                      About Us
                    </a>
                  </li>
                  <li className="header__menu--items mega__menu--items">
                    <a className="header__menu--link" href="shop-grid">
                      Shop
                      <svg
                        className="menu__arrowdown--icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height="7.41"
                        viewBox="0 0 12 7.41"
                      >
                        <path
                          d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </a>
                    <div className="header__mega--menu__wrapper">
                      <ul className="header__mega--menu d-flex">
                        <li className="header__mega--menu__li">
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Neck Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-right-sidebar.html"
                              >
                                Ear Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Hand Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid-list.html"
                              >
                                Feet Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-list.html"
                              >
                                Nose Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Head Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Special Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href=""
                              >
                                Waist Jewellery
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Hair Clips &amp; Pins
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Hair Styling Tools
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Hair Bands
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Hair Decoration
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Wearables
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Eye Accessories
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Clothing Accessories
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Beauty &amp; Fragrance
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Seasonal Items
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Saree Essentials
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Dress Add-ons
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Women's Bags
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Clutches &amp; Pouches
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Kids Bags
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Jewellery Storage
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Watch Storage
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Jewellery
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Hair Accessories
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Fashion Accessories
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Saree &amp; Ethnic Accessories
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Bags &amp; Purses
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Storage &amp; Utility
                              </a>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <a
                                className="header__mega--sub__menu--title"
                                href="shop-grid"
                              >
                                Kids Accessories
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li banner__child">
                          <div className="header__mega--menu__banner">
                            <a href="shop-grid">
                              <img
                                className="header__mega--menu__banner--img"
                                src="/assets/banner/banner-menu.webp"
                                alt="banner"
                              />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header__menu--items">
                    <a className="header__menu--link" href="shop-grid">
                      Jewellery
                    </a>
                  </li>
                  <li className="header__menu--items">
                    <a className="header__menu--link" href="shop-grid">
                      Accesories
                    </a>
                  </li>
                  <li className="header__menu--items">
                    <a className="header__menu--link" href="shop-grid">
                      New Arrivals
                    </a>
                  </li>
                  <li className="header__menu--items">
                    <a className="header__menu--link" href="shop-grid">
                      Offers
                    </a>
                  </li>
                  <li className="header__menu--items">
                    <a className="header__menu--link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__account">
              <ul className="header__account--wrapper d-flex align-items-center">
                <li className="header__account--items header__account--search__items d-none d-lg-block">
                  <a
                    className="header__account--btn search__open--btn"
                    // href="javascript:void(0)"
                    onClick={() => setSearchOpen(true)}
                    data-offcanvas=""
                  >
                    <span className="header__account--btn__icon">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 16L11 11M12.6667 6.83333C12.6667 7.59938 12.5158 8.35792 12.2226 9.06565C11.9295 9.77339 11.4998 10.4164 10.9581 10.9581C10.4164 11.4998 9.77339 11.9295 9.06565 12.2226C8.35792 12.5158 7.59938 12.6667 6.83333 12.6667C6.06729 12.6667 5.30875 12.5158 4.60101 12.2226C3.89328 11.9295 3.25022 11.4998 2.70854 10.9581C2.16687 10.4164 1.73719 9.77339 1.44404 9.06565C1.15088 8.35792 1 7.59938 1 6.83333C1 5.28624 1.61458 3.80251 2.70854 2.70854C3.80251 1.61458 5.28624 1 6.83333 1C8.38043 1 9.86416 1.61458 10.9581 2.70854C12.0521 3.80251 12.6667 5.28624 12.6667 6.83333Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="visually-hidden">Search</span>
                  </a>
                </li>
                <li className="header__account--items">
                  <a
                    className="header__account--btn d-sm-2-none"
                    href="wishlist"
                  >
                    <span className="header__account--btn__icon">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.09836 2.28681C1.75014 2.69477 1.47391 3.1791 1.28545 3.71213C1.097 4.24516 1 4.81646 1 5.39341C1 5.97036 1.097 6.54167 1.28545 7.0747C1.47391 7.60773 1.75014 8.09206 2.09836 8.50002L8.50001 16L14.9016 8.50002C15.6049 7.6761 16 6.55862 16 5.39341C16 4.22821 15.6049 3.11073 14.9016 2.28681C14.1984 1.46289 13.2446 1.00001 12.25 1.00001C11.2554 1.00001 10.3016 1.46289 9.59833 2.28681L8.50001 3.57358L7.40168 2.28681C7.05346 1.87884 6.64006 1.55522 6.18509 1.33443C5.73011 1.11364 5.24248 1 4.75002 1C4.25756 1 3.76992 1.11364 3.31495 1.33443C2.85998 1.55522 2.44658 1.87884 2.09836 2.28681V2.28681Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="visually-hidden">&nbsp; Wishlist</span>
                  </a>
                </li>
                <li className="header__account--items">
                  <a
                    className="header__account--btn d-sm-2-none"
                    href="my-account.html"
                  >
                    <span className="header__account--btn__icon">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 16V14.3333C16 13.4493 15.6049 12.6014 14.9016 11.9763C14.1984 11.3512 13.2446 11 12.25 11H4.75C3.75544 11 2.80161 11.3512 2.09835 11.9763C1.39509 12.6014 1 13.4493 1 14.3333V16"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 7.66667C10.5711 7.66667 12.25 6.17428 12.25 4.33333C12.25 2.49238 10.5711 1 8.5 1C6.42893 1 4.75 2.49238 4.75 4.33333C4.75 6.17428 6.42893 7.66667 8.5 7.66667Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="visually-hidden">My Account</span>
                  </a>
                </li>
                <li className="header__account--items header__minicart--items">
                  <a
                    className="header__account--btn minicart__open--btn"
                    // href="javascript:void(0)"
                    onClick={() => setCartOpen(!cartOpen)}
                    data-offcanvas=""
                  >
                    <span className="header__account--btn__icon">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.25 7.66667V4.33333C12.25 3.44928 11.8549 2.60143 11.1517 1.97631C10.4484 1.35119 9.49456 1 8.5 1C7.50544 1 6.55161 1.35119 5.84835 1.97631C5.14509 2.60143 4.75 3.44928 4.75 4.33333V7.66667M1.9375 6H15.0625L16 16H1L1.9375 6Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="items__count">10</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Bottom Header */}

      {/* Start Offcanvas header menu */}
      <div className={`offcanvas__header ${menuOpen ? "open" : ""}`}>
        <div className="offcanvas__inner">
          <div className="offcanvas__logo">
            <a className="offcanvas__logo_link" href="/">
              <img
                src="/assets/logo/nav-logo.jpg"
                alt="Logo-img"
                width={158}
                height={36}
              />
            </a>
            <button
              className="offcanvas__close--btn"
              onClick={() => setMenuOpen(false)}
              data-offcanvas=""
            >
              close
            </button>
          </div>
          <nav className="offcanvas__menu">
            <ul className="offcanvas__menu_ul">
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="/">
                  Home
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="about">
                  About
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="shop-grid">
                  Shop
                </a>
                {/* <ul class="offcanvas__sub_menu">
                          <li class="offcanvas__sub_menu_li">
                              <a href="#" class="offcanvas__sub_menu_item">Column One</a>
                              <ul class="offcanvas__sub_menu">
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="shop-grid">Shop Left Sidebar</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="shop-grid">Shop Grid</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="shop-grid-list.html">Shop Grid List</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="shop-list.html">Shop List</a></li>
                              </ul>
                          </li>
                          <li class="offcanvas__sub_menu_li">
                              <a href="#" class="offcanvas__sub_menu_item">Column Two</a>
                              <ul class="offcanvas__sub_menu">
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="product-details.html">Product Details</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="product-video.html">Video Product</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="product-details.html">Variable Product</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="product-gallery.html">Product Gallery</a></li>
                              </ul>
                          </li>
                          <li class="offcanvas__sub_menu_li">
                              <a href="#" class="offcanvas__sub_menu_item">Column Three</a>
                              <ul class="offcanvas__sub_menu">
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="my-account.html">My Account</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="my-account-2.html">My Account 2</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="404.html">404 Page</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="login">Login Page</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="faq.html">Faq Page</a></li>
                              </ul>
                          </li>
                          <li class="offcanvas__sub_menu_li">
                              <a href="#" class="offcanvas__sub_menu_item">Column Three</a>
                              <ul class="offcanvas__sub_menu">
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="about">About Us</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="contact.html">Contact Us</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="portfolio.html">Portfolio</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="compare.html">Compare Pages</a></li>
                                  <li class="offcanvas__sub_menu_li"><a class="offcanvas__sub_menu_item" href="checkout">Checkout page</a></li>
                              </ul>
                          </li>
                      </ul> */}
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="shop-grid">
                  Jewellery
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="shop-grid">
                  Accesories
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="shop-grid">
                  New Arrivals
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="shop-grid">
                  Offers
                </a>
              </li>
              <li className="offcanvas__menu_li">
                <a className="offcanvas__menu_item" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <div className="offcanvas__account--items">
              <a
                className="offcanvas__account--items__btn d-flex align-items-center"
                href="login"
              >
                <span className="offcanvas__account--items__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.51"
                    height="19.443"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                    />
                    <path
                      d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                    />
                  </svg>
                </span>
                <span className="offcanvas__account--items__label">
                  Login / Register
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* End Offcanvas header menu */}

      {/* Start Offcanvas sticky toolbar */}
      <div className="offcanvas__sticky--toolbar">
        <ul className="d-flex justify-content-between">
          <li className="offcanvas__sticky--toolbar__list">
            <a className="offcanvas__sticky--toolbar__btn" href="/">
              <span className="offcanvas__sticky--toolbar__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="21.51"
                  height="21.443"
                  viewBox="0 0 22 17"
                >
                  <path
                    fill="currentColor"
                    d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                  />
                </svg>
              </span>
              <span className="offcanvas__sticky--toolbar__label">Home</span>
            </a>
          </li>
          <li className="offcanvas__sticky--toolbar__list">
            <a className="offcanvas__sticky--toolbar__btn" href="shop-grid">
              <span className="offcanvas__sticky--toolbar__icon">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.51"
                  height="17.443"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z" />
                </svg>
              </span>
              <span className="offcanvas__sticky--toolbar__label">Shop</span>
            </a>
          </li>
          <li className="offcanvas__sticky--toolbar__list">
            <a
              className="offcanvas__sticky--toolbar__btn search__open--btn"
              href="javascript:void(0)"
              data-offcanvas=""
            >
              <span className="offcanvas__sticky--toolbar__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.51"
                  height="20.443"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </span>
              <span className="offcanvas__sticky--toolbar__label">Search</span>
            </a>
          </li>
          <li className="offcanvas__sticky--toolbar__list">
            <a
              className="offcanvas__sticky--toolbar__btn minicart__open--btn"
              // href="javascript:void(0)"
              data-offcanvas=""
            >
              <span className="offcanvas__sticky--toolbar__icon">
                <svg
                  width={17}
                  height={15}
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="offcanvas__sticky--toolbar__label">Cart</span>
              <span className="items__count">3</span>
            </a>
          </li>
          <li className="offcanvas__sticky--toolbar__list">
            <a className="offcanvas__sticky--toolbar__btn" href="wishlist">
              <span className="offcanvas__sticky--toolbar__icon">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="offcanvas__sticky--toolbar__label">
                &nbsp; Wishlist
              </span>
              <span className="items__count">3</span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Offcanvas sticky toolbar */}

      {/* Start offCanvas minicart */}
      <div className={`offCanvas__minicart ${cartOpen ? "active" : ""}`}>
        <div className="minicart__header">
          <div className="minicart__header--top d-flex justify-content-between align-items-center">
            <h3 className="minicart__title">Shopping Cart</h3>
            <button
              className="minicart__close--btn"
              aria-label="minicart close btn"
              data-offcanvas=""
              onClick={() => setCartOpen(false)}
            >
              <svg
                className="minicart__close--icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
          <p className="minicart__header--desc">
            The Jewellery &amp; Accesories products are limited
          </p>
        </div>
        <div className="minicart__product">
          <div className="minicart__product--items d-flex">
            <div className="minicart__thumb">
              <a href="product-details.html">
                <img
                  src="/assets/product/small-product/product1.webp"
                  alt="prduct-img"
                />
              </a>
            </div>
            <div className="minicart__text">
              <h4 className="minicart__subtitle">
                <a href="product-details.html">Z 7-8mm Button is </a>
              </h4>
              <span className="color__variant">
                <b>Color:</b> Beige
              </span>
              <div className="minicart__price">
                <span className="minicart__current--price">$125.00</span>
                <span className="minicart__old--price">$140.00</span>
              </div>
              <div className="minicart__text--footer d-flex align-items-center">
                <div className="quantity__box minicart__quantity">
                  <button
                    type="button"
                    className="quantity__value decrease"
                    aria-label="quantity value"
                    value="Decrease Value"
                  >
                    -
                  </button>
                  <label>
                    <input
                      type="number"
                      className="quantity__number"
                      defaultValue={1}
                      data-counter=""
                    />
                  </label>
                  <button
                    type="button"
                    className="quantity__value increase"
                    aria-label="quantity value"
                    value="Increase Value"
                  >
                    +
                  </button>
                </div>
                <button className="minicart__product--remove" type="button">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="minicart__product--items d-flex">
            <div className="minicart__thumb">
              <a href="product-details.html">
                <img
                  src="/assets/product/small-product/product2.webp"
                  alt="prduct-img"
                />
              </a>
            </div>
            <div className="minicart__text">
              <h4 className="minicart__subtitle">
                <a href="product-details.html">Z 7-8mm Button is </a>
              </h4>
              <span className="color__variant">
                <b>Color:</b> Green
              </span>
              <div className="minicart__price">
                <span className="minicart__current--price">$115.00</span>
                <span className="minicart__old--price">$130.00</span>
              </div>
              <div className="minicart__text--footer d-flex align-items-center">
                <div className="quantity__box minicart__quantity">
                  <button
                    type="button"
                    className="quantity__value decrease"
                    aria-label="quantity value"
                    value="Decrease Value"
                  >
                    -
                  </button>
                  <label>
                    <input
                      type="number"
                      className="quantity__number"
                      defaultValue={1}
                      data-counter=""
                    />
                  </label>
                  <button
                    type="button"
                    className="quantity__value increase"
                    aria-label="quantity value"
                    value="Increase Value"
                  >
                    +
                  </button>
                </div>
                <button className="minicart__product--remove" type="button">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="minicart__amount">
          <div className="minicart__amount_list d-flex justify-content-between">
            <span>Sub Total:</span>
            <span>
              <b>$240.00</b>
            </span>
          </div>
          <div className="minicart__amount_list d-flex justify-content-between">
            <span>Total:</span>
            <span>
              <b>$240.00</b>
            </span>
          </div>
        </div>
        <div className="minicart__conditions text-center">
          <input
            className="minicart__conditions--input"
            id="accept"
            type="checkbox"
          />
          <label className="minicart__conditions--label" htmlFor="accept">
            I agree with the
            <a className="minicart__conditions--link" href="privacy-policy">
              Privacy Policy
            </a>
          </label>
        </div>
        <div className="minicart__button d-flex justify-content-center">
          <a className="primary__btn minicart__button--link" href="cart">
            View cart
          </a>
          <a className="primary__btn minicart__button--link" href="checkout">
            Checkout
          </a>
        </div>
      </div>
      {/* End offCanvas minicart */}

      {/* Start search box area */}
      <div className={`predictive__search--box ${searchOpen ? "active" : ""}`}>
        <div className="predictive__search--box__inner">
          <h2 className="predictive__search--title">Search Products</h2>
          <form className="predictive__search--form" action="#">
            <label>
              <input
                className="predictive__search--input"
                placeholder="Search Here"
                type="text"
              />
            </label>
            <button
              className="predictive__search--button text-white"
              aria-label="search button"
            >
              <svg
                className="product__items--action__btn--svg"
                xmlns="http://www.w3.org/2000/svg"
                width="30.51"
                height="25.443"
                viewBox="0 0 512 512"
              >
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </button>
          </form>
        </div>
        <button
          className="predictive__search--close__btn"
          aria-label="search close"
          data-offcanvas=""
          onClick={() => setSearchOpen(false)}
        >
          <svg
            className="predictive__search--close__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="40.51"
            height="30.443"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
      </div>
      {/* End serch box area */}
    </header>
  );
};

export default Header;

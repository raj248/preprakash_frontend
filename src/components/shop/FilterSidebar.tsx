import React, { useState } from "react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  // State to handle the Accordion for Categories
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (name: string) => {
    setActiveCategory(activeCategory === name ? null : name);
  };

  const categories = [
    {
      name: "Fairness cream",
      img: "/assets/product/small-product/product1.webp",
    },
    {
      name: "Skin Silver",
      img: "/assets/product/small-product/product2.webp",
    },
    {
      name: "Night Serum",
      img: "/assets/product/small-product/product3.webp",
    },
    {
      name: "Cream Oil",
      img: "/assets/product/small-product/product4.webp",
    },
    {
      name: "Skin Cleaner",
      img: "/assets/product/small-product/product5.webp",
    },
  ];

  return (
    <div
      className={`offcanvas__filter--sidebar widget__area ${isOpen ? "active" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="offcanvas__filter--close"
        onClick={onClose}
      >
        <svg
          className="minicart__close--icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="25"
          height="25"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M368 368L144 144M368 144L144 368"
          ></path>
        </svg>
        <span className="offcanvas__filter--close__text">Close</span>
      </button>

      <div className="offcanvas__filter--sidebar__inner">
        {/* Categories Accordion */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Categories</h2>
          <ul className="widget__categories--menu">
            {categories.map((cat) => (
              <li className="widget__categories--menu__list" key={cat.name}>
                <label
                  className={`widget__categories--menu__label d-flex align-items-center ${activeCategory === cat.name ? "active" : ""}`}
                  onClick={() => toggleCategory(cat.name)}
                >
                  <img
                    className="widget__categories--menu__img"
                    src={cat.img}
                    alt={cat.name}
                  />
                  <span className="widget__categories--menu__text">
                    {cat.name}
                  </span>
                  <svg
                    className={`widget__categories--menu__arrowdown--icon ${activeCategory === cat.name ? "rotated" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </label>

                {/* Submenu displays only if active */}
                <ul
                  className="widget__categories--sub__menu"
                  style={{
                    display: activeCategory === cat.name ? "block" : "none",
                  }}
                >
                  <SubMenuItem
                    label="Massage Cream"
                    img="/assets/product/small-product/product2.webp"
                  />
                  <SubMenuItem
                    label="Matte Walnut"
                    img="/assets/product/small-product/product3.webp"
                  />
                  {/* ... add more as needed */}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Dietary Needs (Checkboxes) */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Dietary Needs</h2>
          <ul className="widget__form--check">
            {["Bath & Body", "Hair Care", "Make Up", "Health Care"].map(
              (item, idx) => (
                <li className="widget__form--check__list" key={idx}>
                  <label
                    className="widget__form--check__label"
                    htmlFor={`check${idx}`}
                  >
                    {item}
                  </label>
                  <input
                    className="widget__form--check__input"
                    id={`check${idx}`}
                    type="checkbox"
                  />
                  <span className="widget__form--checkmark"></span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="single__widget price__filter widget__bg">
          <h2 className="widget__title h3">Filter By Price</h2>
          <form
            className="price__filter--form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="price__filter--form__inner mb-15 d-flex align-items-center">
              <PriceInput label="From" id="gte" placeholder="0" />
              <div className="price__divider">
                <span>-</span>
              </div>
              <PriceInput label="To" id="lte" placeholder="250.00" />
            </div>
            <button className="primary__btn price__filter--btn" type="submit">
              Filter
            </button>
          </form>
        </div>

        {/* Brand Tags */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Brands</h2>
          <ul className="widget__tagcloud">
            {["Hair Care", "Make Up", "Skin Care", "Fairness"].map((tag) => (
              <li className="widget__tagcloud--list" key={tag}>
                <a className="widget__tagcloud--link" href="#">
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Helper Sub-Components
const SubMenuItem = ({ label, img }: { label: string; img: string }) => (
  <li className="widget__categories--sub__menu--list">
    <a
      className="widget__categories--sub__menu--link d-flex align-items-center"
      href="#"
    >
      <img
        className="widget__categories--sub__menu--img"
        src={img}
        alt={label}
      />
      <span className="widget__categories--sub__menu--text">{label}</span>
    </a>
  </li>
);

const PriceInput = ({ label, id, placeholder }: any) => (
  <div className="price__filter--group">
    <label className="price__filter--label" htmlFor={id}>
      {label}
    </label>
    <div className="price__filter--input border-radius-5 d-flex align-items-center">
      <span className="price__filter--currency">$</span>
      <input
        className="price__filter--input__field border-0"
        id={id}
        type="number"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default FilterSidebar;

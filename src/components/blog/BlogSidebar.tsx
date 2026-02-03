import React, { useState } from "react";

const BlogSidebar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "Fairness cream",
      sub: ["Massage Cream", "Matte Walnut", "Bamboo Scrub"],
    },
    { name: "Skin Silver", sub: ["Castor Oil", "Bamboo Scrub"] },
  ];

  return (
    <aside className="blog__sidebar--widget left widget__area">
      {/* Search Widget */}
      <div className="single__widget widget__search widget__bg">
        <h2 className="widget__title h3">Search Objects</h2>
        <form
          className="widget__search--form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="widget__search--form__input"
            placeholder="Search..."
            type="text"
          />
          <button className="widget__search--form__btn" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>

      {/* Categories Widget */}
      <div className="single__widget widget__bg">
        <h2 className="widget__title h3">Categories</h2>
        <ul className="widget__categories--menu">
          {categories.map((cat) => (
            <li key={cat.name} className="widget__categories--menu__list">
              <div
                className="widget__categories--menu__label d-flex align-items-center"
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.name ? null : cat.name,
                  )
                }
              >
                <span className="widget__categories--menu__text">
                  {cat.name}
                </span>
                <ArrowDownIcon isOpen={activeCategory === cat.name} />
              </div>

              {activeCategory === cat.name && (
                <ul className="widget__categories--sub__menu">
                  {cat.sub.map((sub) => (
                    <li
                      key={sub}
                      className="widget__categories--sub__menu--list"
                    >
                      <a
                        className="widget__categories--sub__menu--link"
                        href="#"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

// Simple SVG Component for the search icon
const SearchIcon = () => (
  <svg width="22" height="20" viewBox="0 0 512 512">
    <path
      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
      fill="none"
      stroke="currentColor"
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      d="M338.29 338.29L448 448"
      strokeWidth="32"
    />
  </svg>
);

const ArrowDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    style={{
      transform: isOpen ? "rotate(180deg)" : "none",
      transition: "0.3s",
    }}
    width="12"
    height="8"
  >
    <path
      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
      transform="translate(-6 -8.59)"
      fill="currentColor"
    />
  </svg>
);

export default BlogSidebar;

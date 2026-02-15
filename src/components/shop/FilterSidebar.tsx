import { useCategory } from "@/hooks/useCategory";
import React, { useState } from "react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  onFilterChange,
}) => {
  // State to handle the Accordion for Categories
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  // const handlePriceSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onFilterChange({
  //     category: selectedSlug || "",
  //     minPrice: priceRange.min,
  //     maxPrice: priceRange.max,
  //   });
  // };

  const handleCategoryClick = (slug: string) => {
    setPriceRange({ min: 0, max: 0 });
    setActiveCategory(activeCategory === slug ? null : slug);
    setSelectedSlug(slug);
    onFilterChange({
      category: slug,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    });
  };

  const { categories, loading } = useCategory();

  if (loading || !categories || categories.length === 0) {
    return <div>Loading categories...</div>; // Or a skeleton loader
  }

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
        <CloseButton />
        <span className="offcanvas__filter--close__text">Close</span>
      </button>

      <div className="offcanvas__filter--sidebar__inner">
        {/* Categories Accordion */}
        <div className="single__widget widget__bg">
          <h2 className="widget__title h3">Categories</h2>
          <ul className="widget__categories--menu">
            {/* All */}
            <li className="widget__categories--menu__list" key={0}>
              <label
                className="widget__categories--menu__label d-flex align-items-center"
                onClick={() =>
                  onFilterChange({
                    category: "",
                    minPrice: priceRange.min,
                    maxPrice: priceRange.max,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <img
                  className="widget__categories--menu__img"
                  src="assets/icon/icon-img3.webp"
                  alt="All Categories"
                />
                <span className="widget__categories--menu__text">
                  All Categories
                </span>
              </label>
            </li>

            {categories &&
              categories[0].children?.map((cat) => (
                <li className="widget__categories--menu__list" key={cat._id}>
                  <label
                    className={`widget__categories--menu__label d-flex align-items-center ${activeCategory === cat.name.en ? "active" : ""}`}
                    onClick={() => handleCategoryClick(cat._id)}
                  >
                    <img
                      className="widget__categories--menu__img"
                      src={cat.icon}
                      alt={cat.name.en}
                    />
                    <span className="widget__categories--menu__text">
                      {cat.name.en}
                    </span>
                    <svg
                      className={`widget__categories--menu__arrowdown--icon ${activeCategory === cat._id ? "rotated" : ""}`}
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

                  {/* Submenu displays only if active, show category childrens*/}
                  <ul
                    className="widget__categories--sub__menu"
                    style={{
                      display: activeCategory === cat._id ? "block" : "none",
                    }}
                  >
                    {cat.children?.map((child) => (
                      <li
                        key={child._id}
                        className="widget__categories--sub__menu--list"
                      >
                        <button
                          className={`widget__categories--sub__menu--link d-flex align-items-center border-0 bg-transparent ${selectedSlug === child._id ? "text-primary" : ""}`}
                          onClick={() => {
                            setSelectedSlug(child._id || "");
                            onFilterChange({
                              category: child._id || "",
                              minPrice: priceRange.min,
                              maxPrice: priceRange.max,
                            });
                          }}
                        >
                          <img
                            className="widget__categories--sub__menu--img"
                            src={child.icon}
                            alt={child.name.en}
                          />
                          <span className="widget__categories--sub__menu--text">
                            {child.name.en}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>

        {/* Price Filter */}
        <ul
          className="widget__categories--sub__menu"
          style={{
            display: activeCategory === categories[0]._id ? "block" : "none",
          }}
        >
          {categories[0].children?.map((child) => (
            <li key={child._id} className="widget__categories--sub__menu--list">
              <button
                className={`widget__categories--sub__menu--link d-flex align-items-center border-0 bg-transparent ${selectedSlug === child._id ? "text-primary" : ""}`}
                onClick={() => {
                  setSelectedSlug(child._id || "");
                  onFilterChange({
                    category: child._id || "",
                    minPrice: priceRange.min,
                    maxPrice: priceRange.max,
                  });
                }}
              >
                <img
                  className="widget__categories--sub__menu--img"
                  src={child.icon}
                  alt={child.name.en}
                />
                <span className="widget__categories--sub__menu--text">
                  {child.name.en}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CloseButton = () => (
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
);

export default FilterSidebar;

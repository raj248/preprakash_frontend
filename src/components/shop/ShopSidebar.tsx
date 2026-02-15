import React, { useState, useEffect } from "react";
import { useCategory } from "@/hooks/useCategory";

interface ShopSidebarProps {
  onCategorySelect: (slug: string) => void;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({ onCategorySelect }) => {
  const { categories, refreshCategories, loading } = useCategory();
  // State to track which top-level category is expanded
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    refreshCategories();
  }, [refreshCategories]);

  const toggleAccordion = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  // Guard clause for loading state
  if (loading || !categories || categories.length === 0) {
    return (
      <aside className="shop__sidebar--widget widget__area">Loading...</aside>
    );
  }

  // We skip the root "Home" and map its children as top-level sidebar items
  const sidebarCategories = categories[0]?.children || [];

  return (
    <aside className="shop__sidebar--widget widget__area product_d_widget d-none d-lg-block">
      <div className="single__widget widget__bg">
        <h2 className="widget__title h3">Categories</h2>
        <ul className="widget__categories--menu">
          {/* All */}
          <li className="widget__categories--menu__list" key={0}>
            <label
              className="widget__categories--menu__label d-flex align-items-center"
              onClick={() => onCategorySelect("")}
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
          {sidebarCategories.map((cat) => {
            const isExpanded = expandedCategory === cat._id;
            const hasChildren = cat.children && cat.children.length > 0;

            return (
              <li className="widget__categories--menu__list" key={cat._id}>
                <label
                  className={`widget__categories--menu__label d-flex align-items-center ${isExpanded ? "active" : ""}`}
                  onClick={() => {
                    onCategorySelect(cat._id || "");
                    console.log("full category: ", cat);
                    if (hasChildren) toggleAccordion(cat._id);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="widget__categories--menu__img"
                    src={
                      cat.icon ||
                      "assets/img/product/small-product/product1.webp"
                    }
                    alt={cat.name.en}
                  />
                  <span className="widget__categories--menu__text">
                    {cat.name.en}
                  </span>

                  {hasChildren && (
                    <svg
                      className={`widget__categories--menu__arrowdown--icon ${isExpanded ? "rotated" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      ></path>
                    </svg>
                  )}
                </label>

                {/* Submenu Logic */}
                {hasChildren && (
                  <ul
                    className="widget__categories--sub__menu"
                    style={{
                      display: isExpanded ? "block" : "none",
                      animation: isExpanded ? "fadeIn 0.4s ease" : "none",
                    }}
                  >
                    {cat.children?.map((child) => (
                      <li
                        className="widget__categories--sub__menu--list"
                        key={child._id}
                      >
                        <button
                          className="widget__categories--sub__menu--link d-flex align-items-center border-0 bg-transparent w-100 text-start"
                          onClick={(e) => {
                            onCategorySelect(child._id || "");
                            e.stopPropagation();
                          }}
                        >
                          <img
                            className="widget__categories--sub__menu--img"
                            src={
                              child.icon ||
                              "assets/img/product/small-product/product2.webp"
                            }
                            alt={child.name.en}
                          />
                          <span className="widget__categories--sub__menu--text">
                            {child.name.en}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ShopSidebar;

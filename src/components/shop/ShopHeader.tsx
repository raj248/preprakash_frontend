import React from "react";

interface ShopHeaderProps {
  onFilterClick: () => void;
  totalProducts: number;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({
  onFilterClick,
  totalProducts,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="shop__header d-flex align-items-center justify-content-between mb-30">
      <div className="product__view--mode d-flex align-items-center">
        {/* Filter Button */}
        <button
          className="widget__filter--btn d-flex align-items-center"
          onClick={onFilterClick}
        >
          <svg
            className="widget__filter--btn__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="16"
            height="16"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="28"
              d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
            />
            <circle
              cx="336"
              cy="128"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="28"
            />
            <circle
              cx="176"
              cy="256"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="28"
            />
            <circle
              cx="336"
              cy="384"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="28"
            />
          </svg>
          <span className="widget__filter--btn__text">Filter</span>
        </button>

        {/* Items Per Page Select */}
        <div className="product__view--mode__list product__short--by align-items-center d-flex">
          <label className="product__view--label">Show :</label>
          <div className="select shop__header--select">
            <select className="product__view--select">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
        </div>

        {/* Sort By Select */}
        <div className="product__view--mode__list product__short--by align-items-center d-flex">
          <label className="product__view--label">Sort By :</label>
          <div className="select shop__header--select">
            <select className="product__view--select">
              <option value="latest">Sort by latest</option>
              <option value="popularity">Sort by popularity</option>
              <option value="newness">Sort by newness</option>
              <option value="rating">Sort by rating</option>
            </select>
          </div>
        </div>

        {/* Grid/List View Toggles */}
        <div className="product__view--mode__list">
          <div className="product__tab--one product__grid--column__buttons d-flex justify-content-center">
            <button
              className={`product__grid--column__buttons--icons ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="grid view"
            >
              <GridIcon />
            </button>
            <button
              className={`product__grid--column__buttons--icons ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-label="list view"
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>

      <p className="product__showing--count">
        Showing 1-12 of {totalProducts} results
      </p>
    </div>
  );
};

// SVG Icons as mini components to keep JSX clean
const GridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 9 9"
  >
    <g transform="translate(-1360 -479)">
      <rect
        width="4"
        height="4"
        transform="translate(1360 479)"
        fill="currentColor"
      />
      <rect
        width="4"
        height="4"
        transform="translate(1360 484)"
        fill="currentColor"
      />
      <rect
        width="4"
        height="4"
        transform="translate(1365 479)"
        fill="currentColor"
      />
      <rect
        width="4"
        height="4"
        transform="translate(1365 484)"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 13 8"
  >
    <g transform="translate(-1376 -478)">
      <g transform="translate(12 -2)">
        <rect
          width="3"
          height="2"
          transform="translate(1364 483)"
          fill="currentColor"
        />
        <rect
          width="9"
          height="2"
          transform="translate(1368 483)"
          fill="currentColor"
        />
        <rect
          width="3"
          height="2"
          transform="translate(1364 480)"
          fill="currentColor"
        />
        <rect
          width="9"
          height="2"
          transform="translate(1368 480)"
          fill="currentColor"
        />
        <rect
          width="3"
          height="2"
          transform="translate(1364 486)"
          fill="currentColor"
        />
        <rect
          width="9"
          height="2"
          transform="translate(1368 486)"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default ShopHeader;

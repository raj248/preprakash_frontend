import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Don't render if there's only one page or no items
  if (totalPages <= 1) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination__area">
      <nav className="pagination justify-content-center">
        <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
          {/* Previous Arrow */}
          <li className="pagination__list">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`pagination__item--arrow link border-0 bg-transparent ${currentPage === 1 ? "disabled" : ""}`}
              style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
            >
              <PrevIcon />
              <span className="visually-hidden">page left arrow</span>
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li className="pagination__list" key={page}>
              {page === currentPage ? (
                <span className="pagination__item pagination__item--current">
                  {page}
                </span>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(page);
                  }}
                  className="pagination__item link border-0 bg-transparent"
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {/* Next Arrow */}
          <li className="pagination__list">
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`pagination__item--arrow link border-0 bg-transparent ${currentPage === totalPages ? "disabled" : ""}`}
              style={{
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              <NextIcon />
              <span className="visually-hidden">page right arrow</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const PrevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.51"
    height="20.443"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M244 400L100 256l144-144M120 256h292"
    />
  </svg>
);

const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.51"
    height="20.443"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="M268 112l144 144-144 144M392 256H100"
    />
  </svg>
);

export default Pagination;

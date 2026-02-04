import { useState, useEffect } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/shop/FeatureSection";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ShopHeader from "@/components/shop/ShopHeader";
import ProductGrid from "@/components/shop/ProductGrid"; // The mapping component

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle Body Class & Scroll Lock when Filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("offcanvas__filter--sidebar_active");
    } else {
      document.body.classList.remove("offcanvas__filter--sidebar_active");
    }

    return () =>
      document.body.classList.remove("offcanvas__filter--sidebar_active");
  }, [isFilterOpen]);

  return (
    <main className="main__content_wrapper">
      <Breadcrumb title="Shop" />

      <section className="shop__section section--padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="shop__product--wrapper">
                {/* 1. Header with Controls */}
                <ShopHeader
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  onFilterClick={() => setIsFilterOpen(true)}
                  totalProducts={50}
                />

                {/* 2. Product Listing Area */}
                <div className="tab_content">
                  <ProductGrid viewMode={viewMode} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      {/* 4. Background Overlay (Click to close) */}
      {isFilterOpen && (
        <div
          className="offcanvas__overlay_active"
          onClick={() => setIsFilterOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 99, // Ensure this is just below the sidebar
            cursor: "pointer",
          }}
        />
      )}

      <FeatureSection />
    </main>
  );
};

export default ShopPage;

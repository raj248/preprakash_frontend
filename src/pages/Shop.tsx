import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/shop/FeatureSection";
import ShopHeader from "@/components/shop/ShopHeader";
import ProductGrid from "@/components/shop/ProductGrid";
import { useProduct } from "@/hooks/useProducts";
import ShopSidebar from "@/components/shop/ShopSidebar";
import FilterSidebar from "@/components/shop/FilterSidebar";
import Pagination from "@/components/shop/Pagination";

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize state from URL params or defaults
  const [params, setParams] = useState({
    page: 1,
    limit: 12,
    sort: "latest",
    category: searchParams.get("category") || "",
    slug: searchParams.get("slug") || "",
    title: searchParams.get("title") || "",
    minPrice: 0,
    maxPrice: 0,
  });

  const {
    products,
    setProducts, // Assuming you expose this or handle it inside hook
    fetchShowingProducts,
    getShowingStoreProducts,
    getProductBySlug,
  } = useProduct();

  const loadProducts = useCallback(async () => {
    // 1. If a specific Slug is provided, fetch just that product
    if (params.slug) {
      const product = await getProductBySlug(params.slug);
      // We wrap the single product in an array for the Grid component
      setProducts(product ? [product] : []);
      return;
    }

    // 2. If Category or Title filters exist, fetch filtered list
    if (params.category || params.title) {
      const products = await getShowingStoreProducts({
        category: params.category,
        title: params.title,
      });
      setProducts(products);
      return;
    }

    // 3. Default: No specific filters, fetch standard showing products
    await fetchShowingProducts();
  }, [
    params.category,
    params.slug,
    params.title,
    // fetchShowingProducts,
    // getShowingStoreProducts,
    // getProductBySlug,
  ]);

  // Trigger fetch whenever key params change
  useEffect(() => {
    loadProducts();
  }, [loadProducts, params.category, params.slug, params.title]);

  // Inside ShopPage component, after fetching products and before return:

  // 1. First, create a sorted copy of the products
  const sortedProducts = [...products].sort((a, b) => {
    if (params.sort === "low") {
      // Price: Low to High (Check if you use 'price' or 'salePrice')
      return (a.prices?.price || 0) - (b.prices?.price || 0);
    }
    if (params.sort === "high") {
      // Price: High to Low
      return (b.prices?.price || 0) - (a.prices?.price || 0);
    }
    if (params.sort === "latest") {
      // Sort by createdAt date (newest first)
      return (
        new Date(b.createdAt || 0).getTime() -
        new Date(a.createdAt || 0).getTime()
      );
    }
    return 0;
  });

  // 2. Then, calculate pagination based on the SORTED list
  const indexOfLastProduct = params.page * params.limit;
  const indexOfFirstProduct = indexOfLastProduct - params.limit;

  // 3. Slice the sorted results
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <main className="main__content_wrapper">
      <Breadcrumb title="Shop" />

      <section className="shop__section section--padding">
        <div className="container">
          <div className="row">
            {/* Sidebar on the Left */}
            <div className="col-xl-3 col-lg-4 mb-30">
              <ShopSidebar
                onCategorySelect={(cat) => {
                  setParams((prev) => ({
                    ...prev,
                    category: cat,
                    slug: "",
                    title: "",
                    page: 1, // <--- Reset to page 1
                  }));
                  setSearchParams({ category: cat });
                }}
              />
            </div>

            {/* Main Content on the Right */}
            <div className="col-xl-9 col-lg-8">
              <div className="shop__product--wrapper">
                <ShopHeader
                  onFilterClick={() => setIsFilterOpen(true)}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  totalProducts={products.length}
                  onSortChange={(sort) =>
                    setParams((prev) => ({ ...prev, sort }))
                  }
                  onLimitChange={(num) =>
                    setParams((prev) => ({ ...prev, limit: num }))
                  }
                />

                <div className="tab_content">
                  <ProductGrid viewMode={viewMode} products={currentProducts} />
                </div>
              </div>
            </div>
            <Pagination
              totalItems={products.length} // This should come from your backend count
              itemsPerPage={params.limit}
              currentPage={params.page}
              onPageChange={(page) => {
                setParams((prev) => ({ ...prev, page }));
                window.scrollTo(0, 0); // Scroll to top when page changes
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={(filter) => {
          setIsFilterOpen(false);
          setParams((prev) => ({
            ...prev,
            ...filter,
            page: 1,
            slug: "",
            title: "",
          }));
        }}
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

import { useState, useCallback } from "react";
// @ts-ignore
import ProductServices from "../services/ProductServices";
import { type Product } from "@/types/product";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Helper to map API data to your specific Product type
  const mapProduct = (el: any): Product => ({
    _id: el._id,
    slug: el.slug,
    sku: el.sku,
    productId: el.productId,
    title: el.title.en,
    description: el.description.en,
    categories: el.categories,
    category: el.category,
    image: el.image,
    stock: el.stock,
    prices: {
      discount: el.prices?.discount || "0",
      originalPrice: el.prices?.originalPrice,
      price: el.prices?.price,
    },
    tag: el.tag || [],
    createdAt: el.createdAt,
    updatedAt: el.updatedAt,
  });

  // Fetch all showing products
  const fetchShowingProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await ProductServices.getShowingProducts();
      const formattedData = data.map(mapProduct);
      setProducts(formattedData);
    } catch (err: any) {
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch product by slug (for product details page)
  const getProductBySlug = async (slug: string): Promise<Product | null> => {
    setLoading(true);
    try {
      const data = await ProductServices.getProductBySlug(slug);
      return mapProduct(data);
    } catch (err) {
      setError("Product not found");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getShowingStoreProducts = async (params: {
    category?: string;
    title?: string;
    slug?: string;
  }): Promise<Product[]> => {
    setLoading(true);
    setError(null);
    try {
      const response = await ProductServices.getShowingStoreProducts(params);
      // Assuming the response contains a products array based on GetShowingStoreProductsResponse
      const formattedData = response.products.map(mapProduct);
      return formattedData;
    } catch (err: any) {
      setError(err.message || "Failed to fetch store products");
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    setProducts,
    fetchShowingProducts,
    getProductBySlug,
    getShowingStoreProducts,
  };
};

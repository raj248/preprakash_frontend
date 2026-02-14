import { useState, useCallback, useEffect } from "react";
import CategoryServices from "@/services/CategoryServices";
import type { Category } from "@/types/Category";

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches only the categories marked as "show" from the backend.
   */
  const fetchShowingCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await CategoryServices.getShowingCategory();
      setCategories(data);
    } catch (err: any) {
      setError(err.message || "Failed to load categories");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch immediately on hook mount
  useEffect(() => {
    fetchShowingCategories();
  }, [fetchShowingCategories]);

  return {
    categories,
    loading,
    error,
    refreshCategories: fetchShowingCategories,
  };
};

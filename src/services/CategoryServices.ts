// services/CategoryServices.ts
import requests from "./httpServices";
import type { Category } from "../types/Category";

const CategoryServices = {
  // fetch only "show" categories
  getShowingCategory: async (): Promise<Category[]> => {
    return await requests.get<Category[]>("/category/show");
  },
};

export default CategoryServices;

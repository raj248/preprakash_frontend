export interface Product {
  _id: string;
  slug: string;
  sku: string;
  productId: string;
  title: string;
  description: string;
  categories: string[];
  category: string;
  image: string;
  stock: number;
  prices: {
    discount: string;
    originalPrice: number;
    price: number;
  };
  tag: string[];
}

export interface GetShowingStoreProductsResponse {
  //   reviews: Review[];
  products: Product[];
  popularProducts: Product[];
  relatedProducts: Product[];
  discountedProducts: Product[];
}

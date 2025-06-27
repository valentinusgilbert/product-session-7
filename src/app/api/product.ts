import { apiGet } from './index';

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

// Ambil list produk (limit opsional)
export const getProductList = async (limit = 5): Promise<Product[]> => {
  return apiGet<Product[]>(`https://fakestoreapi.com/products?limit=${limit}`);
};

// Ambil detail produk berdasarkan id
export const getProductDetail = async (id: string | number): Promise<Product> => {
  return apiGet<Product>(`https://fakestoreapi.com/products/${id}`);
}; 
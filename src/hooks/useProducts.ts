import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/productService";

export const useProductsQuery = () => {
  return useQuery({ queryKey: ["getAllProducts"], queryFn: fetchProducts });
};

import axios from "axios";
import { CardList } from "../interfaces/CartList";

export const fetchProducts = async (): Promise<CardList[]> => {
  const response = await axios.get(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products",
    {
      params: { page: 1, rows: 8, sortBy: "id", orderBy: "ASC" },
    }
  );
  return response.data.products;
};

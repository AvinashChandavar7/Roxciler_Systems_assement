import axios from "axios";
import { GET_ALL_PRODUCT_URL, SEARCH_PRODUCT_URL } from "../config/config";
import { ProductType } from "../types/types";

export const getAllProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await axios.get(GET_ALL_PRODUCT_URL);
    const { data } = response;
    return data.data as ProductType[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchProducts = async (
  searchText: string,
  selectedMonth: string,

): Promise<ProductType[]> => {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('searchText', searchText || '');
    queryParams.append('selectedMonth', selectedMonth || '');



    const response = await axios.get(`${SEARCH_PRODUCT_URL}?${queryParams}`);

    // console.log(response)
    const { data } = response;

    // console.log(data.data.data)
    return data.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
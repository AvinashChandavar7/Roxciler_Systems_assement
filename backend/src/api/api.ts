import axios from 'axios';
import { ProductType } from '../types/types';

const API_URI = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

const getProductData = async (): Promise<ProductType[]> => {
  try {
    const response = await axios.get(API_URI);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};

export { getProductData };
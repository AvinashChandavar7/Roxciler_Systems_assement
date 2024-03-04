// import axios from "axios";
// import { GET_ALL_PRODUCT_URL, SEARCH_PRODUCT_URL, STATISTICS_URL, BAR_CHART_URL, PIE_CHART_URL, COMBINED_CHART_URL } from "../config/config";
// import { ProductType, BarChartType, CombinedDataType, PieChartType, StatisticsType } from "../types/types";

// // Product API functions
// export const getAllProducts = async (): Promise<ProductType[]> => {
//   try {
//     const response = await axios.get(GET_ALL_PRODUCT_URL);
//     return response.data.data as ProductType[];
//   } catch (error) {
//     console.error("Error in getAllProducts:", error);
//     throw error;
//   }
// };

// export const searchProducts = async (
//   searchText: string,
//   selectedMonth: string,
//   page: number
// ): Promise<ProductType[]> => {
//   try {
//     const queryParams = new URLSearchParams();
//     queryParams.append('searchText', searchText || '');
//     queryParams.append('selectedMonth', selectedMonth || '');
//     queryParams.append('page', page.toString());

//     const response = await axios.get(`${SEARCH_PRODUCT_URL}?${queryParams}`);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error in searchProducts:", error);
//     throw error;
//   }
// };

// // Chart API functions
// const fetchChartData = async <T>(url: string, month: string): Promise<T> => {
//   try {
//     const queryParams = new URLSearchParams();
//     queryParams.append('month', month || '');

//     const response = await axios.get(`${url}?${queryParams}`);
//     return response.data.data;
//   } catch (error) {
//     console.error(`Error in fetchChartData for ${url}:`, error);
//     throw error;
//   }
// };

// export const getStatisticsData = async (month: string): Promise<StatisticsType> => {
//   return fetchChartData<StatisticsType>(STATISTICS_URL, month);
// };

// export const getBarChartData = async (month: string): Promise<BarChartType> => {
//   return fetchChartData<BarChartType>(BAR_CHART_URL, month);
// };

// export const getPieChartData = async (month: string): Promise<PieChartType> => {
//   return fetchChartData<PieChartType>(PIE_CHART_URL, month);
// };

// export const combinedDataAPI = async (month: string): Promise<CombinedDataType> => {
//   return fetchChartData<CombinedDataType>(COMBINED_CHART_URL, month);
// };

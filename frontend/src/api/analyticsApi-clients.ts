import axios from "axios";

import {
  STATISTICS_URL,
  BAR_CHART_URL,
  PIE_CHART_URL,
  COMBINED_CHART_URL,
} from "../config/config";
import { PieChartType } from "../types/types";

export const getStatisticsData = async (month: string) => {
  try {

    const queryParams = new URLSearchParams();
    queryParams.append('month', month || '');


    const response = await axios.get(`${STATISTICS_URL}?${queryParams}`);
    const { data } = response;

    // console.log("data", data.response)
    return data.response
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getBarChartData = async (month: string) => {
  try {

    const queryParams = new URLSearchParams();
    queryParams.append('month', month || '');


    const response = await axios.get(`${BAR_CHART_URL}?${queryParams}`);
    const { data } = response;

    console.log("data", data.data)
    return data
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getPieChartData = async (month: string) => {
  try {

    const queryParams = new URLSearchParams();
    queryParams.append('month', month || '');


    const response = await axios.get(`${PIE_CHART_URL}?${queryParams}`);
    const { data } = response;

    // console.log("data", data.data);

    const pieChartData: PieChartType = {
      data: data.data,
    };

    return pieChartData;

  } catch (error) {
    console.error(error);
    throw error;
  }
};



export const combinedDataAPI = async (month: string) => {
  try {

    const queryParams = new URLSearchParams();
    queryParams.append('month', month || '');


    const response = await axios.get(`${COMBINED_CHART_URL}?${queryParams}`);
    // const response = await axios.get(`${COMBINED_CHART_URL}?month=03`);
    const { data } = response;

    // console.log("data", data.data)
    return data.data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

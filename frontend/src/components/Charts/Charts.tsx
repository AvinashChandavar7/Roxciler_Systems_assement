/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useMonth } from "../../contexts/MonthContext";

import { getBarChartData, getPieChartData, getStatisticsData } from "../../api/analyticsApi-clients";

import { BarChartType, PieChartType, StatisticsType } from "../../types/types";

import PieChartData from "./PieChartData";
import BarChartData from "./BarChartData";
import TransitionsStatistics from "./TransitionsStatistics";


const Charts = () => {
  const { selectedMonth } = useMonth();

  const [statisticsData, setStatisticsData] = useState<StatisticsType | null>(null);
  const [pieChartData, setPieChartData] = useState<PieChartType | null>(null);
  const [barChartData, setBarChartData] = useState<BarChartType | null>(null);


  const fetchData = async (apiFunction: Function, setData: Function) => {
    try {
      const data = await apiFunction(selectedMonth);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(getStatisticsData, setStatisticsData);
  }, [selectedMonth]);

  useEffect(() => {
    fetchData(getPieChartData, setPieChartData);
  }, [selectedMonth]);

  useEffect(() => {
    fetchData(getBarChartData, setBarChartData);
  }, [selectedMonth]);

  return (
    <main>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {statisticsData && <TransitionsStatistics {...statisticsData} />}
        {pieChartData && <PieChartData {...pieChartData} />}
      </div>

      <div className="grid grid-cols-1 min-h-[400px]">

        {barChartData && <BarChartData data={barChartData.data} />}
      </div>

    </main>
  );
};

export default Charts;

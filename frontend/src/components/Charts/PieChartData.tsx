import Chart from 'react-apexcharts';
import { PieChartType } from '../../types/types';
import { ApexOptions } from 'apexcharts';
import { useMonth } from '../../contexts/MonthContext';

const PieChartData = ({ data }: PieChartType) => {

  const { selectedMonthLabel } = useMonth();

  const seriesData = Object.values(data).map(value => value || 0);

  const options: ApexOptions = {
    chart: {
      width: '100%',
      height: '100%',
      type: 'pie',
    },
    labels: ["electronics", "men's clothing", "women's clothing"],
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: '80%', },
          legend: { position: 'bottom', },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: { width: '100%', },
          legend: { position: 'bottom', },
        },
      },
    ],
  };

  if (!data) {
    return (
      <p className='flex items-center justify-center h-screen text-2xl text-purple-500'>
        Loading...
      </p>
    );
  }

  return (
    <div className="h-full w-full bg-[#EDF6F6]">
      <h1 className="m-4 text-2xl">Pie Chart - {selectedMonthLabel}</h1>
      <Chart options={options} series={seriesData} type="pie" width="100%" height="100%" />
    </div>
  );
};

export default PieChartData;

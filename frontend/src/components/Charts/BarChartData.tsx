import { BarChartType } from '../../types/types';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useMonth } from '../../contexts/MonthContext';

const BarChartData = ({ data }: BarChartType) => {
  // console.log(data);


  const { selectedMonthLabel } = useMonth();

  if (!data) {
    return <p className='flex items-center justify-center h-screen text-2xl text-purple-500'>Loading...</p>;
  }

  const series = [{
    name: "series-1",
    data: data.priceRangeCounts.map(item => item.count)
  }];

  const options: ApexOptions = {
    chart: {
      id: "basic-bar",
      width: '100%',
    },
    xaxis: {
      categories: data.priceRangeCounts.map(item => item.range),
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: '80%',
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
        },
      },
    ],
  };

  return (
    <div className="w-full h-full bg-[#EDF6F6]">
      <h1 className="m-4 text-2xl">Bar Chart - {selectedMonthLabel}</h1>
      <Chart options={options} series={series} type="bar" width="100%" height="100%" />
    </div>
  );
}

export default BarChartData;

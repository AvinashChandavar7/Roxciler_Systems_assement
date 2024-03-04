import { useMonth } from "../../contexts/MonthContext";
import { StatisticsType } from "../../types/types"

const TransitionsStatistics = ({ totalSaleAmount, soldItem, notSoldItem }: StatisticsType) => {

  const { selectedMonthLabel } = useMonth();

  return (
    <div className=" h-full bg-[#EDF6F6]">
      <h1 className="m-4 text-2xl ">Statistics - {selectedMonthLabel}</h1>

      <div className="grid grid-cols-2 p-4 m-4 bg-[#F8DF8C] border rounded-md ">
        <h1 className="">Total Sale</h1>
        <h1>{totalSaleAmount.toFixed(2)}</h1>

        <h1>Total Sold Item</h1>
        <h1>{soldItem}</h1>

        <h1>Total not Sold item</h1>
        <h1>{notSoldItem}</h1>
      </div>
    </div>
  )
}

export default TransitionsStatistics
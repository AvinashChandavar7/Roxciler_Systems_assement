// import { useMonth } from "../../contexts/MonthContext";


// const SearchFilter = () => {

//   const { selectedMonth, setMonth, months } = useMonth();


//   return (
//     <div>
//       <select className="p-2 px-8 bg-transparent border rounded-md"
//         value={selectedMonth} onChange={handleMonthChange}
//       >
//         {months.map(({ id, label, value }) => (
//           <option key={id} value={value} className="text-black bg-transparent">
//             {label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SearchFilter;


import React from "react";
import { useMonth } from "../../contexts/MonthContext";

const SearchFilter: React.FC = () => {
  const { selectedMonth, setMonth, months } = useMonth();

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <select
        className="p-2 px-8 bg-transparent border rounded-md"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {months.map(({ id, label, value }) => (
          <option key={id} value={value} className="text-black bg-transparent">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;



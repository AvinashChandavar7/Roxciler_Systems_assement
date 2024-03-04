import React, { createContext, useState, useContext, ReactNode } from "react";

interface MonthContextProps {
  selectedMonth: string;
  setMonth: (month: string) => void;
  months: {
    id: number;
    label: string;
    value: string
  }[];
  selectedMonthLabel: string | undefined;
}

const MonthContext = createContext<MonthContextProps | undefined>(undefined);

export const MonthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState("03");

  const months = [
    { id: 1, label: 'January', value: '01' },
    { id: 2, label: 'February', value: '02' },
    { id: 3, label: 'March', value: '03' },
    { id: 4, label: 'April', value: '04' },
    { id: 5, label: 'May', value: '05' },
    { id: 6, label: 'June', value: '06' },
    { id: 7, label: 'July', value: '07' },
    { id: 8, label: 'August', value: '08' },
    { id: 9, label: 'September', value: '09' },
    { id: 10, label: 'October', value: '10' },
    { id: 11, label: 'November', value: '11' },
    { id: 12, label: 'December', value: '12' },
  ];

  const selectedMonthLabel = months.find((month) => month.value === selectedMonth)?.label;


  const setMonth = (month: string) => {
    setSelectedMonth(month);
  };

  const value = {
    selectedMonth,
    setMonth,
    months,
    selectedMonthLabel
  };

  return (
    <MonthContext.Provider value={value}>
      {children}
    </MonthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMonth = (): MonthContextProps => {
  const context = useContext(MonthContext);
  if (!context) {
    throw new Error("useMonth must be used within a MonthProvider");
  }
  return context;
};

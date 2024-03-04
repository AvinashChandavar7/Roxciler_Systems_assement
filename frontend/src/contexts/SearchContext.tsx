import React, { createContext, useContext, } from "react";

type SearchContextProps = {
  searchText?: string
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);


export const SearchContextProvider = (
  { children }: { children: React.ReactNode }
) => {


  const value = {

  };


  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within an SearchContextProvider");
  }

  return context as SearchContextProps;
};
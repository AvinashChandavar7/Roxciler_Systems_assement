import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');


  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex items-center justify-center border rounded-md border-slate-500 bg-slate-700">

      <input
        type="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search..."
        className="p-2 bg-transparent outline-none"
      />
      <button onClick={handleSearch} className="px-2 rounded-md ">
        <img src="/search.svg" alt="search" width={20} height={20} />
      </button>
    </div>
  );
};

export default SearchBar;


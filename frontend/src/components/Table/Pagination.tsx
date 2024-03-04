/* eslint-disable react-refresh/only-export-components */

import { memo, useCallback } from 'react';

export type PaginationProps = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ page, pages, onPageChange }: PaginationProps) {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

  const memoizedOnPageChange = useCallback((number: number) => {
    onPageChange(number);
  }, [onPageChange]);

  const handlePrevPage = () => {
    if (page > 1) {
      memoizedOnPageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      memoizedOnPageChange(page + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {
        page !== 1 && (
          <button onClick={handlePrevPage}
            className={`px-4 py-2 cursor-pointer font-bold rounded-md border border-slate-500`}
          >
            Prev
          </button>
        )
      }
      <ul className="flex items-center gap-2">
        {pageNumbers.map((number, index) => (
          <li key={index} onClick={() => memoizedOnPageChange(number)}>
            <button
              className={`
              px-4 py-2 cursor-pointer font-bold rounded-md border border-slate-500 
              ${page === number ? "bg-slate-500 text-white" : "bg-slate-800 text-white"
                }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      {page !== pages && (
        <button onClick={handleNextPage}
          className={`px-4 py-2 cursor-pointer font-bold rounded-md border border-slate-500`}
        > Next
        </button>
      )}
    </div>
  );
}

export default memo(Pagination);


// ${page === page ? "bg-slate-500 text-white" : "bg-slate-800 text-white"}
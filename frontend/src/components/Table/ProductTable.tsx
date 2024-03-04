import { useEffect, useState } from 'react';

import ProductTableHead from './ProductTableHead';
import ProductTableBody from './ProductTableBody';

import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';

import { ProductType } from '../../types/types';

import { getAllProducts, searchProducts } from '../../api/productApi-clients';
import { useMonth } from '../../contexts/MonthContext';

const ProductTable = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);

  const { selectedMonth } = useMonth();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProductData(productData.slice(startIndex, endIndex));
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        const totalProducts = products.length;
        const totalPages = Math.ceil(totalProducts / itemsPerPage);

        setProductData(products.slice(startIndex, endIndex));
        setTotalPages(totalPages);
      } catch (error) {

        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, [currentPage, startIndex, endIndex]);

  const handleSearch = async (searchText: string) => {
    try {
      setLoading(true);
      if (!searchText) {
        const products = await getAllProducts();
        setProductData(products.slice(startIndex, endIndex));
      } else {
        const filteredProducts = await searchProducts(searchText, selectedMonth);
        setProductData(filteredProducts);
      }
    } catch (error) {
      console.error('Error searching products:', error);
    } finally {
      setLoading(false);
    }
  };






  if (loading) {
    return <p className='flex items-center justify-center h-screen text-purple-500 text-8xl'>
      Loading...
    </p>;
  }

  return (
    <div className="flex items-center justify-center h-full text-white bg-gray-900 ">
      <div className="p-8 bg-gray-800 rounded-lg">
        <h1 className="mb-6 text-3xl font-bold">Transaction List</h1>

        <div className="flex justify-between my-5">
          <SearchBar onSearch={handleSearch} />

          <SearchFilter />
        </div>


        <table className="w-full table-auto">
          <ProductTableHead />
          <ProductTableBody data={productData} />
        </table>



        <Pagination
          page={currentPage}
          pages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductTable;

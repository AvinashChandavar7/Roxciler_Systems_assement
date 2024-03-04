import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

import Product from "../models/product.model";

import { getProductData } from "../api/api";

import { SearchParams } from "../types/types";

const initDataHandler = asyncHandler(async (req, res) => {

  const existingProducts = await Product.find();

  if (existingProducts.length > 0) {
    return res.status(200).json(new ApiResponse(200, existingProducts, "Database already initialized with seed data"));
  }

  const response = await getProductData();
  // console.log(response);

  const product = await Product.insertMany(response)


  return res.status(200).json(new ApiResponse(200, product, "Database initialized with seed data"));
});

const getAllProductsData = asyncHandler(async (req, res) => {


  const products = await Product.find().sort({ id: 'asc' });


  if (products.length === 0) {
    throw new ApiError(404, "No products found");
  }


  return res.status(200).json(new ApiResponse(200, products, "Products retrieved successfully"));
});



const searchProduct = asyncHandler(async (req, res) => {

  // console.log(req.query)

  const query = constructorSearchQuery(req.query);

  const pageSize = 10;
  const pageNumber = parseInt(
    req.query.page ? req.query.page.toString() : "1"
  );

  if (isNaN(pageNumber) || pageNumber < 1) {
    throw new ApiError(400, "Invalid page number");
  }

  const skip = (pageNumber - 1) * pageSize;

  const product = await Product
    .find(query)
    .skip(skip)
    .limit(pageSize);

  const total = await Product.countDocuments();

  const response: SearchParams = {
    data: product,
    pagination: {
      total,
      page: pageNumber,
      pages: Math.ceil(total / pageSize)
    }
  }

  return res.status(200).json(new ApiResponse(200, response, "Products retrieved successfully"));
});


const constructorSearchQuery = (queryParams: any) => {
  const { searchText, selectedMonth } = queryParams;

  let constructedQuery: any = {};

  if (searchText) {
    constructedQuery.$or = [
      { title: new RegExp(searchText, "i") },
      { description: new RegExp(searchText, "i") },
      { price: !isNaN(parseFloat(searchText)) ? parseFloat(searchText) : null },
    ];
  }


  if (selectedMonth) {
    const startDate = new Date(`${selectedMonth}-01T00:00:00Z`);
    const endDate = new Date(`${selectedMonth}-31T23:59:59Z`);

    constructedQuery.dateOfSale = { $gte: startDate, $lte: endDate };
  }


  return constructedQuery;
};




export {
  initDataHandler,
  getAllProductsData,
  searchProduct
};
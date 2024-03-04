import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";


import Product from "../models/product.model";

const statisticsOfTheProductRoutes = asyncHandler(async (req, res) => {

  const { month } = req.query as any;
  if (!month) return res.status(400).json({ message: "Provide month" });

  const query = {
    $expr: {
      $eq: [{ $month: { $toDate: "$dateOfSale" } }, parseInt(month)],
    },
  };
  const data = await Product.find(query);

  const totalSaleAmount = data.reduce(
    (acc, product) => acc + product.price,
    0
  );
  const soldItem = data.filter((product) => product.sold === true).length;
  const notSoldItem = data.filter((product) => product.sold !== true).length;

  const response = {
    totalSaleAmount,
    soldItem,
    notSoldItem,
  }

  return res.status(200).json({ statusCode: 200, response, message: "", success: true });
});




const barChartOfTheProductRoutes = asyncHandler(async (req, res) => {

  const { month } = req.query;

  const startDate = new Date(`${month}-01T00:00:00Z`);
  const endDate = new Date(`${month}-31T23:59:59Z`);

  const priceRanges = [
    { range: '0-100', min: 0, max: 100 },
    { range: '101-200', min: 101, max: 200 },
    { range: '201-300', min: 201, max: 300 },
    { range: '301-400', min: 301, max: 400 },
    { range: '401-500', min: 401, max: 500 },
    { range: '501-600', min: 501, max: 600 },
    { range: '601-700', min: 601, max: 700 },
    { range: '701-800', min: 701, max: 800 },
    { range: '801-900', min: 801, max: 900 },
    { range: '901-above', min: 901, max: Infinity }
  ];

  const priceRangeCounts = await Promise.all(
    priceRanges.map(
      async ({ range, min, max }) => {
        const count = await Product.countDocuments({
          dateOfSale: { $gte: startDate, $lte: endDate },
          price: { $gte: min, ...(max !== Infinity ? { $lte: max } : {}) }
        });
        return { range, count };
      }
    )
  );


  const response = { priceRangeCounts }



  return res.status(200).json(new ApiResponse(200, response, ""));
});

const pieChartOfTheProductRoutes = asyncHandler(async (req, res) => {

  const { month } = req.query as any;

  if (!month || isNaN(parseInt(month))) {
    throw new ApiError(400, "Provide a valid month");
  }
  const query = {
    $expr: {
      $eq: [{ $month: { $toDate: "$dateOfSale" } }, parseInt(month)],
    },
  };

  const categoryCounts = await Product.aggregate([
    { $match: query },
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
      },
    },
  ]);

  const response: { [key: string]: number } = categoryCounts.reduce(
    (acc, categoryCount) => {
      acc[categoryCount._id] = categoryCount.count;
      return acc;
    }, {}
  );

  return res.status(200).json(new ApiResponse(200, response, "Successfully retrieved pie chart data."));
});


const combinedDataAPI = asyncHandler(async (req, res) => {
  const { month } = req.query as any;
  if (!month || isNaN(parseInt(month))) {
    throw new ApiError(400, "Provide a valid month");
  }
  const URL = `http://localhost:8000/api/v1/analytics/`;


  const [statistics, barChart, pieChart] = await Promise.all([
    fetch(`${URL}statistics?month=${month}`).then(response => response.json()),
    fetch(`${URL}bar-chart?month=${month}`).then(response => response.json()),
    fetch(`${URL}pie-chart?month=${month}`).then(response => response.json()),
  ]);

  const response = {
    statistics,
    barChart,
    pieChart,
  };

  return res.status(200).json(new ApiResponse(200, response, "Combined data retrieved successfully"));

});


export {
  statisticsOfTheProductRoutes,
  barChartOfTheProductRoutes,
  pieChartOfTheProductRoutes,
  combinedDataAPI
};
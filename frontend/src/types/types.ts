export type ProductType = {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sold: boolean;
  dateOfSale: string;
  timestamp: Date;
}


export type SearchParams = {
  data: ProductType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  }
}


interface CommonResponseType<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

export interface StatisticsType {
  totalSaleAmount: number;
  soldItem: number;
  notSoldItem: number;
}

export interface PriceRangeCount {
  range: string;
  count: number;
}


export interface BarChartType {
  data?: {
    priceRangeCounts: PriceRangeCount[];
  }
}


export interface PieChartType {
  data: {
    electronics: number | null;
    "men's clothing": number | null;
    "women's clothing": number | null;
  };
}

export interface CombinedDataType {
  statistics: CommonResponseType<StatisticsType>;
  barChart: CommonResponseType<BarChartType>;
  pieChart: CommonResponseType<PieChartType>;
  message: string;
  success: boolean;
}

import { Document } from "mongoose";

export interface ProductType extends Document {
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
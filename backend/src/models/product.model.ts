import { Schema, models, model } from "mongoose";
import { ProductType } from "../types/types";

const productSchema = new Schema<ProductType>(
  {
    id: { type: "number", required: true, },
    title: { type: "string", required: true, lowercase: true, trim: true, index: true, },
    description: { type: "string", required: true, lowercase: true, trim: true, index: true, },
    price: { type: "number", required: true },
    category: { type: "string", required: true },
    image: { type: "string", required: true },
    sold: { type: "boolean", required: true },
    dateOfSale: { type: "string", required: true },
  },
  { timestamps: true }
);

const Product = models.Product || model<ProductType>("Product", productSchema);

export default Product;
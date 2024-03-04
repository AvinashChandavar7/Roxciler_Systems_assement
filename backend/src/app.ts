import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import cookieParser from "cookie-parser";
import path from 'path';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));


app.use(cookieParser());

import productRoutes from "./routes/product.routes"
import analyticsRoutes from "./routes/analytics.routes"

app.use("/api/v1/product", productRoutes)
app.use("/api/v1/analytics", analyticsRoutes)

app.get("*", (req: Request, res: Response) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/dist/index.html")
  );
})


export { app };
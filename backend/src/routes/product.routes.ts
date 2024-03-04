import { Router } from "express";


import {
  initDataHandler,
  getAllProductsData,
  searchProduct,

} from "../controllers/product.controller";



const router = Router();

router.get('/initialize-seed-data', initDataHandler);

router.get("/", getAllProductsData);

router.get("/search", searchProduct)

router

export default router;

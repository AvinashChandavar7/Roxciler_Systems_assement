import { Router } from "express";


import {

  statisticsOfTheProductRoutes,
  barChartOfTheProductRoutes,
  pieChartOfTheProductRoutes,
  combinedDataAPI
} from "../controllers/analytics.controller";



const router = Router();



router.get("/statistics", statisticsOfTheProductRoutes)
router.get("/bar-chart", barChartOfTheProductRoutes)
router.get("/pie-chart", pieChartOfTheProductRoutes)

router.get("/combined-chart", combinedDataAPI)


export default router;

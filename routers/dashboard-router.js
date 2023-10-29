import express from "express";

import { dashboardPage } from "../controllers/dashboard-controller.js";

const router = express.Router();

router.get("/", dashboardPage);

export default router;

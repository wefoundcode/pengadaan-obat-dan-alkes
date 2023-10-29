import express from "express";
import dashboardRoute from "./dashboard-router.js";

const router = express.Router();

router.use("/", dashboardRoute);

export default router;

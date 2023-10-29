import express from "express";
import cors from "cors";
import "dotenv/config";
import apiRouter from "./routers/api-router.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(apiRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `HTTP server is running on http://localhost:${process.env.SERVER_PORT}`
  );
});

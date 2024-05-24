import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import { carRouter } from "./routes/car.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
app.use("/cars", carRouter);
app.use(HandleErrors.execute);

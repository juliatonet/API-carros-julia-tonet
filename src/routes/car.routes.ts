import { Router } from "express";
import { CarControllers } from "../controllers/car.controller";
import { validate } from "../middlewares/validate.middleware";
import { validateId } from "../middlewares/validateId.middleware";
import { createCarSchema, carUpdateSchema } from "../schemas/car.schema";

export const carRouter = Router();
const carController = new CarControllers();

carRouter.post("/", validate.execute(createCarSchema), carController.create);
carRouter.get("/", carController.findMany);
carRouter.get("/:id", validateId.execute, carController.getOne);
carRouter.patch(
  "/:id",
  validate.execute(carUpdateSchema),
  carController.update
);
carRouter.delete("/:id", validateId.execute, carController.delete);

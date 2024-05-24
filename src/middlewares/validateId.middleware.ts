import { Response, Request, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class validateId {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const car = await prisma.car.findUnique({ where: { id } });

    if (!car) {
      throw new AppError(404, "Car not found.");
    }
    return next();
  }
}

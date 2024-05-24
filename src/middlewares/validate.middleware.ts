import { NextFunction, Request, Response } from "express";
import { ZodError, z } from "zod";
import { AppError } from "../errors/AppError";

export class validate {
  static execute(schema: z.AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = schema.parse(req.body);
        next();
      } catch (error) {
        if (error instanceof ZodError) {
          throw new AppError(400, "Validation failed.");
        }
      }
    };
  }
}

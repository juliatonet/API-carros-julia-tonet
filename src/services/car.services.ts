import { prisma } from "../database/prisma";
import { TCarSchema, TCreateCarSchema } from "../schemas/car.schema";

export class CarServices {
  async create(body: TCreateCarSchema): Promise<TCarSchema> {
    return await prisma.car.create({ data: body });
  }

  async findMany(): Promise<TCarSchema[]> {
    return await prisma.car.findMany();
  }

  async getOne(id: string): Promise<TCarSchema | null> {
    return await prisma.car.findFirst({ where: { id } });
  }
}

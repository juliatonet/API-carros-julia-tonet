import { prisma } from "../database/prisma";
import {
  TCarSchema,
  TCarUpdateSchema,
  TCreateCarSchema,
} from "../schemas/car.schema";

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

  async update(id: string, body: TCarUpdateSchema): Promise<TCarSchema> {
    return await prisma.car.update({ where: { id }, data: body });
  }

  async delete(id: string): Promise<void> {
    await prisma.car.delete({ where: { id } });
  }
}

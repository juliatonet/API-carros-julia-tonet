import { request } from "../utils/request";
import { carMock } from "../__mocks__/car.mock";
import { prisma } from "../../database/prisma";

describe("Integration test: delete one car", () => {
  test("Should be able to delete one car by its id correctly", async () => {
    const car = await prisma.car.create({ data: carMock });
    await request.delete(`/cars/${car.id}`).expect(200);
    await request.get(`/cars/${car.id}`).expect(404);
  });
});

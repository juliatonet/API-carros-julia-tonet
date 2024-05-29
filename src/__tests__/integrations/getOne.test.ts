import { request } from "../utils/request";
import { carMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { prisma } from "../../database/prisma";

describe("Integration test: get one car", () => {
  test("Should be able the get one car by his id correctly", async () => {
    const createdCar = await prisma.car.create({ data: carMock });

    const data = await request
      .get(`/cars/${createdCar.id}`)
      .expect(200)
      .then((response) => response.body);
    carDefaultExpects(data, carMock);
  });
});

import { request } from "../utils/request";
import { prisma } from "../../database/prisma";
import { carCreateMock, carUpdateMock } from "../__mocks__/car.mock";

describe("Integration test: update car", () => {
  test("Car update should be able to update a car correctly", async () => {
    const car = await prisma.car.create({ data: carCreateMock });
    const data = await request
      .patch(`/cars/${car.id}`)
      .send(carUpdateMock)
      .expect(200)
      .then((response) => response.body);
    const updatedCar = { ...car, ...carUpdateMock };
    expect(data).toStrictEqual(updatedCar);
  });
});

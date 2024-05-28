import { CarServices } from "../../services/car.services";
import { prismaMock } from "../__mocks__/prisma";
import { carMock, carCreateMock } from "../__mocks__/car.mock";

describe("Unit test: create car", () => {
  test("create car should be able to create a car correctly", async () => {
    const carService = new CarServices();
    prismaMock.car.create.mockResolvedValue(carMock);
    const data = await carService.create(carCreateMock);
    expect(data).toStrictEqual(carMock);
  });
});

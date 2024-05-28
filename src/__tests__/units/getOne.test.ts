import { CarServices } from "../../services/car.services";
import { carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit:test get one car", () => {
  test("Should be able the get one car by his id correctly", async () => {
    const carService = new CarServices();
    prismaMock.car.findFirst.mockResolvedValue(carMock);
    const data = await carService.getOne(carMock.id);
    expect(data).toStrictEqual(carMock);
  });
});

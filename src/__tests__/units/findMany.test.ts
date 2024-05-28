import { CarServices } from "../../services/car.services";
import { prismaMock } from "../__mocks__/prisma";
import { carFindManyMock } from "../__mocks__/car.mock";

describe("Unit:test get many cars", () => {
  test("Get many cars should return a list of cars", async () => {
    const carService = new CarServices();
    prismaMock.car.findMany.mockResolvedValue(carFindManyMock);
    const data = await carService.findMany();

    expect(data).toHaveLength(2);
    expect(data[0]).toStrictEqual(carFindManyMock[0]);
    expect(data[1]).toStrictEqual(carFindManyMock[1]);
  });
});

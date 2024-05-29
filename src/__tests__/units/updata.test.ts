import { CarServices } from "../../services/car.services";
import { prismaMock } from "../__mocks__/prisma";
import { carMock, carUpdateMock } from "../__mocks__/car.mock";

describe("Unit test: car update", () => {
  test("Car update should be able to update a car correctly", async () => {
    const carService = new CarServices();
    const updatedCar = { ...carMock, ...carUpdateMock };
    prismaMock.car.update.mockResolvedValue(updatedCar);
    const data = await carService.update(carMock.id, carUpdateMock);
    expect(data).toStrictEqual(updatedCar);
  });
});

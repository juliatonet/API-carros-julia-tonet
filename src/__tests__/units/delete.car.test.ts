import { CarServices } from "../../services/car.services";
import { carMock } from "../__mocks__/car.mock";

describe("Unit test: delete car", () => {
  test("The test should be able to delete a car correctly", async () => {
    const carService = new CarServices();
    await carService.delete(carMock.id);
  });
});

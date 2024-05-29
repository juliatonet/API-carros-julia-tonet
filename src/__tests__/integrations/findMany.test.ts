import { request } from "../utils/request";
import { carFindManyMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { prisma } from "../../database/prisma";

describe("Integration test: find many cars", () => {
  test("Get many cars should return a list of cars", async () => {
    const carList = await prisma.car.createMany({ data: carFindManyMock });
    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);
    expect(data).toHaveLength(2);
    carDefaultExpects(data[0], carFindManyMock[0]);
    carDefaultExpects(data[1], carFindManyMock[1]);
  });
});

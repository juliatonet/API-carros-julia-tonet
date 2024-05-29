import { request } from "../utils/request";
import { carCreateMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Integration test: car create", () => {
  test("create car should be able to create a car correctly", async () => {
    const data = await request
      .post("/cars")
      .send(carCreateMock)
      .expect(201)
      .then((response) => response.body);
    carDefaultExpects(data, carCreateMock);
  });
});

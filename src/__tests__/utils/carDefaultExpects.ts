import { TCarSchema, TCreateCarSchema } from "../../schemas/car.schema";

export const carDefaultExpects = (
  data: TCarSchema,
  expectData: TCreateCarSchema
) => {
  expect(data.id).toBeDefined(),
    expect(data.name).toBe(expectData.name),
    expect(data.description).toBe(expectData.description),
    expect(data.brand).toBe(expectData.brand),
    expect(data.year).toBe(expectData.year),
    expect(data.km).toBe(expectData.km);
};

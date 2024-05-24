import { z } from "zod";

export const carSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  brand: z.string(),
  year: z.number().int(),
  km: z.number().int(),
});

export const createCarSchema = carSchema.omit({ id: true });
export const carUpdateSchema = createCarSchema.partial();
export type TCreateCarSchema = z.infer<typeof createCarSchema>;
export type TCarSchema = z.infer<typeof carSchema>;
export type TCarUpdateSchema = z.infer<typeof carUpdateSchema>;

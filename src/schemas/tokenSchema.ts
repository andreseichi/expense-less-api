import { z } from "zod";

export const tokenSchema = z.object({
  authorization: z
    .string({
      required_error: "Authorization header is required",
    })
    .regex(/^Bearer .+$/, {
      message: "Authorization header must be a Bearer token",
    }),
});

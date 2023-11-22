import { z } from "zod";

export const transactionSchema = z.object({
  amount: z
    .number({
      required_error: "Amount is required",
    })
    .positive()
    .min(0.01),
  description: z.string().nullable(),
  type: z.enum(["income", "expense"], {
    required_error: "Type is required",
    invalid_type_error: "Type must be income or expense",
  }),
  name: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(1),
  categoryId: z.number({
    required_error: "Category is required",
  }),
});

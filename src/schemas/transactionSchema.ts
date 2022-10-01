import joi from "joi";

export const transactionSchema = joi.object({
  amount: joi.number().required(),
  description: joi.string().trim().required(),
  type: joi.string().trim().valid("income", "expense").required(),
  name: joi.string().trim().required(),
  categoryId: joi.number().required(),
});

import joi from "joi";

export const tokenSchema = joi
  .object({
    authorization: joi
      .string()
      .pattern(/^Bearer .+$/)
      .required(),
  })
  .unknown(true);

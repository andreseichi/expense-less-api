import joi from "joi";

export const signUpSchema = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().min(10).required(),
});

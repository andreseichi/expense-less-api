import joi from "joi";

export const signUpSchema = joi
  .object({
    name: joi.string().trim().required(),
    email: joi.string().email().trim().required(),
    pictureUrl: joi.string().trim().uri().allow("", null).optional(),
    password: joi.string().min(10).required(),
    confirmPassword: joi.ref("password"),
  })
  .with("password", "confirmPassword");

export const signInSchema = joi.object({
  email: joi.string().email().trim().required(),
  password: joi.string().min(10).required(),
});

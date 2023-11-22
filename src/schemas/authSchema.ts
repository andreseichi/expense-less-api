import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().trim().min(1, "name cannot be empty"),
    email: z.string().email(),
    pictureUrl: z.string().url().optional(),
    password: z.string().min(5, "password must be at least 5 characters"),
    confirmPassword: z
      .string()
      .min(5, "password must be at least 5 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email().trim().min(1, "email cannot be empty"),
  password: z.string(),
});

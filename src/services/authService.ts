import { hashSync, compareSync } from "bcrypt";

import { findByEmail, insert } from "../repositories/authRepository";

import { UserData, UserInsertData } from "../types/users";
import { generateAccessToken } from "../utils/jwt";

export async function createUser(user: UserData) {
  const { password, confirmPassword } = user;

  if (password !== confirmPassword) {
    throw {
      type: "BAD_REQUEST",
      message: "Password and confirm password must be the same",
    };
  }

  const userData = { email: user.email, password: hashSync(user.password, 10) };
  const result = await insert(userData);
  if (!result) {
    throw {
      type: "CONFLICT",
      message: "User already exists",
    };
  }

  return { id: result.id, email: result.email, createdAt: result.createdAt };
}

export async function signinService(user: UserInsertData) {
  const userDB = await findByEmail(user.email);

  if (!userDB) {
    throw {
      type: "UNAUTHORIZED",
      message: "email or password is incorrect",
    };
  }

  const isPasswordMatch = compareSync(user.password, userDB.password);
  if (!isPasswordMatch) {
    throw {
      type: "UNAUTHORIZED",
      message: "email or password is incorrect",
    };
  }

  const token = generateAccessToken({ id: userDB.id, email: userDB.email });
  return token;
}

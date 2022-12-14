import { hashSync, compareSync } from "bcrypt";

import { findByEmail, insert } from "../repositories/authRepository";

import { UserData, UserLogin } from "../types/users";
import { generateAccessToken } from "../utils/jwt";

export async function createUser(user: UserData) {
  const { password, confirmPassword } = user;

  if (password !== confirmPassword) {
    throw {
      type: "BAD_REQUEST",
      message: "Password and confirm password must be the same",
    };
  }

  const userData = {
    name: user.name,
    email: user.email,
    pictureUrl: user.pictureUrl || null,
    password: hashSync(user.password, 10),
  };
  const userDB = await findByEmail(user.email);
  if (userDB) {
    throw {
      type: "CONFLICT",
      message: "User already exists",
    };
  }

  const result = await insert(userData);
  return {
    id: result.id,
    name: result.name,
    email: result.email,
    pictureUrl: result.pictureUrl || null,
    createdAt: result.createdAt,
  };
}

export async function signinService(user: UserLogin) {
  const userDB = await findByEmail(user.email);

  if (!userDB) {
    throw {
      type: "UNAUTHORIZED",
      message: "Invalid email or password",
    };
  }

  const isPasswordMatch = compareSync(user.password, userDB.password);
  if (!isPasswordMatch) {
    throw {
      type: "UNAUTHORIZED",
      message: "Invalid email or password",
    };
  }

  const token = generateAccessToken({
    id: userDB.id,
    name: userDB.name,
    email: userDB.email,
    pictureUrl: userDB.pictureUrl || null,
  });
  return token;
}

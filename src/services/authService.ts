import { hashSync } from "bcrypt";

import { insert } from "../repositories/authRepository";
import { UserInsertData } from "../types/users";

export async function createUser(user: UserInsertData) {
  const userData = { ...user, password: hashSync(user.password, 10) };

  const result = await insert(userData);

  if (!result) {
    throw {
      type: "USER_ALREADY_EXISTS",
      message: "User already exists",
    };
  }

  return result;
}

import { Request, Response } from "express";

import { createUser } from "../services/authService";
import { UserInsertData } from "../types/users";

export async function signup(req: Request, res: Response) {
  const { body }: Record<string, UserInsertData> = res.locals;

  const result = await createUser(body);

  return res.send(result);
}

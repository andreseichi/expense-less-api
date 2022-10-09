import { Request, Response } from "express";

import { createUser, signinService } from "../services/authService";
import { UserData, UserLogin } from "../types/users";

export async function signup(req: Request, res: Response) {
  const { body }: Record<string, UserData> = res.locals;

  const result = await createUser(body);

  return res.status(201).send(result);
}

export async function signin(req: Request, res: Response) {
  const { body }: Record<string, UserLogin> = res.locals;

  const token = await signinService(body);

  return res.status(200).send({ token });
}

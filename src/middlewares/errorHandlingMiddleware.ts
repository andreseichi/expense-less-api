import { NextFunction, Request, Response } from "express";
import { errors } from "../types/errors";

export const errorHandlingMiddleware = (
  error: errors,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.type === "USER_ALREADY_EXISTS")
    return res.status(409).send({ message: error.message });

  return res.sendStatus(500);
};

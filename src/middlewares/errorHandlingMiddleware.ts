import { NextFunction, Request, Response } from "express";
import { errors } from "../types/errors";

export const errorHandlingMiddleware = (
  error: errors,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  switch (error.type) {
    case "BAD_REQUEST":
      return res.status(400).send({ message: error.message });

    case "UNAUTHORIZED":
      return res.status(401).send({ message: error.message });

    case "FORBIDDEN":
      return res.status(403).send({ message: error.message });

    case "NOT_FOUND":
      return res.status(404).send({ message: error.message });

    case "CONFLICT":
      return res.status(409).send({ message: error.message });

    default:
      return res.status(500).send({ message: error.message });
  }
};

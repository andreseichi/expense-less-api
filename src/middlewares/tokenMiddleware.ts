import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const JWT_ACCESS_SECRET = String(process.env.JWT_ACCESS_SECRET);

    const token: string = res.locals.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, JWT_ACCESS_SECRET);

    res.locals.payload = payload;
  } catch (error: any) {
    if (error.message === "jwt expired") {
      return res.status(401).send({ message: "Token expired" });
    }
    return res.status(401).send({ message: "Invalid token" });
  }

  return next();
};

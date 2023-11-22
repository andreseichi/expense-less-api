import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateSchema = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.safeParse(req.body);
    if (!validation.success) {
      return res
        .status(422)
        .send(validation.error.issues.map((issue) => issue.message));
    }

    res.locals.body = validation.data;
    next();
  };
};

export const validateHeaderSchema = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.safeParse(req.headers);
    if (!validation.success) {
      return res
        .status(422)
        .send(validation.error.issues.map((details) => details.message));
    }

    res.locals.headers = validation.data;
    next();
  };
};

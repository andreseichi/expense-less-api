import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validateSchema = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      return res
        .status(422)
        .send(validation.error.details.map((details) => details.message));
    }
    res.locals.body = validation.value;
    next();
  };
};

export const validateHeaderSchema = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.headers, { abortEarly: false });
    if (validation.error) {
      return res
        .status(422)
        .send(validation.error.details.map((details) => details.message));
    }
    res.locals.headers = validation.value;
    next();
  };
};

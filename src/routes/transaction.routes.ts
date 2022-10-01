import { Router } from "express";
import { createTransaction } from "../controllers/transactionController";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { transactionSchema } from "../schemas/transactionSchema";

const transactionRouter = Router();

transactionRouter.post(
  "/transaction",
  validateSchema(transactionSchema),
  createTransaction
);

export { transactionRouter };
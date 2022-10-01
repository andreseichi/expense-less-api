import { Router } from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { transactionSchema } from "../schemas/transactionSchema";

const transactionRouter = Router();

transactionRouter.get("/transactions", getTransactions);
transactionRouter.post(
  "/transaction",
  validateSchema(transactionSchema),
  createTransaction
);

export { transactionRouter };

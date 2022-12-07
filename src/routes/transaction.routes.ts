import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
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
transactionRouter.put(
  "/transaction/:id",
  validateSchema(transactionSchema),
  updateTransaction
);

transactionRouter.delete("/transaction/:id", deleteTransaction);

export { transactionRouter };

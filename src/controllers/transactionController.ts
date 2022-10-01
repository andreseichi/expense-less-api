import { Request, Response } from "express";
import { transactionService } from "../services/transactionService";
import { PayloadToken } from "../types/payload";
import { TransactionData, TransactionInsertData } from "../types/transaction";

export async function createTransaction(req: Request, res: Response) {
  const { user }: PayloadToken = res.locals.payload;
  const { body }: Record<string, TransactionData> = res.locals;

  const transactionInsertData: TransactionInsertData = {
    ...body,
    userId: user.id,
  };

  const transaction = await transactionService.create(transactionInsertData);

  res.status(201).send(transaction);
}

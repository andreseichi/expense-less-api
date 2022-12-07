import { Request, Response } from "express";
import { transactionService } from "../services/transactionService";
import { PayloadToken } from "../types/payload";
import { TransactionData, TransactionInsertData } from "../types/transaction";

export async function getTransactions(req: Request, res: Response) {
  const { user } = res.locals.payload as PayloadToken;

  const transactions = await transactionService.getAll(user.id);

  res.send(transactions);
}

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

export async function updateTransaction(req: Request, res: Response) {
  const { id } = req.params;
  const { user }: PayloadToken = res.locals.payload;
  const { body }: Record<string, TransactionData> = res.locals;

  const transactionInsertData: TransactionInsertData = {
    ...body,
    userId: user.id,
  };

  const transactionUpdated = await transactionService.update(
    Number(id),
    transactionInsertData
  );

  res.send(transactionUpdated);
}

export async function deleteTransaction(req: Request, res: Response) {
  const { id } = req.params;

  await transactionService.remove(Number(id));

  res.sendStatus(204);
}

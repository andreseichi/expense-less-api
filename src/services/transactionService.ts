import { insert, selectAll } from "../repositories/transactionRepository";
import { TransactionInsertData } from "../types/transaction";

async function getAll(userId: number) {
  const transactions = await selectAll(userId);

  return transactions;
}

async function create(createTransactionData: TransactionInsertData) {
  const transactionInsertData = {
    ...createTransactionData,
    amount: createTransactionData.amount,
  };

  const transaction = await insert(transactionInsertData);

  return transaction;
}

export const transactionService = {
  getAll,
  create,
};

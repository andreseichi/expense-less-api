import { insert } from "../repositories/transactionRepository";
import { TransactionInsertData } from "../types/transaction";

async function create(createTransactionData: TransactionInsertData) {
  const transactionInsertData = {
    ...createTransactionData,
    amount: createTransactionData.amount * 100,
  };

  const transaction = await insert(transactionInsertData);

  return transaction;
}

export const transactionService = {
  create,
};

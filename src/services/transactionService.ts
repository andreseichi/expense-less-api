import {
  deleteTransaction,
  insert,
  select,
  selectAll,
  updateTransaction,
} from "../repositories/transactionRepository";
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

async function update(
  id: number,
  updateTransactionData: TransactionInsertData,
) {
  const { userId } = updateTransactionData;

  const transactionToUpdate = await select(id);

  if (!transactionToUpdate) {
    throw {
      type: "NOT_FOUND",
      message: "Transaction not found",
    };
  }

  if (transactionToUpdate.userId !== userId) {
    throw {
      type: "FORBIDDEN",
      message: "You don't have permission to update this transaction",
    };
  }

  const transactionUpdated = await updateTransaction(id, updateTransactionData);

  return transactionUpdated;
}

async function remove(id: number) {
  await deleteTransaction(id);
}

export const transactionService = {
  getAll,
  create,
  update,
  remove,
};

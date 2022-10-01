import { Transaction } from "@prisma/client";

export type CreateTransactionData = {
  description: string;
  amount: number;
  type: TransactionType;
  name: string;
  categoryId: number;
  userId: number;
};

export type TransactionData = Omit<
  Transaction,
  "id" | "userId" | "createdAt" | "updatedAt" | "date"
>;

export type TransactionInsertData = TransactionData & {
  userId: number;
};

enum TransactionType {
  income = "income",
  expense = "expense",
}

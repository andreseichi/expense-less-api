import { prisma } from "../database/prisma";
import { TransactionInsertData } from "../types/transaction";

export async function insert(transaction: TransactionInsertData) {
  const result = await prisma.transaction.create({
    data: transaction,
  });

  return result;
}

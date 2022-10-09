import { prisma } from "../database/prisma";
import { TransactionInsertData } from "../types/transaction";

export async function selectAll(userId: number) {
  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
    },
    include: {
      Category: {
        select: {
          name: true,
          id: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  return transactions;
}

export async function insert(transaction: TransactionInsertData) {
  const result = await prisma.transaction.create({
    data: transaction,
  });

  return result;
}

export async function deleteTransaction(id: number) {
  await prisma.transaction.delete({
    where: {
      id,
    },
  });
}

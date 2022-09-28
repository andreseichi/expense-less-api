import { prisma } from "../database/prisma";
import { UserInsertData } from "../types/users";

export async function findByEmail(email: string) {
  const result = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return result;
}

export async function insert(user: UserInsertData) {
  const result = await prisma.user
    .findUnique({
      where: {
        email: user.email,
      },
    })
    .then((userDB) => {
      if (userDB) return null;

      return prisma.user.create({
        data: user,
      });
    });

  return result;
}

import { prisma } from "./../../src/database/prisma";
import categoryFactory from "./categoryFactory";

export default async function createCategories() {
  await prisma.category.createMany({
    data: [
      categoryFactory("Education"),
      categoryFactory("Family"),
      categoryFactory("Transport"),
      categoryFactory("Market"),
      categoryFactory("Gift"),
      categoryFactory("Food"),
      categoryFactory("Home"),
      categoryFactory("Entertainment"),
      categoryFactory("Health"),
      categoryFactory("Other"),
    ],
    skipDuplicates: true,
  });

  return await prisma.category.findMany();
}

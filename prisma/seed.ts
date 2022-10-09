import { prisma } from "../src/database/prisma";
import createCategories from "./factories/createCategories";

async function main() {
  await createCategories();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

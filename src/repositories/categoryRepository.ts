import { prisma } from "../database/prisma";
import { CreateCategoryData } from "../types/category";

export async function selectAll() {
  const categories = await prisma.category.findMany();

  return categories;
}

export async function insert(category: CreateCategoryData) {
  const result = await prisma.category.create({
    data: category,
  });

  return result;
}

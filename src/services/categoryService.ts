import { insert, selectAll } from "../repositories/categoryRepository";
import { CategoryInsertData } from "../types/category";

async function getAll() {
  const categories = await selectAll();

  return categories;
}

async function create(createCategoryData: CategoryInsertData) {
  const category = await insert(createCategoryData);

  return category;
}

export const categoryService = {
  getAll,
  create,
};

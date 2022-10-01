import { Category } from "@prisma/client";

export type CreateCategoryData = Omit<Category, "id" | "createdAt">;

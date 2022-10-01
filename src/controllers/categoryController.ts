import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { CreateCategoryData } from "../types/category";

export async function getCategories(req: Request, res: Response) {
  const categories = await categoryService.getAll();

  res.send(categories);
}

export async function createCategory(req: Request, res: Response) {
  const { body }: Record<string, CreateCategoryData> = res.locals;

  const category = await categoryService.create(body);

  res.status(201).send(category);
}

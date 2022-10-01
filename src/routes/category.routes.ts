import { Router } from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { categorySchema } from "../schemas/categorySchema";

const categoryRouter = Router();

categoryRouter.get("/category", getCategories);
categoryRouter.post(
  "/category",
  validateSchema(categorySchema),
  createCategory
);

export { categoryRouter };

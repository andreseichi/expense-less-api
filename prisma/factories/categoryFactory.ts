import { CreateCategoryData } from "../../src/types/category";

export default function categoryFactory(name: string): CreateCategoryData {
  return {
    name,
  };
}

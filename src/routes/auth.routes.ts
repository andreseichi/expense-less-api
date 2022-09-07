import { Router } from "express";
import { signup } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { signUpSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signUpSchema), signup);

export { authRouter };
